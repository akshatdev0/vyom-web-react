/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { TableOptions as ReactTableOptions, useTable, useSortBy, SortingRule } from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

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

type OnFetchDataProps<D extends Record<string, unknown>> = {
  sortBy: SortingRule<D>[];
};

type TableOptions<D extends Record<string, unknown>> = Pick<ReactTableOptions<D>, 'columns' | 'data'> & {
  title: string;
  onFetchData: ({ sortBy }: OnFetchDataProps<D>) => void;
};

const useTableStyles = makeStyles(tableComponentStyles);

const Table = <D extends Record<string, unknown>>({
  title,
  columns,
  data,
  onFetchData,
}: TableOptions<D>): JSX.Element => {
  const classes = useTableStyles();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      manualSortBy: true,
    },
    useSortBy,
  );

  useEffect(() => {
    onFetchData({ sortBy });
  }, [onFetchData, sortBy]);

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
      </Card>
    </>
  );
};

export default Table;
