import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Column } from 'react-table';

import componentStyles from 'assets/theme/views/admin/tables';
import DataGrid from 'components/atoms/DataGrid';
import { SimpleHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { ProductCategoriesOfCompanyQuery, useProductCategoriesOfCompanyQuery } from 'generated/graphql';
import { Unarray } from 'types';

type ProductCategory = NonNullable<Unarray<ProductCategoriesOfCompanyQuery['productCategories']>>;

const columns: Array<Column<ProductCategory>> = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
];

const useStyles = makeStyles(componentStyles);

const ProductCategories: React.FunctionComponent = () => {
  const classes = useStyles();
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const productCategoriesQuery = useProductCategoriesOfCompanyQuery(
    { companyID: companyID || '' },
    { enabled: !!companyID },
  );
  const { data: { productCategories = [] } = {} } = productCategoriesQuery;

  return (
    <>
      <SimpleHeader section="Product Catalog" subsection="Categories" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <DataGrid<ProductCategory> title="Product Categories" columns={columns} data={productCategories}></DataGrid>
      </Container>
    </>
  );
};

export default ProductCategories;
