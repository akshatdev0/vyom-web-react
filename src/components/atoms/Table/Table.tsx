/* eslint-disable react/jsx-key */
import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { TableOptions as ReactTableOptions, usePagination, useTable } from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

import {
  TableContainer,
  TableElement,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  TableLabel,
} from './TableParts';

type TableOptions<D extends Record<string, unknown>> = {
  title: string;
} & Pick<ReactTableOptions<D>, 'columns' | 'data'>;

const useTableStyles = makeStyles(tableComponentStyles);

const Table = <D extends Record<string, unknown>>({ title, columns, data }: TableOptions<D>): JSX.Element => {
  const classes = useTableStyles();
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

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
                      <TableLabel>{column.render('Header')}</TableLabel>
                    </TableHeadCell>
                  ))}
                </TableHeadRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map((row) => {
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
