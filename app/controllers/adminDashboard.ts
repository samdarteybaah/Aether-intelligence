// Loader for admin dashboard: loads products, price boundaries, recommendations, bundles
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as models from "../models/core";
import shopify from "../shopify.server";
import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { DynamicPricingModel } from "./dynamicPricingModel";
import { getProductMetrics } from "./productMetrics";
import { getTopBundles } from "./bundleRecommender";

export const loader: LoaderFunction = async ({ request }) => {
  // Authenticate admin session with Shopify
  const { admin } = await authenticate.admin(request);
  // Fetch products from Shopify
  const response = await admin.graphql(`#graphql
    {
      products(first: 20) {
        nodes {
          id
          title
          variants(first: 1) {
            nodes {
              id
              price
            }
          }
        }
      }
    }
  `);
  const data = await response.json();
  // Fetch price boundaries from the database
  const boundaries = await prisma.productPriceBoundary.findMany();
  // Merge Shopify product info with stored boundaries and suggest price
  const products: any[] = await Promise.all((data?.data?.products?.nodes || []).map(async (p: any) => {
    const boundary = boundaries.find((b: any) => b.productId === p.id);
    const minPrice = boundary?.minPrice ?? parseFloat(p.variants.nodes[0]?.price ?? "0");
    const maxPrice = boundary?.maxPrice ?? parseFloat(p.variants.nodes[0]?.price ?? "0");
    const dynamicPricingEnabled = boundary?.dynamicPricingEnabled ?? false;
    // --- Get real/simulated clickstream metrics for this product ---
    const metricsObj = await getProductMetrics(p.id);
    const metricsArr = [
      metricsObj.inventory,
      metricsObj.cartAdds,
      metricsObj.views,
      metricsObj.timeSinceListing,
      metricsObj.recentSalesVolume,
      metricsObj.cartAbandonmentRate,
    ];
    // --- RL Model for price suggestion ---
    const model = new DynamicPricingModel(minPrice, maxPrice);
    let suggestedPrice = null;
    try {
      suggestedPrice = await model.predict(metricsArr.join(','));
    } catch (e) {
      suggestedPrice = null;
    }
    return {
      productId: p.id,
      minPrice,
      maxPrice,
      dynamicPricingEnabled,
      currentPrice: parseFloat(p.variants.nodes[0]?.price ?? "0"),
      suggestedPrice,
    };
  }));
  // Fetch audit logs
  const auditLogs = await prisma.priceAuditLog.findMany({ 
  orderBy: { timestamp: "desc" }
}).then(logs => logs.map(log => ({
  ...log,
  type: (log as any).type ?? 'PRICE_UPDATE'
})));
  // Fetch global dynamic pricing toggle
  let globalSettings = await prisma.globalSettings.findFirst();
  if (!globalSettings) {
    globalSettings = await prisma.globalSettings.create({ data: { dynamicPricingEnabled: false } });
  }
  const globalDynamicPricingEnabled = globalSettings.dynamicPricingEnabled;
  // --- Fetch top bundles ---
  let topBundles: any[] = [];
  try {
    topBundles = await getTopBundles(request, 5);
  } catch (e) {
    topBundles = [];
  }
  // Fetch customers for recommender UI
  let customers: any[] = [];
  try {
    const { admin } = await shopify.authenticate.admin(request);
    const resp = await admin.graphql(`#graphql { customers(first: 50) { nodes { id email } } }`);
    const data = await resp.json();
    customers = (data?.data?.customers?.nodes || []).map((c: any) => ({ id: c.id, email: c.email }));
  } catch (e) {
    customers = [];
  }
  return json({ products, auditLogs, bundles: topBundles, metrics: [], globalDynamicPricingEnabled, customers });
};
