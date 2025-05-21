// Route for dynamic pricing toggle and boundary management
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useState } from "react";
import { authenticate } from "../shopify.server";
import prisma from "../db.server";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    console.log('Starting admin pricing loader');
    
    // Authenticate admin session with Shopify
    const { admin, session } = await authenticate.admin(request);
    console.log('Authentication successful', { 
      shopDomain: session.shop, 
      accessToken: session.accessToken ? 'present' : 'missing' 
    });

    // Fetch products from Shopify with detailed information
    console.log('Attempting to fetch products via GraphQL');
    const response = await admin.graphql(`#graphql
      query {
        products(first: 250) {
          edges {
            node {
              id
              title
              variants(first: 1) {
                edges {
                  node {
                    price
                    id
                  }
                }
              }
            }
          }
        }
      }
    `);

    console.log('GraphQL query executed, parsing response');
    const data = await response.json();
    
    console.log('Raw product data:', JSON.stringify(data, null, 2));

    // Fetch existing price boundaries
    const boundaries = await prisma.productPriceBoundary.findMany();
    console.log(`Found ${boundaries.length} existing price boundaries`);


    const productsWithBoundaries = (data?.data?.products?.edges || []).map((edge: any) => {
      const product = edge.node;
      const currentPrice = parseFloat(product.variants.edges[0]?.node?.price ?? "0");
      const existingBoundary = boundaries.find(b => b.productId === product.id);
      
      return {
        id: product.id,
        title: product.title,
        currentPrice,
        minPrice: existingBoundary?.minPrice ?? (currentPrice * 0.8),
        maxPrice: existingBoundary?.maxPrice ?? (currentPrice * 1.2),
        dynamicPricingEnabled: existingBoundary?.dynamicPricingEnabled ?? false
      };
    });

    console.log(`Processed ${productsWithBoundaries.length} products`);

    return json({ 
      products: productsWithBoundaries,
      rawData: data  
    });
  } catch (error) {
    console.error('CRITICAL ERROR in admin pricing loader:', error);
    return json({ 
      products: [],
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : null
    }, { status: 500 });
  }
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const productId = formData.get('productId')?.toString();
    const minPrice = parseFloat(formData.get('minPrice')?.toString() || '0');
    const maxPrice = parseFloat(formData.get('maxPrice')?.toString() || '0');
    const dynamicPricingEnabled = formData.get('dynamicPricingEnabled') === 'true';

    if (!productId) {
      return json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Update or create price boundary
    await prisma.productPriceBoundary.upsert({
      where: { productId },
      update: { 
        minPrice, 
        maxPrice, 
        dynamicPricingEnabled 
      },
      create: { 
        productId, 
        minPrice, 
        maxPrice, 
        dynamicPricingEnabled 
      }
    });

    return json({ success: true });
  } catch (error) {
    console.error('Error updating price boundary:', error);
    return json({ 
      error: 'Failed to update price boundary'
    }, { status: 500 });
  }
};

export default function PricingManagement() {
  const { products, error, rawData } = useLoaderData<{ 
    products: any[], 
    error?: string, 
    rawData?: any 
  }>();

  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const fetcher = useFetcher();

  if (error) {
    return (
      <div>
        <h1>Error Fetching Products</h1>
        <pre>{error}</pre>
        {rawData && (
          <>
            <h2>Raw Data</h2>
            <pre>{JSON.stringify(rawData, null, 2)}</pre>
          </>
        )}
      </div>
    );
  }

  if (products.length === 0) {
    return <div>No products found. Check your Shopify connection and permissions.</div>;
  }

  const handleEdit = (product: any) => {
    setEditingProduct(product.id);
  };

  const handleSave = (product: any, minPrice: number, maxPrice: number, dynamicPricingEnabled: boolean) => {
    fetcher.submit({
      productId: product.id,
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString(),
      dynamicPricingEnabled: dynamicPricingEnabled.toString()
    }, { method: 'POST' });
    setEditingProduct(null);
  };

  return (
    <div>
      <h1>Dynamic Pricing Management</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Current Price</th>
            <th>Min Price</th>
            <th>Max Price</th>
            <th>Dynamic Pricing</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.currentPrice.toFixed(2)}</td>
              {editingProduct === product.id ? (
                <EditableRow 
                  product={product} 
                  onSave={(minPrice, maxPrice, dynamicPricingEnabled) => 
                    handleSave(product, minPrice, maxPrice, dynamicPricingEnabled)
                  } 
                  onCancel={() => setEditingProduct(null)} 
                />
              ) : (
                <>
                  <td>${product.minPrice.toFixed(2)}</td>
                  <td>${product.maxPrice.toFixed(2)}</td>
                  <td>{product.dynamicPricingEnabled ? 'Enabled' : 'Disabled'}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EditableRow({ 
  product, 
  onSave, 
  onCancel 
}: { 
  product: any, 
  onSave: (minPrice: number, maxPrice: number, dynamicPricingEnabled: boolean) => void,
  onCancel: () => void 
}) {
  const [minPrice, setMinPrice] = useState(product.minPrice);
  const [maxPrice, setMaxPrice] = useState(product.maxPrice);
  const [dynamicPricingEnabled, setDynamicPricingEnabled] = useState(product.dynamicPricingEnabled);

  return (
    <>
      <td>
        <input 
          type="number" 
          value={minPrice} 
          onChange={(e) => setMinPrice(parseFloat(e.target.value))} 
          step="0.01" 
        />
      </td>
      <td>
        <input 
          type="number" 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(parseFloat(e.target.value))} 
          step="0.01" 
        />
      </td>
      <td>
        <input 
          type="checkbox" 
          checked={dynamicPricingEnabled} 
          onChange={(e) => setDynamicPricingEnabled(e.target.checked)} 
        />
      </td>
      <td>
        <button onClick={() => onSave(minPrice, maxPrice, dynamicPricingEnabled)}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </td>
    </>
  );
}
