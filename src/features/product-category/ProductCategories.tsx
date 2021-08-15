import React, { useCallback } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { CellProps, Column } from 'react-table';

import componentStyles from 'assets/theme/views/admin/tables';
import { Table } from 'components/atoms';
import { SubComponentProps } from 'components/atoms/Table/Table';
import { TableExpanderCell } from 'components/atoms/Table/TableParts';
import TableSubRow from 'components/atoms/Table/TableSubRow';
import { SimpleHeader } from 'components/molecules';
import { getAuthData } from 'features/auth';
import {
  ProductCategoriesOfCompanyQuery,
  ProductCategoriesOfCompanyQueryVariables,
  useProductCategoriesOfCategoryQuery,
  useProductCategoriesOfCompanyQuery,
} from 'generated/graphql';
import { useTableQueryVariables } from 'hooks';
import { Unarray } from 'types';

type ProductCategory = NonNullable<Unarray<ProductCategoriesOfCompanyQuery['productCategories']>>;

const columns: Array<Column<ProductCategory>> = [
  {
    Header: 'Name',
    accessor: 'name',
    // eslint-disable-next-line react/display-name
    Cell: (props: CellProps<ProductCategory>) => (
      <TableExpanderCell<ProductCategory> canExpand={(row) => row.original.hasSubCategories} {...props} />
    ),
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
];

const useStyles = makeStyles(componentStyles);

function ProductSubCategories({ depth, columns, visibleColumns, row }: SubComponentProps<ProductCategory>) {
  const productCategoriesQuery = useProductCategoriesOfCategoryQuery({ categoryID: row.original.id });
  const { data: { productCategories = [] } = {} } = productCategoriesQuery;

  const renderSubCategories = useCallback(
    ({ visibleColumns, row }) => (
      <ProductSubCategories depth={depth + 1} columns={columns} visibleColumns={visibleColumns} row={row} />
    ),
    [depth, columns],
  );

  return (
    <TableSubRow<ProductCategory>
      depth={depth}
      columns={columns}
      visibleColumns={visibleColumns}
      data={productCategories}
      renderSubComponent={renderSubCategories}
    />
  );
}

const ProductCategories: React.FunctionComponent = () => {
  const classes = useStyles();
  const { user: sessionUser } = getAuthData();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const { initialState, queryVariables, setQueryVariables } = useTableQueryVariables<
    ProductCategoriesOfCompanyQueryVariables,
    ProductCategory
  >({ companyID }, { sortBy: [{ id: 'name', desc: false }] });
  const productCategoriesQuery = useProductCategoriesOfCompanyQuery(queryVariables);

  const renderSubCategories = useCallback(
    ({ visibleColumns, row }) => (
      <ProductSubCategories depth={1} columns={columns} visibleColumns={visibleColumns} row={row} />
    ),
    [columns],
  );

  const { data: { productCategories = [] } = {} } = productCategoriesQuery;

  return (
    <>
      <SimpleHeader section="Product Catalog" subsection="Categories" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Table<ProductCategory>
          title="Product Categories"
          columns={columns}
          isError={productCategoriesQuery.isError}
          isLoading={productCategoriesQuery.isLoading}
          data={productCategories}
          initialState={initialState}
          setQueryVariables={setQueryVariables}
          renderSubComponent={renderSubCategories}
        />
      </Container>
    </>
  );
};

export default ProductCategories;
