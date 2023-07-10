import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {GET_PRODUCT_BY_COLLECTION} from '../graphql/queries';
import {ProductResponse, Edge} from '../interfaces/productInterfaces';

interface Props {
  id: string;
  quantity: number;
}

export const useProducts = ({id, quantity}: Props) => {
  const [products, setProducts] = useState<Edge[]>([]);
  const {data, loading, refetch} = useQuery<ProductResponse>(
    GET_PRODUCT_BY_COLLECTION,
    {
      variables: {id, quantity},
    },
  );

  useEffect(() => {
    if (!loading && data?.collection?.products.edges && products.length === 0) {
      setProducts(data?.collection.products.edges);
    }
  }, [loading, data, products]);

  const fetchMore = () => {
    if (loading || !products[products.length - 1]) {
      return;
    }
    refetch({id, quantity, after: products[products.length - 1].cursor}).then(
      response => {
        setProducts(currentProducts => [
          ...currentProducts,
          ...response.data.collection.products.edges,
        ]);
      },
    );
  };

  return {products, loading, fetchMore};
};
