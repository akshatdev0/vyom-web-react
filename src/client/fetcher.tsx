import { useGraphQLClient } from 'client';

export const useFetcher = <TData, TVariables>(query: string): (() => Promise<TData>) => {
  const client = useGraphQLClient();
  return async (variables?: TVariables) => client.request<TData, TVariables>(query, variables);
};
