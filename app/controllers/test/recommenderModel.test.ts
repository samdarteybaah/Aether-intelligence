// import { ProductRecommender } from './recommenderModel';

// describe('ProductRecommender', () => {
//   it('should create a model and recommend product indices', async () => {
//     const numUsers = 3;
//     const numProducts = 5;
//     const recommender = new ProductRecommender(numUsers, numProducts);
//     // Fake training data
//     const userIds = [0, 1, 2, 0, 1, 2];
//     const productIds = [0, 1, 2, 3, 4, 0];
//     const interactions = [1, 0, 1, 0, 1, 0];
//     await recommender.train(userIds, productIds, interactions);
//     const recommendations = await recommender.recommend(1, 2);
//     expect(Array.isArray(recommendations)).toBe(true);
//     expect(recommendations.length).toBe(2);
//     recommendations.forEach(idx => {
//       expect(typeof idx).toBe('number');
//       expect(idx).toBeGreaterThanOrEqual(0);
//       expect(idx).toBeLessThan(numProducts);
//     });
//   });
// });
