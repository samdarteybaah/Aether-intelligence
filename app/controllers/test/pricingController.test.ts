// import { loader as pricingLoader } from './pricingController';
// import * as models from '../models/core';

// describe('pricingController.loader', () => {
//   it('should run without throwing and return a response', async () => {
//     const mockRequest = {} as any;
//     let response;
//     try {
//       response = await pricingLoader({ request: mockRequest, params: {} });
//     } catch (e) {
//       response = null;
//     }
//     expect(response).not.toBeNull();
//     if (response && typeof (response as Response).json === 'function') {
//       const data = await (response as Response).json();
//       expect(data).toBeDefined();
//     }
//   });
// });
