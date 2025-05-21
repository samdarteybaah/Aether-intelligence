import { getUserProductMappings, getInteractionData } from "./recommenderData";

/**
 * Recommend product bundles by finding frequent itemsets from purchase history.
 * Returns bundles of size 2 or 3 with highest co-purchase frequency.
 * Now also suggests a bundle price (sum of product prices minus 10%).
 */
export async function getTopBundles(request?: Request, topN = 5) {
  // Fetch real products and orders
  const { products } = await getUserProductMappings(request);
  // Fetch recent orders from Shopify
  const { admin } = await require("../shopify.server").default.authenticate.admin(request || {} as Request);
  const ordersResp = await admin.graphql(`#graphql
    { orders(first: 100) { edges { node { lineItems(first: 10) { edges { node { product { id } price } } } } } } }
  `);
  const ordersData = await ordersResp.json();
  // Build list of orders as arrays of product indices and their prices
  const orders: { indices: number[], prices: number[] }[] = [];
  for (const edge of (ordersData?.data?.orders?.edges || []) as any[]) {
    const lineItems = edge.node.lineItems.edges
      .map((li: any) => ({ id: li.node.product?.id, price: parseFloat(li.node.price ?? "0") }))
      .filter((li: any) => li.id && !isNaN(li.price));
    const indices = lineItems.map((li: any) => products.find((p: any) => p.id === li.id)?.idx).filter((idx: number | undefined) => idx !== undefined);
    const prices = lineItems.map((li: any) => li.price);
    if (indices.length > 1) orders.push({ indices: indices as number[], prices });
  }
  // Count co-occurrence of product pairs and triples
  const bundleCounts: Record<string, { count: number, price: number }> = {};
  for (const order of orders) {
    // Pairs
    for (let i = 0; i < order.indices.length; i++) {
      for (let j = i + 1; j < order.indices.length; j++) {
        const key = [order.indices[i], order.indices[j]].sort().join(",");
        const price = order.prices[i] + order.prices[j];
        if (!bundleCounts[key]) bundleCounts[key] = { count: 0, price: 0 };
        bundleCounts[key].count += 1;
        bundleCounts[key].price += price;
      }
    }
    // Triples
    for (let i = 0; i < order.indices.length; i++) {
      for (let j = i + 1; j < order.indices.length; j++) {
        for (let k = j + 1; k < order.indices.length; k++) {
          const key = [order.indices[i], order.indices[j], order.indices[k]].sort().join(",");
          const price = order.prices[i] + order.prices[j] + order.prices[k];
          if (!bundleCounts[key]) bundleCounts[key] = { count: 0, price: 0 };
          bundleCounts[key].count += 1;
          bundleCounts[key].price += price;
        }
      }
    }
  }
  // Sort bundles by frequency
  const sortedBundles = Object.entries(bundleCounts)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, topN)
    .map(([key, val]) => {
      const indices = key.split(",").map(Number);
      const bundleProducts = indices.map(idx => products[idx]);
      const bundlePrice = Math.round((val.price * 0.9) * 100) / 100; // 10% discount
      return { products: bundleProducts, count: val.count, suggestedPrice: bundlePrice };
    });
  return sortedBundles;
}
