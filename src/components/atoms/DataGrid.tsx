/* eslint-disable react/jsx-key */
import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import { TableOptions, usePagination, useTable } from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

type DataGridOptions<D extends Record<string, unknown>> = {
  title: string;
} & Pick<TableOptions<D>, 'columns' | 'data'>;

const useTableStyles = makeStyles(tableComponentStyles);

const DataGrid = <D extends Record<string, unknown>>({ title, columns, data }: DataGridOptions<D>): JSX.Element => {
  const classes = useTableStyles();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
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
          <Box component={Table} {...getTableProps()} alignItems="center" marginBottom="0!important">
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell
                      {...column.getHeaderProps()}
                      classes={{
                        root: classes.tableCellRoot + ' ' + classes.tableCellRootHead,
                      }}
                    >
                      {column.render('Header')}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell
                          {...cell.getCellProps()}
                          classes={{
                            root: classes.tableCellRoot + ' ' + classes.tableCellRootBodyHead,
                          }}
                        >
                          {cell.render('Cell')}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Box>
        </TableContainer>
        <CardActions classes={{ root: classes.cardActionsRoot }}>
          <Pagination count={3} color="primary" variant="outlined" />
        </CardActions>
      </Card>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DataGrid;
