// Simple collaborative filtering recommender using matrix factorization (stub)
import * as tf from '@tensorflow/tfjs';

export class ProductRecommender {
  model: tf.LayersModel;
  numUsers: number;
  numProducts: number;
  embeddingDim: number;

  constructor(numUsers: number, numProducts: number, embeddingDim = 16) {
    this.numUsers = numUsers;
    this.numProducts = numProducts;
    this.embeddingDim = embeddingDim;
    this.model = this.buildModel();
  }

  buildModel() {
    // Embedding layers for users and products
    const userInput = tf.input({ shape: [1], name: 'user' });
    const productInput = tf.input({ shape: [1], name: 'product' });
    const userEmbedding = tf.layers.embedding({ inputDim: this.numUsers, outputDim: this.embeddingDim }).apply(userInput) as tf.SymbolicTensor;
    const productEmbedding = tf.layers.embedding({ inputDim: this.numProducts, outputDim: this.embeddingDim }).apply(productInput) as tf.SymbolicTensor;
    const dotProduct = tf.layers.dot({ axes: -1 }).apply([userEmbedding, productEmbedding]) as tf.SymbolicTensor;
    const flatten = tf.layers.flatten().apply(dotProduct) as tf.SymbolicTensor;
    const output = tf.layers.dense({ units: 1, activation: 'sigmoid' }).apply(flatten) as tf.SymbolicTensor;
    const model = tf.model({ inputs: [userInput, productInput], outputs: output });
    model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });
    return model;
  }

  splitData(userIds: number[], productIds: number[], interactions: number[], testSize = 0.2) {
    const numSamples = userIds.length;
    const numTestSamples = Math.round(numSamples * testSize);
    const indices = Array.from({ length: numSamples }, (_, i) => i);
    
    // Shuffle indices
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Split data
    const trainIndices = indices.slice(numTestSamples);
    const testIndices = indices.slice(0, numTestSamples);
    
    return {
      trainData: {
        userIds: trainIndices.map(i => userIds[i]),
        productIds: trainIndices.map(i => productIds[i]),
        interactions: trainIndices.map(i => interactions[i])
      },
      testData: {
        userIds: testIndices.map(i => userIds[i]),
        productIds: testIndices.map(i => productIds[i]),
        interactions: testIndices.map(i => interactions[i])
      }
    };
  }

  async train(userIds: number[], productIds: number[], interactions: number[], testSize = 0.2) {
    const { trainData, testData } = this.splitData(userIds, productIds, interactions, testSize);
    
    const userTensor = tf.tensor2d(trainData.userIds, [trainData.userIds.length, 1]);
    const productTensor = tf.tensor2d(trainData.productIds, [trainData.productIds.length, 1]);
    const interactionTensor = tf.tensor2d(trainData.interactions, [trainData.interactions.length, 1]);
    
    const trainHistory = await this.model.fit([userTensor, productTensor], interactionTensor, {
      epochs: 10,
      batchSize: 32,
      shuffle: true,
      validationData: [
        [
          tf.tensor2d(testData.userIds, [testData.userIds.length, 1]),
          tf.tensor2d(testData.productIds, [testData.productIds.length, 1])
        ],
        tf.tensor2d(testData.interactions, [testData.interactions.length, 1])
      ]
    });
    
    return trainHistory;
  }

  async recommend(userId: number, topN = 5) {

    const userTensor = tf.tensor2d(Array(this.numProducts).fill(userId), [this.numProducts, 1]);
    const productTensor = tf.tensor2d([...Array(this.numProducts).keys()], [this.numProducts, 1]);
    const predictions = this.model.predict([userTensor, productTensor]) as tf.Tensor;
    const scores = Array.from(await predictions.data());

    return scores
      .map((score, idx) => ({ score, idx }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topN)
      .map(item => item.idx);
  }
}
