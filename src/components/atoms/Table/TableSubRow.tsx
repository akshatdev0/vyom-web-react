/* eslint-disable react/jsx-key */
import React from 'react';

import { useTable, useExpanded } from 'react-table';

import { SubComponentProps } from './Table';
import TableBodyContent from './TableBodyContent';

type Props<D extends Record<string, unknown>> = Omit<SubComponentProps<D>, 'row'> & {
  data: D[];
  renderSubComponent?: (props: SubComponentProps<D>) => JSX.Element;
};

const TableSubRow = <D extends Record<string, unknown>>({
  depth,
  columns,
  visibleColumns,
  data,
  renderSubComponent,
}: Props<D>): JSX.Element | null => {
  const { rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useExpanded,
  );

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <TableBodyContent
      depth={depth}
      rows={rows}
      prepareRow={prepareRow}
      columns={columns}
      visibleColumns={visibleColumns}
      renderSubComponent={renderSubComponent}
    />
  );
};

export default TableSubRow;
