/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

import { Column } from 'react-table';
import { Container } from 'reactstrap';

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

const ProductCategories: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const productCategoriesQuery = useProductCategoriesOfCompanyQuery(
    { companyID: companyID || '' },
    { enabled: !!companyID },
  );
  const { data: { productCategories = [] } = {} } = productCategoriesQuery;

  return (
    <>
      <SimpleHeader name="Categories" parentName="Product Catalog" />
      <Container className="mt--6" fluid>
        <DataGrid<ProductCategory> title="Product Categories" columns={columns} data={productCategories}></DataGrid>
      </Container>
    </>
  );
};

export default ProductCategories;
