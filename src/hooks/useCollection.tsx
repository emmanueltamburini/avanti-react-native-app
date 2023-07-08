import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {CollectionResponse, Edge} from '../interfaces/collectionInterfaces';
import {GET_COLLECTION} from '../graphql/queries';

interface Props {
  quantity: number;
  pagination: number;
}

export const useCollection = ({quantity, pagination}: Props) => {
  const [elementFetch, setElementFetch] = useState(quantity);
  const [collections, setCollections] = useState<Edge[]>([]);
  const {data, loading, refetch} = useQuery<CollectionResponse>(
    GET_COLLECTION,
    {
      variables: {quantity: elementFetch},
    },
  );

  useEffect(() => {
    if (!loading && data?.collections) {
      setCollections(data?.collections.edges);
    }
  }, [loading, data]);

  const fetchMore = () => {
    if (loading || elementFetch > collections.length) {
      return;
    }
    refetch({quantity: elementFetch + pagination}).then(response => {
      setCollections(response.data.collections.edges);
      setElementFetch(elementFetch + pagination);
    });
  };

  return {collections, loading, fetchMore};
};
