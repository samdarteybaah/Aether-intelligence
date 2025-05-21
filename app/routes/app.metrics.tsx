import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import {
  Page,
  Layout,
  Card,
  DataTable,
  Text,
  BlockStack
} from "@shopify/polaris";

type ProductMetrics = {
  id: string;
  title: string;
  currentPrice: number;
  suggestedPrice: number;
  priceChange: number;
  lastUpdated: string;
  inventory: number;
  potentialRevenue: number;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  // Fetch products with GraphQL
  const response = await admin.graphql(`
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            variants(first: 1) {
              edges {
                node {
                  id
                  price
                  inventoryQuantity
                }
              }
            }
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  `);

  const data = await response.json();
  

  const productMetrics: ProductMetrics[] = data.data.products.edges.map((edge: any) => {
    const product = edge.node;
    const variant = product.variants.edges[0]?.node;
    const currentPrice = parseFloat(variant?.price || '0');
    

    const suggestedPrice = Math.round(currentPrice * 0.95 * 100) / 100;
    
    return {
      id: product.id,
      title: product.title,
      currentPrice: currentPrice,
      suggestedPrice: suggestedPrice,
      priceChange: Math.round((suggestedPrice - currentPrice) * 100) / 100,
      lastUpdated: new Date(product.updatedAt).toLocaleDateString(),
      inventory: variant?.inventoryQuantity || 0,
      potentialRevenue: currentPrice * (variant?.inventoryQuantity || 0)
    };
  });

  return json({ productMetrics });
};

export default function AppMetrics() {
  const { productMetrics } = useLoaderData<typeof loader>();

  const rows = productMetrics.map((metric) => [
    metric.title,
    `$${metric.currentPrice.toFixed(2)}`,
    `$${metric.suggestedPrice.toFixed(2)}`,
    `$${metric.priceChange.toFixed(2)}`,
    metric.lastUpdated,
    metric.inventory,
    `$${metric.potentialRevenue.toFixed(2)}`
  ]);

  return (
    <Page title="Product Metrics">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Product Performance Metrics
              </Text>
              <DataTable
                columnContentTypes={[
                  'text',
                  'numeric',
                  'numeric',
                  'numeric',
                  'text',
                  'numeric',
                  'numeric'
                ]}
                headings={[
                  'Product',
                  'Current Price',
                  'Suggested Price',
                  'Price Change',
                  'Last Updated',
                  'Current Inventory',
                  'Potential Revenue'
                ]}
                rows={rows}
                totals={[
                  '',
                  '',
                  '',
                  '',
                  '',
                  productMetrics.reduce((sum, metric) => sum + metric.inventory, 0),
                  `$${productMetrics.reduce((sum, metric) => sum + metric.potentialRevenue, 0).toFixed(2)}`
                ]}
              />
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
