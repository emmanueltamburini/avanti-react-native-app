import {gql} from '@apollo/client';

export const GET_COLLECTION = gql`
  query getCollections($quantity: Int!, $after: String) {
    collections(first: $quantity, after: $after) {
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
  query getProducts($id: ID!, $quantity: Int!) {
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

export const GET_PRODUCT_BY_TITLE = gql`
  query getProductsByTitle($query: String, $quantity: Int!, $after: String) {
    products(first: $quantity, query: $query, after: $after) {
      edges {
        cursor
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;
