// Admin dashboard route for managing dynamic pricing, boundaries, audit logs, recommendations, and bundles
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { loader as adminDashboardLoader } from "../controllers/adminDashboard";
// import { getRecommendations, suggestBundles } from "../controllers/core";
import { useLoaderData, useFetcher } from "@remix-run/react";
import prisma from "../db.server";
import { authenticate } from "../shopify.server";
import React, { useState, useEffect, useRef } from "react";

export { adminDashboardLoader as loader };

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  if (formData.has("globalDynamicPricingEnabled")) {
    const globalDynamicPricingEnabled =
      formData.get("globalDynamicPricingEnabled") === "on";
    let settings = await prisma.globalSettings.findFirst();
    if (!settings) {
      settings = await prisma.globalSettings.create({
        data: { dynamicPricingEnabled: globalDynamicPricingEnabled },
      });
    } else {
      await prisma.globalSettings.update({
        where: { id: settings.id },
        data: { dynamicPricingEnabled: globalDynamicPricingEnabled },
      });
    }
    return json({ success: true });
  }

  if (formData.has("productId") && formData.has("newPrice")) {
    console.log(
      "Accepting suggested price:",
      Object.fromEntries(formData.entries()),
    );
    const productId = formData.get("productId") as string;
    const newPrice = parseFloat(formData.get("newPrice") as string);
    const min = parseFloat(formData.get("min") as string);
    const max = parseFloat(formData.get("max") as string);


    if (newPrice < min || newPrice > max) {
      console.error(`Price ${newPrice} is outside boundaries [${min}, ${max}]`);
      return json({
        success: false,
        error: `Price must be between ${min} and ${max}`,
      });
    }


    const { admin } = await authenticate.admin(request);


    const productResponse = await admin.graphql(`#graphql
      query {
        product(id: "${productId}") {
          id
          variants(first: 1) {
            nodes {
              id
            }
          }
        }
      }
    `);
    const productData = await productResponse.json();
    const productGlobalId = productData.data.product.id;
    const variantId = productData.data.product.variants.nodes[0].id;


    const updateResponse = await admin.graphql(
      `#graphql
      mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
        productVariantsBulkUpdate(productId: $productId, variants: $variants) {
          product {
            id
          }
          productVariants {
            id
            price
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
      {
        variables: {
          productId: productGlobalId,
          variants: [
            {
              id: variantId,
              price: newPrice,
            },
          ],
        },
      },
    );
    const updateData = await updateResponse.json();


    if (updateData.data.productVariantsBulkUpdate.userErrors.length > 0) {
      console.error(
        "Shopify update errors:",
        updateData.data.productVariantsBulkUpdate.userErrors,
      );
      return json({
        success: false,
        error: updateData.data.productVariantsBulkUpdate.userErrors[0].message,
      });
    }


    const existingBoundary = await prisma.productPriceBoundary.findUnique({
      where: { productId },
    });


    const auditLog = await prisma.priceAuditLog.create({
      data: {
        productId,
        oldPrice: existingBoundary?.minPrice || min,
        newPrice,
        type: "PRICE_UPDATE",
      } as any, // Use type assertion to bypass type checking
    });
    console.log("Created audit log:", auditLog);

    return json({ success: true, updatedPrice: newPrice });
  }
  // Handle manual price boundary update
  if (formData.has("updatePriceBoundary")) {
    const productId = formData.get("productId") as string;
    const minPrice = parseFloat(formData.get("minPrice") as string);
    const maxPrice = parseFloat(formData.get("maxPrice") as string);

    // Validate price boundaries
    if (minPrice > maxPrice) {
      return json({
        success: false,
        error: "Minimum price cannot be greater than maximum price",
      });
    }

    // Update the price boundary
    await prisma.productPriceBoundary.upsert({
      where: { productId },
      update: { minPrice, maxPrice },
      create: { productId, minPrice, maxPrice, dynamicPricingEnabled: true },
    });

    // Log the price boundary update
    await prisma.priceAuditLog.create({
      data: {
        productId,
        oldPrice: minPrice,
        newPrice: maxPrice,
        type: "BOUNDARY_UPDATE",
      } as any, // Use type assertion to bypass type checking
    });

    return json({ success: true });
  }
  return json({});
};

export default function AdminDashboard() {
  const {
    products,
    auditLogs,
    bundles,
    metrics,
    globalDynamicPricingEnabled,
    customers,
  } = useLoaderData<any>();
  const fetcher = useFetcher<any>();
  const notificationRef = useRef<HTMLDivElement>(null);
  const [selectedCustomer, setSelectedCustomer] = React.useState<string>("");
  const [recommendations, setRecommendations] = React.useState<any[]>([]);
  const [loadingRecs, setLoadingRecs] = React.useState(false);

  useEffect(() => {
    if (fetcher.data) {
      if (notificationRef.current) {
        notificationRef.current.style.opacity = "1";
        notificationRef.current.textContent = fetcher.data.success
          ? fetcher.data.updatedPrice
            ? `Price updated to $${fetcher.data.updatedPrice}`
            : "Update successful!"
          : fetcher.data.error || "Update failed";

        setTimeout(() => {
          if (notificationRef.current) {
            notificationRef.current.style.opacity = "0";
          }
        }, 2000);
      }
    }
  }, [fetcher.data]);


  const placeholderProducts = Array(5).fill({
    productId: "Loading...",
    currentPrice: "-",
    minPrice: "-",
    maxPrice: "-",
    dynamicPricingEnabled: false,
    suggestedPrice: null,
  });

  const displayedProducts = products || placeholderProducts;


  const fetchRecommendations = async (customerId: string) => {
    setLoadingRecs(true);
    try {
      const res = await fetch(
        `/api/recommendations?userId=${encodeURIComponent(customerId)}&topN=5`,
      );
      const data = await res.json();
      setRecommendations(data.recommendations || []);
    } catch (e) {
      setRecommendations([]);
    }
    setLoadingRecs(false);
  };

  React.useEffect(() => {
    if (selectedCustomer) {
      fetchRecommendations(selectedCustomer);
    } else {
      setRecommendations([]);
    }
  }, [selectedCustomer]);

  return (
    <div>
      <h1>Aether Intelligence Admin Dashboard</h1>
      <section>
        <h2>Dynamic Pricing</h2>
        <div
          ref={notificationRef}
          style={{
            opacity: 0,
            transition: "opacity 0.5s",
            color: "green",
            marginBottom: 8,
          }}
        >
          Global dynamic pricing updated successfully!
        </div>
        <fetcher.Form method="post">
          <label>
            <input
              type="checkbox"
              name="globalDynamicPricingEnabled"
              defaultChecked={globalDynamicPricingEnabled}
            />
            Enable Dynamic Pricing (Global)
          </label>
          <button type="submit">Update</button>
        </fetcher.Form>
        {/*products and their price boundaries */}
        <ul>
          {displayedProducts.map((p: any) => (
            <li
              key={p.productId}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #eee",
                paddingBottom: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div>
                    <strong>Product:</strong> {p.productId}
                  </div>
                  <div>
                    Current Price: <strong>${p.currentPrice}</strong>
                  </div>
                  <div>
                    Min Price: ${p.minPrice} | Max Price: ${p.maxPrice}
                  </div>
                  <div>
                    Dynamic Pricing:{" "}
                    {p.dynamicPricingEnabled ? "Enabled" : "Disabled"}
                  </div>
                </div>
                <div>
                  {p.suggestedPrice !== null && (
                    <div style={{ marginBottom: 8 }}>
                      Suggested Price: <strong>${p.suggestedPrice}</strong>
                      <fetcher.Form
                        method="post"
                        style={{ display: "inline", marginLeft: 8 }}
                      >
                        <input
                          type="hidden"
                          name="productId"
                          value={p.productId}
                        />
                        <input type="hidden" name="min" value={p.minPrice} />
                        <input type="hidden" name="max" value={p.maxPrice} />
                        <input
                          type="hidden"
                          name="newPrice"
                          value={p.suggestedPrice}
                        />
                        <button type="submit">Accept Suggested Price</button>
                      </fetcher.Form>
                    </div>
                  )}
                  <fetcher.Form
                    method="post"
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    <input type="hidden" name="productId" value={p.productId} />
                    <input
                      type="hidden"
                      name="updatePriceBoundary"
                      value="true"
                    />
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <label
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Min Price
                        <input
                          type="number"
                          name="minPrice"
                          defaultValue={p.minPrice}
                          step="0.01"
                          min="0"
                          style={{ width: 100 }}
                        />
                      </label>
                      <label
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Max Price
                        <input
                          type="number"
                          name="maxPrice"
                          defaultValue={p.maxPrice}
                          step="0.01"
                          min="0"
                          style={{ width: 100 }}
                        />
                      </label>
                    </div>
                    <button type="submit" style={{ width: "fit-content" }}>
                      Update Price Boundaries
                    </button>
                  </fetcher.Form>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Price Adjustment Audit Log</h2>
        <ul>
          {auditLogs.map((log: any, idx: number) => (
            <li key={idx}>
              {log.timestamp}: {log.productId} changed from ${log.oldPrice} to $
              {log.newPrice}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Bundle Suggestions</h2>
        <ul>
          {bundles.map((b: any) => (
            <li key={b.bundleId}>
              {b.productIds.join(", ")} - Suggested Price: ${b.suggestedPrice} (
              {b.status})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Recommendation Engine Metrics</h2>
        <ul>
          {metrics.map((m: any) => (
            <li key={m.productId}>
              {m.productId}: {m.impressions} impressions, {m.clicks} clicks,{" "}
              {m.conversions} conversions
            </li>
          ))}
        </ul>
      </section>
      <section style={{ marginTop: 40 }}>
        <h2>Top Product Bundles (Frequently Bought Together)</h2>
        {bundles.length === 0 && <div>No bundle data available.</div>}
        {bundles.length > 0 && (
          <ul>
            {bundles.map((bundle: any, idx: number) => (
              <li key={idx} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {bundle.products.map((prod: any) => (
                    <div
                      key={prod.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: 16,
                      }}
                    >
                      {prod.image && (
                        <img
                          src={prod.image}
                          alt={prod.title}
                          style={{
                            width: 48,
                            height: 48,
                            objectFit: "cover",
                            borderRadius: 4,
                            marginBottom: 4,
                          }}
                        />
                      )}
                      <div style={{ fontWeight: 500 }}>{prod.title}</div>
                    </div>
                  ))}
                  <span style={{ fontSize: 13, color: "#888", marginLeft: 12 }}>
                    Bought together {bundle.count} times
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      color: "#1a8917",
                      marginLeft: 24,
                      fontWeight: 600,
                    }}
                  >
                    Suggested Bundle Price: ${bundle.suggestedPrice}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section style={{ marginTop: 40 }}>
        <h2>Product Recommendations</h2>
        <label>
          Select Customer:{" "}
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option value="">-- Select --</option>
            {customers.map((c: any) => (
              <option key={c.id} value={c.id}>
                {c.email || c.id}
              </option>
            ))}
          </select>
        </label>
        {loadingRecs && <div>Loading recommendations...</div>}
        {!loadingRecs && recommendations.length > 0 && (
          <ul>
            {recommendations.map((prod: any, idx) => (
              <li
                key={prod.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                {prod.image && (
                  <img
                    src={prod.image}
                    alt={prod.title}
                    style={{
                      width: 48,
                      height: 48,
                      objectFit: "cover",
                      borderRadius: 4,
                      marginRight: 12,
                    }}
                  />
                )}
                <div>
                  <div>
                    Recommended Product {idx + 1}: <strong>{prod.title}</strong>
                  </div>
                  <div style={{ fontSize: 12, color: "#888" }}>{prod.id}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!loadingRecs && selectedCustomer && recommendations.length === 0 && (
          <div>No recommendations available for this customer.</div>
        )}
      </section>
    </div>
  );
}
