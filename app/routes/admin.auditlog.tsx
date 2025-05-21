// // Route for price adjustment audit logs
// import type { LoaderFunction } from "@remix-run/node";
// import { json } from "@remix-run/node";
// import { loader as auditLogLoader } from "../controllers/auditLogController";
// import { useLoaderData } from "@remix-run/react";

// export { auditLogLoader as loader };

// export default function AuditLog() {
//   const { auditLogs } = useLoaderData<typeof import("../controllers/auditLogController").loader>();
//   return (
//     <section>
//       <h2>Price Adjustment Audit Log</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Timestamp</th>
//             <th>Product ID</th>
//             <th>Old Price</th>
//             <th>New Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {auditLogs.map((log: any, idx: number) => (
//             <tr key={idx}>
//               <td>{log.timestamp}</td>
//               <td>{log.productId}</td>
//               <td>${log.oldPrice}</td>
//               <td>${log.newPrice}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }
