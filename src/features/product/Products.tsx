import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Column } from 'react-table';

import componentStyles from 'assets/theme/views/admin/tables';
import { DataGrid } from 'components/atoms';
import { SimpleHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { ProductsOfCompanyQuery, useProductsOfCompanyQuery } from 'generated/graphql';
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
    id: 'category',
    Header: 'Category',
    accessor: (row) => row.productCategory?.name,
  },
  {
    id: 'brand',
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
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const productsQuery = useProductsOfCompanyQuery({ companyID: companyID || '' }, { enabled: !!companyID });
  const { data: { products = [] } = {} } = productsQuery;

  return (
    <>
      <SimpleHeader section="Product Catalog" subsection="Products" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <DataGrid<Product> title="Products" columns={columns} data={products} />
      </Container>
    </>
  );
};

export default Products;
