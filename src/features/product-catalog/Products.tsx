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

// reactstrap components
import { Card, CardHeader, Container, Row, Col, Button } from 'reactstrap';
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  PageSettingsModel,
  Sort,
} from '@syncfusion/ej2-react-grids';
// core components
import { SimpleHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { useProductsOfCompanyQuery } from 'generated/graphql';
import routes from 'routes';
import { RouteLink } from 'components/atoms';

const Products: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const productsQuery = useProductsOfCompanyQuery({ companyID: companyID || '' }, { enabled: !!companyID });
  const { data: { products = [] } = {} } = productsQuery;
  const pageSettings: PageSettingsModel = { pageSize: 10 };

  const tableData = products?.map((product) => {
    return {
      id: product?.id,
      title: product?.title,
      sku: product?.sku,
      category: product?.productCategory?.name,
      brand: product?.brand?.name,
      price: product?.price,
    };
  });

  return (
    <>
      <SimpleHeader name="Products" parentName="Product Catalog" />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Products</h3>
              </Col>
              <Col className="text-right" xs="4">
                <RouteLink to={routes.newProduct}>
                  <Button size="sm" color="primary">
                    New Product
                  </Button>
                </RouteLink>
              </Col>
            </Row>
          </CardHeader>
          <GridComponent dataSource={tableData} allowPaging={true} pageSettings={pageSettings} allowSorting={true}>
            <ColumnsDirective>
              <ColumnDirective field="title" headerText="Title" autoFit={true} />
              <ColumnDirective field="sku" headerText="SKU" />
              <ColumnDirective field="category" headerText="Category" />
              <ColumnDirective field="brand" headerText="Brand" />
              <ColumnDirective field="price" headerText="Price" textAlign="Right" />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
          </GridComponent>
        </Card>
      </Container>
    </>
  );
};

export default Products;
