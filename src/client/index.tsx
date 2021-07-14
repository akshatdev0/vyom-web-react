import React, { useContext, createContext } from 'react';

import { GraphQLClient } from 'graphql-request';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';

import { getSessionToken } from './session';

type Props = {
  endpoint: string | undefined;
  children: React.ReactNode;
};

const GraphQLClientContext = createContext<GraphQLClient | undefined>(undefined);

const ClientProvider = ({ endpoint, children }: Props): JSX.Element => {
  if (!endpoint) {
    throw new Error('No endpoint set, use ClientProvider endpoint prop to set one');
  }

  const reactQueryClient: QueryClient = new QueryClient();
  const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {},
  });

  return (
    <QueryClientProvider client={reactQueryClient}>
      <GraphQLClientContext.Provider value={graphQLClient}>{children}</GraphQLClientContext.Provider>
    </QueryClientProvider>
  );
};

const useGraphQLClient = (): GraphQLClient => {
  const graphQLClient = useContext(GraphQLClientContext);

  if (!graphQLClient) {
    throw new Error('Client not created yet! Use ClientProvider endpoint prop to create one');
  }

  const token = getSessionToken();
  graphQLClient.setHeader('authorization', token ? `Bearer ${token}` : '');

  return graphQLClient;
};

export { ClientProvider, useQueryClient as useReactQueryClient, useGraphQLClient };
