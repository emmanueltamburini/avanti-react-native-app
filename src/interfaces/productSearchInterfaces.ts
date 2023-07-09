export interface ProductSearchResponse {
  products: Products;
}

export interface Products {
  edges: ProductsEdge[];
}

export interface ProductsEdge {
  cursor: string;
  node: PurpleNode;
}

export interface PurpleNode {
  id: string;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  variants: Variants;
}

export interface FeaturedImage {
  id: string;
  url: string;
}

export interface Variants {
  edges: VariantsEdge[];
}

export interface VariantsEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  price: Price;
}

export interface Price {
  amount: string;
  currencyCode: string;
}
