import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://mock.shop/api',
  cache,
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GraphQL = ({children}: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
