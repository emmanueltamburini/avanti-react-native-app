import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {CollectionResponse, Edge} from '../interfaces/collectionInterfaces';
import {GET_COLLECTION} from '../graphql/queries';

interface Props {
  quantity: number;
}

export const useCollection = ({quantity}: Props) => {
  const [collections, setCollections] = useState<Edge[]>([]);
  const {data, loading, refetch} = useQuery<CollectionResponse>(
    GET_COLLECTION,
    {
      variables: {after: null, quantity},
    },
  );

  useEffect(() => {
    if (!loading && data?.collections && collections.length === 0) {
      setCollections(data?.collections.edges);
    }
  }, [loading, data, collections]);

  const fetchMore = () => {
    if (loading || !collections[collections.length - 1]) {
      return;
    }
    refetch({after: collections[collections.length - 1].cursor, quantity}).then(
      response => {
        setCollections(currentCollections => [
          ...currentCollections,
          ...response.data.collections.edges,
        ]);
      },
    );
  };

  return {collections, loading, fetchMore};
};
