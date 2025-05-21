// Route for recommendation engine metrics
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { loader as metricsLoader } from "../controllers/metricsController";
import { useLoaderData } from "@remix-run/react";

export { metricsLoader as loader };

export default function RecommendationMetrics() {
  const { metrics } = useLoaderData<typeof import("../controllers/metricsController").loader>();
  return (
    <section>
      <h2>Recommendation Engine Metrics</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>Conversions</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((m: any) => (
            <tr key={m.productId}>
              <td>{m.productId}</td>
              <td>{m.impressions}</td>
              <td>{m.clicks}</td>
              <td>{m.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
