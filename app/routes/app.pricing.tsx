import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, ActionFunction, SerializeFrom } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useLoaderData, useSubmit, useActionData, useNavigation } from "@remix-run/react";
import {
  Card,
  Page,
  Text,
  BlockStack,
  Grid,
  TextField,
  Button,
  InlineStack,
  Checkbox,
  Layout
} from "@shopify/polaris";
import { DynamicPricingModel } from "../controllers/dynamicPricingModel";
import { useState } from "react";
import prisma from "../db.server";

// Helper function to format money
const formatMoney = (amount: string, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(parseFloat(amount));
};

// Cache for product metrics to avoid repeated API calls
let metricsCache: { [key: string]: any } = {};


setInterval(() => {
  metricsCache = {};
}, 5 * 60 * 1000);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);


  const [productsResponse, boundaries] = await Promise.all([
    admin.graphql(
      `query {
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              variants(first: 1) {
                edges {
                  node {
                    id
                    price
                    compareAtPrice
                  }
                }
              }
              priceRangeV2 {
                minVariantPrice {
                  amount
                  currencyCode
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
      }`
    ),
    prisma.productPriceBoundary.findMany()
  ]);

  const responseJson = await productsResponse.json();
  const products = responseJson.data.products.edges.map((edge: any) => edge.node);

  // Create boundaries map
  interface PriceBoundary {
    productId: string;
    minPrice: number;
    maxPrice: number;
    dynamicPricingEnabled: boolean;
  }

  const boundariesMap = boundaries.reduce((acc: Record<string, PriceBoundary>, boundary: PriceBoundary) => {
    acc[boundary.productId] = boundary;
    return acc;
  }, {});


  const batchSize = 3;
  const productsWithPricing = [];
  
  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(async (product: any) => {

        const variantResponse = await admin.graphql(
          `query getVariant($id: ID!) {
            productVariant(id: $id) {
              id
              price
            }
          }`,
          {
            variables: {
              id: product.variants.edges[0]?.node.id
            }
          }
        );
        
        const variantData = await variantResponse.json();
        const currentPrice = parseFloat(variantData.data.productVariant.price || product.variants.edges[0]?.node.price || '0');
        
        const boundary = boundariesMap[product.id] || {
          minPrice: currentPrice * 0.8,
          maxPrice: currentPrice * 1.2,
          dynamicPricingEnabled: false
        };

        let suggestedPrice = currentPrice;
        if (boundary.dynamicPricingEnabled) {

          if (!metricsCache[product.id]) {
            const model = new DynamicPricingModel(boundary.minPrice, boundary.maxPrice);
            metricsCache[product.id] = await model.predict(product.id, request);
          }
          suggestedPrice = metricsCache[product.id];
        }

        return {
          ...product,
          pricing: {
            currentPrice,
            suggestedPrice,
            minPrice: boundary.minPrice,
            maxPrice: boundary.maxPrice,
            dynamicPricingEnabled: boundary.dynamicPricingEnabled
          }
        };
      })
    );
    productsWithPricing.push(...batchResults);
  }

  return json({ products: productsWithPricing });
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type');
    
    // Handle JSON payload for updating price boundaries
    if (contentType?.includes('application/json')) {
      const { admin } = await authenticate.admin(request);
      const body = await request.json();

      if (body.action === 'updateBoundaries') {
        const { productId, min, max, dynamicPricingEnabled } = body;

        if (!productId || min === undefined || max === undefined || dynamicPricingEnabled === undefined) {
          return json({ error: 'Missing required fields for boundary update' }, { status: 400 });
        }

        await prisma.productPriceBoundary.upsert({
          where: { productId },
          update: {
            minPrice: min,
            maxPrice: max,
            dynamicPricingEnabled
          },
          create: {
            productId,
            minPrice: min,
            maxPrice: max,
            dynamicPricingEnabled
          }
        });

        return json({ success: true, message: 'Boundaries updated successfully' });
      }
    }

    // Default handling of form POST (variant price update)
    const { admin, session } = await authenticate.admin(request);

    const formData = await request.formData();
    const variantId = formData.get('variantId') as string;
    const suggestedPrice = formData.get('suggestedPrice') as string;
    const currentPrice = formData.get('currentPrice') as string;

    if (!variantId || !suggestedPrice) {
      return json({ error: 'Missing required fields: variantId and suggestedPrice' }, { status: 400 });
    }

    const price = Number(suggestedPrice).toFixed(2);

    const variantIdNumber = variantId.split('/').pop();
    if (!variantIdNumber) {
      throw new Error('Invalid variant ID format');
    }

    console.log('Processing price update...', { variantIdNumber, price });

    try {
      // Update the variant price using REST API
      if (!session.accessToken) {
        throw new Error('Missing access token');
      }

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-Shopify-Access-Token', session.accessToken);

      const response = await fetch(
        `https://${session.shop}/admin/api/2025-04/variants/${variantIdNumber}.json`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify({
            variant: {
              id: variantIdNumber,
              price: price
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to update variant:', errorData);
        throw new Error(errorData.errors || 'Failed to update variant');
      }

      const result = await response.json();
      console.log('Update successful:', result);

      return json({
        success: true,
        variant: result.variant
      });

    } catch (error) {
      console.error('Error updating variant:', error);
      return json({ 
        error: error instanceof Error ? error.message : 'Failed to update variant'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in action:', error);
    return json({
      error: error instanceof Error ? error.message : 'An error occurred',
      details: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
};

type ActionData = SerializeFrom<typeof action>;

export default function AppPricing() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('none');

  const { products } = useLoaderData<typeof loader>();
  const [updating, setUpdating] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();

  const handlePriceUpdate = async (variantId: string, suggestedPrice: number, currentPrice: number) => {
    try {
      console.log('Starting price update...', {
        variantId,
        suggestedPrice,
        currentPrice,
        timestamp: new Date().toISOString()
      });

      setUpdating(variantId);
      setError(null);

      const formData = new FormData();
      formData.append('variantId', variantId);
      formData.append('suggestedPrice', suggestedPrice.toString());
      formData.append('currentPrice', currentPrice.toString());

      console.log('📤 Sending data to backend:', {
        formData: Object.fromEntries(formData),
        method: 'POST'
      });


      submit(formData, { method: 'POST' });
    } catch (err) {
      console.error('Price update error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setUpdating(null);
    }
  };

  const handlePricingUpdate = async (productId: string, values: any) => {
    try {
      const response = await fetch(window.location.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateBoundaries',
          productId,
          min: values.minPrice,
          max: values.maxPrice,
          dynamicPricingEnabled: values.dynamicPricingEnabled
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update pricing boundaries');
      }

      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update pricing boundaries');
    }
  };

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <Text as="h2" variant="headingMd">Dynamic Pricing Timeframe</Text>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                style={{
                  padding: '8px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '200px'
                }}
              >
                <option value="none">None</option>
                <option value="6hours">6 Hours</option>
                <option value="12hours">12 Hours</option>
                <option value="24hours">24 Hours</option>
                <option value="2days">2 Days</option>
                <option value="7days">7 Days</option>
              </select>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
      <Grid>
        {products.map((product: any) => {
          const imageUrl = product.images.edges[0]?.node.url;
          const currencyCode = product.priceRangeV2.minVariantPrice.currencyCode;

          return (
            <Grid.Cell key={product.id} columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                {imageUrl && (
                  <div style={{ padding: '1rem' }}>
                    <img 
                      src={imageUrl} 
                      alt={product.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
                <div style={{ padding: '1rem' }}>
                  <BlockStack gap="400">
                    <Text variant="headingMd" as="h2">{product.title}</Text>
                    <BlockStack gap="400">
                      <InlineStack gap="300" align="space-between">
                        <Text as="p">
                          Current Price: {formatMoney(product.pricing.currentPrice.toString(), currencyCode)}
                        </Text>
                        <Text as="p" tone="success">
                          Suggested Price: {formatMoney(product.pricing.suggestedPrice.toString(), currencyCode)}
                        </Text>
                      </InlineStack>
                      
                      <BlockStack gap="200">
                        <Checkbox
                          label="Enable Dynamic Pricing"
                          checked={product.pricing.dynamicPricingEnabled}
                          onChange={(checked) => {
                            handlePricingUpdate(product.id, {
                              minPrice: product.pricing.minPrice,
                              maxPrice: product.pricing.maxPrice,
                              dynamicPricingEnabled: checked
                            });
                          }}
                        />
                        {product.pricing.dynamicPricingEnabled && (
                          <Button
                            onClick={() => {
                              const variantId = product.variants.edges[0].node.id;
                              // Ensure the ID is in the correct format
                              const formattedVariantId = variantId.includes('gid://') ? variantId : `gid://shopify/ProductVariant/${variantId}`;
                              handlePriceUpdate(
                                formattedVariantId,
                                product.pricing.suggestedPrice,
                                product.pricing.currentPrice
                              );
                            }}
                            tone="success"
                            loading={updating === product.variants.edges[0].node.id}
                            disabled={updating !== null}
                          >
                            Accept Suggested Price
                          </Button>
                        )}
                      </BlockStack>
                      
                      {error && (
                        <InlineStack gap="300">
                          <Text as="p" tone="critical">{error}</Text>
                        </InlineStack>
                      )}
                      
                      <InlineStack gap="300">
                        <TextField
                          label="Min Price"
                          type="number"
                          value={product.pricing.minPrice.toString()}
                          onChange={(value) => {
                            handlePricingUpdate(product.id, {
                              minPrice: parseFloat(value),
                              maxPrice: product.pricing.maxPrice,
                              dynamicPricingEnabled: product.pricing.dynamicPricingEnabled
                            });
                          }}
                          autoComplete="off"
                        />
                        <TextField
                          label="Max Price"
                          type="number"
                          value={product.pricing.maxPrice.toString()}
                          onChange={(value) => {
                            handlePricingUpdate(product.id, {
                              minPrice: product.pricing.minPrice,
                              maxPrice: parseFloat(value),
                              dynamicPricingEnabled: product.pricing.dynamicPricingEnabled
                            });
                          }}
                          autoComplete="off"
                        />
                      </InlineStack>
                    </BlockStack>
                  </BlockStack>
                </div>
              </Card>
            </Grid.Cell>
          );
        })}
      </Grid>
    </Page>
  );
}