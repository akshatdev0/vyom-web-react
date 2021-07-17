/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import { TableOptions, usePagination, useTable } from 'react-table';
import { Card, CardHeader, CardFooter, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';

type DataGridOptions<D extends Record<string, unknown>> = {
  title: string;
} & Pick<TableOptions<D>, 'columns' | 'data'>;

const DataGrid = <D extends Record<string, unknown>>({ title, columns, data }: DataGridOptions<D>): JSX.Element => {
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
      <Card>
        <CardHeader className="border-0">
          <h3 className="mb-0">{title}</h3>
        </CardHeader>
        <Table {...getTableProps()} className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="list">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <CardFooter className="py-4">
          <nav aria-label="...">
            <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
              {/* <PaginationItem className="disabled">
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                  <i className="fas fa-angle-left" />
                  <i className="fas fa-angle-left" />
                  <span className="sr-only">First</span>
                </PaginationLink>
              </PaginationItem> */}
              <PaginationItem className="disabled">
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                  <i className="fas fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  2 <span className="sr-only">(current)</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="fas fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
              {/* <PaginationItem className="disabled">
                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                  <i className="fas fa-angle-right" />
                  <i className="fas fa-angle-right" />
                  <span className="sr-only">Last</span>
                </PaginationLink>
              </PaginationItem> */}
            </Pagination>
          </nav>
        </CardFooter>
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
