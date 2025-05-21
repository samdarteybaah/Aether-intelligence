import { ProductRecommender } from "./recommenderModel";
import { getUserProductMappings, getInteractionData } from "./recommenderData";
import { json } from "@remix-run/node";

// Loader to train and serve recommendations for a given user
export async function getRecommendationsForUser(userId: string, topN = 5, request?: Request) {
  // Get mappings and data
  const { users, products } = await getUserProductMappings(request);
  const userIdx = users.find((u: any) => u.id === userId)?.idx ?? 0;
  const numUsers = users.length;
  const numProducts = products.length;
  const interactions = await getInteractionData(request);
  // Prepare training data
  const userIds = interactions.map(i => i.userIdx);
  const productIds = interactions.map(i => i.productIdx);
  const interactionVals = interactions.map(i => i.interaction);
  // Train recommender (in production, cache or persist model)
  const recommender = new ProductRecommender(numUsers, numProducts);
  await recommender.train(userIds, productIds, interactionVals);
  // Get recommendations
  const recommendedProductIndices = await recommender.recommend(userIdx, topN);
  const recommendedProducts = recommendedProductIndices.map(idx => products[idx]);
  return recommendedProducts;
}

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId") || "";
  const topN = parseInt(url.searchParams.get("topN") || "5");
  const recommendations = await getRecommendationsForUser(userId, topN, request);
  return json({ recommendations });
};
