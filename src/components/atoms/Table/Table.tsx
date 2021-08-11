/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { TableOptions as ReactTableOptions, TableState, useTable, usePagination, useSortBy } from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

import TablePagination from './TablePagination';
import {
  TableContainer,
  TableElement,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableHeadCellContent,
  TableBody,
  TableRow,
  TableCell,
} from './TableParts';

type TableOptions<D extends Record<string, unknown>> = Pick<
  ReactTableOptions<D>,
  'columns' | 'data' | 'initialState' | 'disableSortBy'
> & {
  title: string;
  setQueryVariables: (tableState: TableState<D>) => void;
  totalItems?: number;
  disablePagination?: boolean;
};

const useTableStyles = makeStyles(tableComponentStyles);

const useTableOptions = <D extends Record<string, unknown>>(options: TableOptions<D>): ReactTableOptions<D> => {
  const { columns, data, initialState, disableSortBy = false, disablePagination = false } = options;
  const tableOptions: ReactTableOptions<D> = { columns, data, initialState, disableSortBy };

  if (!disableSortBy) {
    tableOptions.manualSortBy = true;
  }

  if (!disablePagination) {
    tableOptions.manualPagination = true;
    if (initialState && initialState.pageSize && options.totalItems) {
      tableOptions.pageCount = Math.floor(options.totalItems / initialState.pageSize);
    }
  }

  return tableOptions;
};

const Table = <D extends Record<string, unknown>>(options: TableOptions<D>): JSX.Element => {
  const classes = useTableStyles();
  const tableOptions = useTableOptions(options);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable(
    tableOptions,
    useSortBy,
    usePagination,
  );

  const { title, setQueryVariables } = options;
  useEffect(() => {
    setQueryVariables(state);
  }, [setQueryVariables, state]);

  return (
    <>
      <Card classes={{ root: classes.cardRoot }}>
        <CardHeader
          className={classes.cardHeader}
          title={title}
          titleTypographyProps={{
            component: Box,
            marginBottom: '0!important',
            variant: 'h3',
          }}
        />
        <TableContainer>
          <TableElement {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableHeadRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableHeadCell {...column.getHeaderProps()}>
                      <TableHeadCellContent
                        canGroupBy={column.canGroupBy}
                        canSortBy={column.canSort}
                        isGrouped={column.isGrouped}
                        isSorted={column.isSorted}
                        isSortedDescending={column.isSortedDesc}
                        align={column.align}
                        groupByToggleProps={column.getGroupByToggleProps && column.getGroupByToggleProps()}
                        sortByToggleProps={column.getSortByToggleProps && column.getSortByToggleProps()}
                      >
                        {column.render('Header')}
                      </TableHeadCellContent>
                    </TableHeadCell>
                  ))}
                </TableHeadRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </TableElement>
        </TableContainer>
        {!options.disablePagination && tableOptions.pageCount && tableOptions.pageCount > 1 && <TablePagination />}
      </Card>
    </>
  );
};

export default Table;
