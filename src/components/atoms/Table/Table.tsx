/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableOptions as ReactTableOptions,
  TableState,
  useTable,
  usePagination,
  useSortBy,
  useExpanded,
  ColumnInstance,
  Column,
  Row,
} from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

import ErrorOverlay from './ErrorOverlay';
import LoadingOverlay from './LoadingOverlay';
import NoRowsOverlay from './NoRowsOverlay';
import TableBodyContent from './TableBodyContent';
import TablePagination from './TablePagination';
import {
  TableContainer,
  TableElement,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableHeadCellContent,
  TableBody,
} from './TableParts';

export type SubComponentProps<D extends Record<string, unknown>> = {
  depth: number;
  columns: Column<D>[];
  visibleColumns: ColumnInstance<D>[];
  row: Row<D>;
};

type TableOptions<D extends Record<string, unknown>> = Pick<
  ReactTableOptions<D>,
  'columns' | 'data' | 'initialState' | 'disableSortBy'
> & {
  title: string;
  isError?: boolean;
  isLoading?: boolean;
  totalItems?: number;
  pageCount?: number;
  disablePagination?: boolean;
  rowsPerPageOptions?: Array<number>;
  setQueryVariables: (tableState: TableState<D>) => void;
  renderSubComponent?: (props: SubComponentProps<D>) => JSX.Element;
};

const DEFAULT_ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

const useTableStyles = makeStyles(tableComponentStyles);

const useTableOptions = <D extends Record<string, unknown>>(options: TableOptions<D>): ReactTableOptions<D> => {
  const { columns, data, initialState, disableSortBy = false, disablePagination = false } = options;

  if (initialState) {
    if (!initialState.pageIndex) {
      initialState.pageIndex = 0;
    }
    if (!initialState.pageSize) {
      initialState.pageSize = options.rowsPerPageOptions?.[0] || DEFAULT_ROWS_PER_PAGE_OPTIONS[0];
    }
  }

  const tableOptions: ReactTableOptions<D> = { columns, data, initialState, disableSortBy };

  if (!disableSortBy) {
    tableOptions.manualSortBy = true;
  }

  if (!disablePagination) {
    tableOptions.manualPagination = true;
  }

  return tableOptions;
};

const Table = <D extends Record<string, unknown>>(options: TableOptions<D>): JSX.Element => {
  const {
    title,
    columns,
    data,
    isError = false,
    isLoading = false,
    totalItems = 0,
    pageCount = 0,
    rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS,
    disablePagination,
    setQueryVariables,
    renderSubComponent,
  } = options;
  const classes = useTableStyles();
  const tableOptions = useTableOptions(options);
  const {
    headerGroups,
    rows,
    state,
    visibleColumns,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    gotoPage,
    setPageSize,
  } = useTable({ ...tableOptions, pageCount }, useSortBy, useExpanded, usePagination);
  const { pageSize: rowsPerPage, pageIndex } = state;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length);
  const showNoRowsOverlay = !isError && !isLoading && data.length === 0;

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
          {isError && <ErrorOverlay />}
          {isLoading && <LoadingOverlay />}
          {showNoRowsOverlay && <NoRowsOverlay />}
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
              <TableBodyContent
                depth={0}
                rows={rows}
                prepareRow={prepareRow}
                columns={columns}
                visibleColumns={visibleColumns}
                emptyRows={emptyRows}
                renderSubComponent={renderSubComponent}
              />
            </TableBody>
          </TableElement>
        </TableContainer>
        {!disablePagination && (
          <TablePagination
            rowsPerPage={rowsPerPage}
            currentPage={pageIndex + 1}
            totalItems={totalItems}
            pageCount={pageCount}
            rowsPerPageOptions={rowsPerPageOptions}
            gotoPage={gotoPage}
            setRowsPerPage={setPageSize}
          />
        )}
      </Card>
    </>
  );
};

export default Table;
