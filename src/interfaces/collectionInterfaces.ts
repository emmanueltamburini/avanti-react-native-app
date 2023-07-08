export interface CollectionResponse {
  collections: Collections;
}

export interface Collections {
  __typename: string;
  edges: Edge[];
}

export interface Edge {
  __typename: string;
  cursor: string;
  node: Node;
}

export interface Node {
  __typename: string;
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image;
}

export interface Image {
  __typename: string;
  id: string;
  url: string;
}
