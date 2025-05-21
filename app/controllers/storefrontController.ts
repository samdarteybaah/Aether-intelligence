// Loader for storefront recommendations: loads recommendations and bundles for customers
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as models from "../models/core";
import shopify from "../shopify.server";
import { getRecommendationsForUser } from "./recommendationController";
import { getTopBundles } from "./bundleRecommender";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    // Authenticate the request
    const { admin } = await shopify.authenticate.admin(request);

    // Fetch products from Shopify
    const productsResponse = await admin.graphql(`#graphql
      query {
        products(first: 50) {
          nodes {
            id
            title
            description
            priceRangeV2 {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
    `);

    const productsData = await productsResponse.json();
    const products = productsData.data.products.nodes.map((product: any) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.priceRangeV2.minVariantPrice.amount,
      image: product.featuredImage?.url
    }));

    const recommendations = await getRecommendationsForUser('default-user', 5, request);
    const bundles = await getTopBundles(request);

    return json({ 
      products, 
      recommendations, 
      bundles 
    });
  } catch (error) {
    console.error('Error fetching storefront data:', error);
    return json({ 
      products: [], 
      recommendations: [], 
      bundles: [],
      error: 'Failed to fetch products'
    }, { status: 500 });
  }
};
