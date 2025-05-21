import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Grid,
  Box,
  Divider,
  Thumbnail,
  InlineStack,
} from "@shopify/polaris";

type Product = {
  title: string;
  price: number;
  image: string;
};

type ProductPair = {
  product1: Product;
  product2: Product;
  totalPrice: number;
  discountedPrice: number;
  savings: number;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  // Fetch products with GraphQL
  const response = await admin.graphql(`
    query {
      products(first: 12) {
        edges {
          node {
            id
            title
            variants(first: 1) {
              edges {
                node {
                  price
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = await response.json();
  const products = data.data.products.edges.map((edge: any) => ({
    title: edge.node.title,
    price: parseFloat(edge.node.variants.edges[0]?.node.price || '0'),
    image: edge.node.images.edges[0]?.node.url || 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_medium.png'
  }));

  // Generate 6 random pairs of products
  const productPairs: ProductPair[] = [];
  const usedIndices = new Set<number>();

  while (productPairs.length < 6 && usedIndices.size < products.length) {
    // Get two random products that haven't been used yet
    let index1, index2;
    do {
      index1 = Math.floor(Math.random() * products.length);
    } while (usedIndices.has(index1));
    
    do {
      index2 = Math.floor(Math.random() * products.length);
    } while (index2 === index1 || usedIndices.has(index2));

    const product1 = products[index1];
    const product2 = products[index2];
    const totalPrice = product1.price + product2.price;
    const discountedPrice = totalPrice * 0.9; // 10% discount

    productPairs.push({
      product1,
      product2,
      totalPrice,
      discountedPrice,
      savings: totalPrice - discountedPrice
    });

    usedIndices.add(index1);
    usedIndices.add(index2);
  }

  return json({ productPairs });
};

export default function BundleSuggestion() {
  const { productPairs } = useLoaderData<typeof loader>();

  return (
    <Page title="Bundle Suggestions">
      <Layout>
        <Layout.Section>
          <BlockStack gap="800">
            <Text as="h2" variant="headingXl" alignment="center">
              Suggested Product Bundles
            </Text>
            <Grid>
              {productPairs.map((pair, index) => (
                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 6, md: 6, lg: 4, xl: 4 }}>
                  <Card>
                    <BlockStack gap="400">
                      <InlineStack gap="400" align="center">
                        <Box width="50%">
                          <BlockStack gap="200" align="center">
                            <Thumbnail
                              source={pair.product1.image}
                              alt={pair.product1.title}
                              size="large"
                            />
                            <Text as="h3" variant="headingSm">{pair.product1.title}</Text>
                            <Text as="p" variant="bodySm">${pair.product1.price.toFixed(2)}</Text>
                          </BlockStack>
                        </Box>
                        <Text as="p" variant="headingLg">+</Text>
                        <Box width="50%">
                          <BlockStack gap="200" align="center">
                            <Thumbnail
                              source={pair.product2.image}
                              alt={pair.product2.title}
                              size="large"
                            />
                            <Text as="h3" variant="headingSm">{pair.product2.title}</Text>
                            <Text as="p" variant="bodySm">${pair.product2.price.toFixed(2)}</Text>
                          </BlockStack>
                        </Box>
                      </InlineStack>
                      <Divider />
                      <BlockStack gap="200" align="center">
                        <Text as="p" variant="bodyMd" tone="subdued">
                          Original Price: ${pair.totalPrice.toFixed(2)}
                        </Text>
                        <Text as="h4" variant="headingMd" tone="success">
                          Bundle Price: ${pair.discountedPrice.toFixed(2)}
                        </Text>
                        <Text as="p" variant="bodyMd" tone="success">
                          Save ${pair.savings.toFixed(2)}!
                        </Text>
                      </BlockStack>
                    </BlockStack>
                  </Card>
                </Grid.Cell>
              ))}
            </Grid>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
