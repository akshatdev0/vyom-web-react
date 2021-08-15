/* eslint-disable react/jsx-key */
import React from 'react';

import { Row, ColumnInstance, Column } from 'react-table';

import { SubComponentProps } from './Table';
import { TableRow, TableCell } from './TableParts';

type Props<D extends Record<string, unknown>> = {
  depth: number;
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  columns: Column<D>[];
  visibleColumns: ColumnInstance<D>[];
  emptyRows?: number;
  renderSubComponent?: (props: SubComponentProps<D>) => JSX.Element;
};

const TableBodyContent = <D extends Record<string, unknown>>({
  depth,
  rows,
  prepareRow,
  columns,
  visibleColumns,
  emptyRows = 0,
  renderSubComponent,
}: Props<D>): JSX.Element => {
  return (
    <>
      {rows.map((row, i) => {
        prepareRow(row);
        const rowProps = row.getRowProps();
        return (
          <React.Fragment key={`table-rows-d${depth}-r${i}`}>
            <TableRow {...rowProps}>
              {row.cells.map((cell, j) => {
                return (
                  <TableCell
                    {...cell.getCellProps({
                      style: {
                        paddingLeft: `${j === 0 ? depth * 1 + 1.5 : 1.5}rem`,
                      },
                    })}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
            {row.isExpanded && renderSubComponent && renderSubComponent({ depth, columns, visibleColumns, row })}
          </React.Fragment>
        );
      })}
      {emptyRows > 0 && (
        <TableRow key="empty-rows" style={{ height: 51 * emptyRows }}>
          <TableCell key="empty-cell">
            <span> </span>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default TableBodyContent;
