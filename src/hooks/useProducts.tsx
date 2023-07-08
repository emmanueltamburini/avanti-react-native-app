import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {GET_PRODUCT_BY_COLLECTION} from '../graphql/queries';
import {ProductResponse, Edge} from '../interfaces/productInterfaces';

interface Props {
  id: string;
  quantity: number;
  pagination: number;
}

export const useProducts = ({id, quantity, pagination}: Props) => {
  const [elementFetch, setElementFetch] = useState(quantity);
  const [products, setProducts] = useState<Edge[]>([]);
  const {data, loading, refetch} = useQuery<ProductResponse>(
    GET_PRODUCT_BY_COLLECTION,
    {
      variables: {id, quantity: elementFetch},
    },
  );

  useEffect(() => {
    if (!loading && data?.collection.products.edges) {
      setProducts(data?.collection.products.edges);
    }
  }, [loading, data]);

  const fetchMore = () => {
    if (loading || elementFetch > products.length) {
      return;
    }
    refetch({quantity: elementFetch + pagination}).then(response => {
      setProducts(response.data.collection.products.edges);
      setElementFetch(elementFetch + pagination);
    });
  };

  return {products, loading, fetchMore};
};
