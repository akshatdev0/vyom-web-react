import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Column } from 'react-table';

import componentStyles from 'assets/theme/views/admin/tables';
import { Table } from 'components/atoms';
import { SimpleHeader } from 'components/molecules';
import { getAuthData } from 'features/auth';
import { ProductsOfCompanyQuery, ProductsOfCompanyQueryVariables, useProductsOfCompanyQuery } from 'generated/graphql';
import { useTableQueryVariables } from 'hooks';
import { Unarray } from 'types';

type Product = NonNullable<Unarray<ProductsOfCompanyQuery['products']>>;

const columns: Array<Column<Product>> = [
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'SKU',
    accessor: 'sku',
  },
  {
    id: 'productCategory.name',
    Header: 'Category',
    accessor: (row) => row.productCategory?.name,
  },
  {
    id: 'brand.name',
    Header: 'Brand',
    accessor: (row) => row.brand?.name,
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
];

const useStyles = makeStyles(componentStyles);

const Products: React.FunctionComponent = () => {
  const classes = useStyles();
  const { user: sessionUser } = getAuthData();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const { initialState, queryVariables, setQueryVariables } = useTableQueryVariables<
    ProductsOfCompanyQueryVariables,
    Product
  >({ companyID }, { sortBy: [{ id: 'title', desc: false }] });
  const [pageCount, setPageCount] = useState(0);
  const productsQuery = useProductsOfCompanyQuery(queryVariables, {
    onSuccess: ({ countProducts }) => {
      if (queryVariables.limit) {
        setPageCount(Math.ceil(countProducts / queryVariables.limit));
      }
    },
  });
  const { data: { countProducts, products = [] } = {} } = productsQuery;

  return (
    <>
      <SimpleHeader section="Product Catalog" subsection="Products" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Table<Product>
          title="Products"
          columns={columns}
          isError={productsQuery.isError}
          isLoading={productsQuery.isLoading}
          data={products}
          totalItems={countProducts}
          pageCount={pageCount}
          initialState={initialState}
          setQueryVariables={setQueryVariables}
        />
      </Container>
    </>
  );
};

export default Products;
