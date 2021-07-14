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
/* eslint-disable */
import React from 'react';

import { Card, CardHeader, CardBody, Container } from 'reactstrap';
// core components
import { SimpleHeader } from 'components/molecules';
// import { useAuthState } from 'features/auth';
// import { useProductsOfCompanyQuery } from 'generated/graphql';

const NewProduct: React.FunctionComponent = () => {
  // const { user: sessionUser } = useAuthState();
  // const companyID = sessionUser?.companyOwner?.company?.id;
  // const productsQuery = useProductsOfCompanyQuery({ companyID: companyID || '' }, { enabled: !!companyID });
  // const { data: { products = [] } = {} } = productsQuery;

  return (
    <>
      <SimpleHeader name="New Product" parentName="Product Catalog" />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader>
            <h3 className="mb-0">New Product</h3>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </Container>
    </>
  );
};

export default NewProduct;
