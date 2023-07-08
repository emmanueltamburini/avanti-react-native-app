export interface ProductResponse {
  collection: Collection;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image;
  products: Products;
}

export interface Image {
  id: string;
  url: string;
}

export interface Products {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  title: string;
  featuredImage: Image;
}
