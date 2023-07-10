export interface SingleProductResponse {
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  productType: string;
  totalInventory: number;
  variants: Variants;
  featuredImage: Image;
}

export interface Image {
  id: string;
  url: string;
}

export interface Variants {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  price: Price;
  image: Image;
}

export interface Price {
  amount: string;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  CAD = 'CAD',
}
