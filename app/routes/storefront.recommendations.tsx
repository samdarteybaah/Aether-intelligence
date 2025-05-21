// Storefront route for showing recommendations and bundles to customers
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { loader as storefrontLoader } from "../controllers/storefrontController";
import { useLoaderData } from "@remix-run/react";

export { storefrontLoader as loader };

export default function StorefrontRecommendations() {
  const { recommendations, bundles } = useLoaderData<typeof import("../controllers/storefrontController").loader>();
  return (
    <div>
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((r: any) => (
          <li key={r.productId}>{r.productId} (Impressions: {r.impressions}, Clicks: {r.clicks}, Conversions: {r.conversions})</li>
        ))}
      </ul>
      <h3>Bundle Offers</h3>
      <ul>
        {bundles.map((b: any) => (
          <li key={b.bundleId}>{b.productIds.join(", ")} - Bundle Price: ${b.suggestedPrice}</li>
        ))}
      </ul>
    </div>
  );
}
