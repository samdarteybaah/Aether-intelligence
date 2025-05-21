// import { loader as metricsLoader } from './metricsController';
// import * as models from '../models/core';

// // Use jest.mock for ES module compatibility
// jest.mock('../shopify.server', () => ({
//   __esModule: true,
//   default: {
//     authenticate: {
//       admin: async () => ({
//         graphql: async () => ({
//           json: async () => ({
//             data: {
//               products: {
//                 nodes: [
//                   { id: 'p1', totalInventory: 10, totalVariants: 1, publishedAt: '', title: '', totalSales: 0, variants: { nodes: [{ id: 'v1', inventoryQuantity: 10 }] } },
//                   { id: 'p2', totalInventory: 20, totalVariants: 1, publishedAt: '', title: '', totalSales: 0, variants: { nodes: [{ id: 'v2', inventoryQuantity: 20 }] } },
//                 ],
//               },
//             },
//           }),
//         }),
//       }),
//     },
//   },
// }));

// describe('metricsController.loader', () => {
//   it('should return an array of RecommendationMetric objects', async () => {
//     // Mock request and dependencies
//     const mockRequest = {} as any;
//     const response = await metricsLoader({ request: mockRequest });
//     const data = await response.json();
//     expect(Array.isArray(data.metrics)).toBe(true);
//     if (data.metrics.length > 0) {
//       const metric: models.RecommendationMetric = data.metrics[0];
//       expect(typeof metric.productId).toBe('string');
//       expect(typeof metric.impressions).toBe('number');
//       expect(typeof metric.clicks).toBe('number');
//       expect(typeof metric.conversions).toBe('number');
//     }
//   });
// });
