import { useState } from 'react';

import { TableState } from 'react-table';

import { produce } from 'core/utils';
import { Maybe, Scalars } from 'generated/graphql';

type QueryVariables<T extends Record<string, unknown>> = T & {
  sortBy?: Maybe<Scalars['String']>;
};

type TableQueryVariables<T extends Record<string, unknown>, D extends Record<string, unknown>> = {
  variables: QueryVariables<T>;
  initialState: Partial<TableState<D>>;
  setVariables: (tableState: TableState<D>) => void;
};

const produceQueryVariables = <T extends Record<string, unknown>, D extends Record<string, unknown>>(
  base: QueryVariables<T>,
  tableState: Partial<TableState<D>>,
) =>
  produce<QueryVariables<T>>(base, (draft) => {
    const { sortBy } = tableState;

    // Sort By
    if (sortBy && sortBy.length > 0) {
      draft.sortBy = `${sortBy[0].id}:${sortBy[0].desc ? 'desc' : 'asc'}`;
    } else {
      draft.sortBy = undefined;
    }
  });

const useTableQueryVariables = <T extends Record<string, unknown>, D extends Record<string, unknown>>(
  initialVariables: T,
  initialState: Partial<TableState<D>>,
): TableQueryVariables<T, D> => {
  const [variables, _setVariables] = useState<QueryVariables<T>>(produceQueryVariables(initialVariables, initialState));

  const setVariables = (tableState: TableState<D>) => {
    _setVariables((prevVariables) => produceQueryVariables(prevVariables, tableState));
  };

  return {
    variables,
    initialState,
    setVariables,
  };
};

export default useTableQueryVariables;
