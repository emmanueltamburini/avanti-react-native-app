import {gql} from '@apollo/client';

export const GET_COLLECTION = gql`
  query getCollections($quantity: Int!) {
    collections(first: $quantity) {
      edges {
        cursor
        node {
          id
          handle
          title
          description
          image {
            id
            url
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_COLLECTION = gql`
  query getCollections($id: ID!, $quantity: Int!) {
    collection(id: $id) {
      id
      handle
      title
      description
      image {
        id
        url
      }
      products(first: $quantity) {
        edges {
          node {
            id
            title
            featuredImage {
              id
              url
            }
          }
        }
      }
    }
  }
`;
