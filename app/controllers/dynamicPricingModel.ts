import * as tf from '@tensorflow/tfjs';
import { getProductMetrics } from './productMetrics';

export class DynamicPricingModel {
  minPrice: number;
  maxPrice: number;
  qNetwork: tf.LayersModel;
  targetNetwork: tf.LayersModel;
  experienceBuffer: Array<{
    state: number[];
    action: number;
    reward: number;
    nextState: number[];
  }> = [];
  
  // Q-learning hyperparameters
  readonly NUM_ACTIONS = 10;  // Discretize price levels into 10 actions
  readonly EPSILON = 0.1;     // Exploration rate
  readonly GAMMA = 0.95;      // Discount factor
  readonly LEARNING_RATE = 0.001;
  readonly BUFFER_SIZE = 1000;
  readonly BATCH_SIZE = 32;
  readonly TARGET_UPDATE_FREQ = 100;  
  
  private updateCounter = 0;

  constructor(minPrice: number, maxPrice: number) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.qNetwork = this.buildNetwork();
    this.targetNetwork = this.buildNetwork();
    // Sync initial weights
    this.targetNetwork.setWeights(this.qNetwork.getWeights());
  }

  private buildNetwork(): tf.LayersModel {
    const model = tf.sequential();
    model.add(tf.layers.dense({
      units: 64,
      activation: 'relu',
      inputShape: [6] 
    }));
    model.add(tf.layers.dense({
      units: 32,
      activation: 'relu'
    }));
    model.add(tf.layers.dense({
      units: this.NUM_ACTIONS,  
      activation: 'linear'      
    }));
    model.compile({
      optimizer: tf.train.adam(this.LEARNING_RATE),
      loss: 'meanSquaredError'
    });
    return model;
  }

  private async getState(productId: string, request?: Request): Promise<number[]> {
    const metrics = await getProductMetrics(productId, request);
    return [
      metrics.inventory / 100,
      metrics.cartAdds / 50,
      metrics.views / 500,
      metrics.timeSinceListing / 365,
      metrics.recentSalesVolume / 100,
      metrics.cartAbandonmentRate
    ];
  }

  private actionToPrice(action: number): number {
    const priceRange = this.maxPrice - this.minPrice;
    const price = this.minPrice + (action / (this.NUM_ACTIONS - 1)) * priceRange;
    return Math.round(price * 100) / 100;  // Round to 2 decimal places
  }

  private calculateReward(oldState: number[], newState: number[], price: number): number {
    const revenue = newState[4] * price; 
    const inventoryChange = (oldState[0] - newState[0]) * 100; 
    const abandonmentPenalty = newState[5] * 100;  
    
    return revenue + (inventoryChange * price) - abandonmentPenalty;
  }

  async predict(productId: string, request?: Request): Promise<number> {
    try {
      const state = await this.getState(productId, request);
      const stateTensor = tf.tensor2d([state], [1, 6]);

      // ε-greedy exploration
      if (Math.random() < this.EPSILON) {
        // Explore: random action
        const randomAction = Math.floor(Math.random() * this.NUM_ACTIONS);
        return this.actionToPrice(randomAction);
      }

      // Exploit: best action according to Q-values
      const qValues = this.qNetwork.predict(stateTensor) as tf.Tensor;
      const bestAction = tf.argMax(qValues, 1);
      const actionIndex = (await bestAction.data())[0];
      
      return this.actionToPrice(actionIndex);
    } catch (error) {
      console.error('Error in Q-learning prediction:', error);
      return (this.minPrice + this.maxPrice) / 2;  
    }
  }

  async updateQ(oldState: number[], action: number, reward: number, newState: number[]) {
    this.experienceBuffer.push({ state: oldState, action, reward, nextState: newState });
    if (this.experienceBuffer.length > this.BUFFER_SIZE) {
      this.experienceBuffer.shift(); 
    }

    if (this.experienceBuffer.length < this.BATCH_SIZE) return;

    const batch = this.sampleExperiences();
    
    const states = tf.tensor2d(batch.map(exp => exp.state));
    const nextStates = tf.tensor2d(batch.map(exp => exp.nextState));
    
    // Get current Q-values for all states
    const currentQValues = this.qNetwork.predict(states) as tf.Tensor;
    
    // Get next Q-values from target network
    const nextQValues = this.targetNetwork.predict(nextStates) as tf.Tensor;
    const maxNextQ = tf.max(nextQValues, 1);
    
    const targetQValues = await currentQValues.array() as number[][];
    const nextQArray = await maxNextQ.array() as number[];
    
    batch.forEach((exp, i) => {
      targetQValues[i][exp.action] = exp.reward + this.GAMMA * nextQArray[i];
    });

    // Train Q-network
    await this.qNetwork.fit(states, tf.tensor2d(targetQValues as number[][]), {
      epochs: 1,
      batchSize: this.BATCH_SIZE
    });

    // Update target network periodically
    this.updateCounter++;
    if (this.updateCounter % this.TARGET_UPDATE_FREQ === 0) {
      this.targetNetwork.setWeights(this.qNetwork.getWeights());
    }

    // Cleanup
    states.dispose();
    nextStates.dispose();
    currentQValues.dispose();
    nextQValues.dispose();
    maxNextQ.dispose();
  }

  private sampleExperiences() {
    const batch = [];
    for (let i = 0; i < this.BATCH_SIZE; i++) {
      const index = Math.floor(Math.random() * this.experienceBuffer.length);
      batch.push(this.experienceBuffer[index]);
    }
    return batch;
  }

  // Method to handle a complete interaction
  async handleInteraction(productId: string, request?: Request) {
    const oldState = await this.getState(productId, request);
    const price = await this.predict(productId, request);
    
    await new Promise(resolve => setTimeout(resolve, 3600000)); // 1 hour
    
    const newState = await this.getState(productId, request);
    const reward = this.calculateReward(oldState, newState, price);
    
    const action = Math.round(((price - this.minPrice) / (this.maxPrice - this.minPrice)) * (this.NUM_ACTIONS - 1));
    
    await this.updateQ(oldState, action, reward, newState);
    return price;
  }
}
