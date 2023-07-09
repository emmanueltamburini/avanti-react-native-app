import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {GET_PRODUCT_BY_TITLE} from '../graphql/queries';
import {
  ProductSearchResponse,
  ProductsEdge,
} from '../interfaces/productSearchInterfaces';

interface Props {
  quantity: number;
}

export const useSearchProducts = ({quantity}: Props) => {
  const [products, setProducts] = useState<ProductsEdge[]>([]);
  const {data, loading, refetch} = useQuery<ProductSearchResponse>(
    GET_PRODUCT_BY_TITLE,
    {
      variables: {quantity, query: 'title:**'},
    },
  );

  useEffect(() => {
    if (!loading && data?.products.edges && products.length === 0) {
      setProducts(data.products.edges);
    }
  }, [loading, data, products]);

  const fetchMore = (title: string) => {
    if (loading || !products[products.length - 1]) {
      return;
    }
    refetch({quantity, query: `title: "*${title}*"`}).then(response => {
      setProducts(response.data.products.edges);
    });
  };

  return {products, loading, fetchMore};
};
