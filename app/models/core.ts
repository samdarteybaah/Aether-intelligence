// Model for product pricing boundaries and audit log
export interface ProductPriceBoundary {
  productId: string;
  minPrice: number;
  maxPrice: number;
  dynamicPricingEnabled?: boolean;
}

export interface PriceAuditLog {
  productId: string;
  oldPrice: number;
  newPrice: number;
  timestamp: string;
}

// Model for cart price locking
export interface CartPriceLock {
  cartId: string;
  productId: string;
  lockedPrice: number;
  lockedAt: string;
}

// Model for recommendation metrics
export interface RecommendationMetric {
  productId: string;
  impressions: number;
  clicks: number;
  conversions: number;
}

// Model for bundle suggestions
export interface BundleSuggestion {
  bundleId: string;
  productIds: string[];
  suggestedPrice: number;
  discountFactor: number;
  status: 'pending' | 'approved' | 'rejected';
}
