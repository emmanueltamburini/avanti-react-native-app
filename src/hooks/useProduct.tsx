import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {GET_PRODUCT_BY_ID} from '../graphql/queries';
import {
  Product,
  SingleProductResponse,
} from '../interfaces/singleProductInterfaces';

interface Props {
  id: string;
}

export const useProduct = ({id}: Props) => {
  const [product, setProduct] = useState<Product>();
  const {data, loading} = useQuery<SingleProductResponse>(GET_PRODUCT_BY_ID, {
    variables: {id},
  });

  useEffect(() => {
    if (!loading && data?.product) {
      setProduct(data?.product);
    }
  }, [loading, data]);

  return {product, loading};
};
