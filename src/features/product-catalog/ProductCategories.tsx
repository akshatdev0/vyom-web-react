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
import { Card, CardHeader, Container } from 'reactstrap';
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  PageSettingsModel,
} from '@syncfusion/ej2-react-treegrid';
// core components
import { SimpleHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { useProductCategoriesOfCompanyQuery } from 'generated/graphql';

const ProductCategories: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const productCategoriesQuery = useProductCategoriesOfCompanyQuery(
    { companyID: companyID || '' },
    { enabled: !!companyID },
  );
  const { data: { productCategories = [] } = {} } = productCategoriesQuery;
  const pageSettings: PageSettingsModel = { pageSize: 12 };

  const gridData = productCategories ? productCategories : undefined;

  return (
    <>
      <SimpleHeader name="Product Categories" parentName="Product Catalog" />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader className="border-0">
            <h3 className="mb-0">Product Categories</h3>
          </CardHeader>
          <TreeGridComponent
            dataSource={gridData}
            treeColumnIndex={1}
            childMapping="subcategories"
            allowPaging={true}
            pageSettings={pageSettings}
          >
            <ColumnsDirective>
              <ColumnDirective field="id" headerText="ID" width="20" textAlign="Right"></ColumnDirective>
              <ColumnDirective field="name" headerText="Name" width="100"></ColumnDirective>
              <ColumnDirective field="description" headerText="Description" width="200" />
            </ColumnsDirective>
            <Inject services={[Page]} />
          </TreeGridComponent>
        </Card>
      </Container>
    </>
  );
};

export default ProductCategories;
