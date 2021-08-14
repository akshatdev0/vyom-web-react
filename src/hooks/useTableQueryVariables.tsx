import { useState } from 'react';

import { TableState } from 'react-table';

import { produce } from 'core/utils';
import { Maybe, Scalars } from 'generated/graphql';

type QueryVariables<T extends Record<string, unknown>> = T & {
  sortBy?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

type TableQueryVariables<T extends Record<string, unknown>, D extends Record<string, unknown>> = {
  initialState: Partial<TableState<D>>;
  queryVariables: QueryVariables<T>;
  setQueryVariables: (tableState: TableState<D>) => void;
};

const produceQueryVariables = <T extends Record<string, unknown>, D extends Record<string, unknown>>(
  base: QueryVariables<T>,
  tableState: Partial<TableState<D>>,
) =>
  produce<QueryVariables<T>>(base, (draft) => {
    const { sortBy, pageIndex, pageSize } = tableState;

    // Sort By
    if (sortBy && sortBy.length > 0) {
      draft.sortBy = `${sortBy[0].id}:${sortBy[0].desc ? 'desc' : 'asc'}`;
    } else {
      draft.sortBy = undefined;
    }

    // Pagination
    if (pageIndex !== undefined && pageSize !== undefined && pageSize !== 0) {
      draft.start = pageIndex * pageSize;
      draft.limit = pageSize;
    }
  });

const useTableQueryVariables = <T extends Record<string, unknown>, D extends Record<string, unknown>>(
  initialVariables: T,
  initialState: Partial<TableState<D>>,
): TableQueryVariables<T, D> => {
  const [queryVariables, setVariables] = useState<QueryVariables<T>>(
    produceQueryVariables(initialVariables, initialState),
  );

  const setQueryVariables = (tableState: TableState<D>) => {
    setVariables((prevVariables) => produceQueryVariables(prevVariables, tableState));
  };

  return {
    initialState,
    queryVariables,
    setQueryVariables,
  };
};

export default useTableQueryVariables;
