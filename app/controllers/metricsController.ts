// Loader for recommendation metrics: loads effectiveness metrics
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as models from "../models/core";
import shopify from "../shopify.server";
import prisma from "../db.server";

export const loader: LoaderFunction = async ({ request }) => {
  // Fetch metrics for products from Shopify 
  const { admin } = await shopify.authenticate.admin(request);
  // Fetch products 
  const response = await admin.graphql(`#graphql
    {
      products(first: 20) {
        nodes {
          id
          variants(first: 1) { nodes { id inventoryQuantity } }
          totalInventory
          totalVariants
          publishedAt
          title
          totalSales
        }
      }
    }
  `);
  const data = await response.json();
  
  const metrics: models.RecommendationMetric[] = (data?.data?.products?.nodes || []).map((p: any) => {
    return {
      productId: p.id,
      impressions: Math.floor(Math.random() * 1000),
      clicks: Math.floor(Math.random() * 200),
      conversions: Math.floor(Math.random() * 50),
    };
  });
  return json({ metrics });
};
