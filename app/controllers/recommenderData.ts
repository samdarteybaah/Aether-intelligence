import prisma from "../db.server";
import shopify from "../shopify.server";

export async function getUserProductMappings(request?: Request) {
  // Fetch all customers and products from Shopify
  // Accept a real Request object for authentication context
  const { admin } = await shopify.authenticate.admin(request || {} as Request);
  // Fetch customers
  const customersResp = await admin.graphql(`#graphql
    { customers(first: 50) { nodes { id email } } }
  `);
  const customersData = await customersResp.json();
  const users = (customersData?.data?.customers?.nodes || []).map((c: any, idx: number) => ({ id: c.id, email: c.email, idx }));
  // Fetch products
  const productsResp = await admin.graphql(`#graphql
    { products(first: 50) { nodes { id title featuredImage { url } } } }
  `);
  const productsData = await productsResp.json();
  const products = (productsData?.data?.products?.nodes || []).map((p: any, idx: number) => ({ id: p.id, title: p.title, image: p.featuredImage?.url || null, idx }));
  return { users, products };
}

export async function getInteractionData(request?: Request) {
  const { users, products } = await getUserProductMappings(request);
  let interactions: { userIdx: number, productIdx: number, interaction: number }[] = [];
  const { admin } = await shopify.authenticate.admin(request || {} as Request);
  const ordersResp = await admin.graphql(`#graphql
    { orders(first: 100) { edges { node { customer { id } lineItems(first: 10) { edges { node { product { id } } } } } } } }
  `);
  const ordersData = await ordersResp.json();

  for (const edge of (ordersData?.data?.orders?.edges || []) as any[]) {
    const order = edge.node;
    const userIdx = users.find((u: any) => u.id === order.customer?.id)?.idx;
    if (userIdx === undefined) continue;
    for (const liEdge of order.lineItems.edges as any[]) {
      const productIdx = products.find((p: any) => p.id === liEdge.node.product?.id)?.idx;
      if (productIdx === undefined) continue;
      interactions.push({ userIdx, productIdx, interaction: 1 });
    }
  }

  const seen = new Set(interactions.map(i => `${i.userIdx}-${i.productIdx}`));
  for (let u = 0; u < users.length; u++) {
    for (let p = 0; p < products.length; p++) {
      if (!seen.has(`${u}-${p}`)) {
        interactions.push({ userIdx: u, productIdx: p, interaction: 0 });
      }
    }
  }
  return interactions;
}
