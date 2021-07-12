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

import { Card, CardHeader, Container } from 'reactstrap';
import { Internationalization } from '@syncfusion/ej2-base';
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
import { useOrdersOfCompanyQuery } from 'generated/graphql';

const Orders: React.FunctionComponent = () => {
  const ordersQuery = useOrdersOfCompanyQuery();
  const { data: { orders = [] } = {} } = ordersQuery;
  const pageSettings: PageSettingsModel = { pageSize: 10 };

  let intl = new Internationalization();
  let dateFormat = intl.getDateFormat({ skeleton: 'medium', type: 'dateTime' });

  const tableData = orders?.map((order) => {
    return {
      id: order?.id,
      number: order?.number,
      currentStatus: order?.currentStatus,
      paymentStatus: order?.paymentStatus,
      createdAt: dateFormat(new Date(order?.created_at)),
      shop: order?.shop?.name,
      shopkeeperMobileNumber: order?.shop?.shopkeepers?.[0]?.user?.mobileNumber,
      areaAndCity: order?.shop?.billingAddress?.area?.name + ', ' + order?.shop?.billingAddress?.area?.city?.name,
    };
  });

  return (
    <>
      <SimpleHeader name="Orders" parentName="Orders" />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader className="border-0">
            <h3 className="mb-0">Orders</h3>
          </CardHeader>
          <GridComponent dataSource={tableData} allowPaging={true} pageSettings={pageSettings} allowSorting={true}>
            <ColumnsDirective>
              <ColumnDirective field="number" headerText="Order Number" autoFit={true} />
              <ColumnDirective field="createdAt" headerText="Date" />
              <ColumnDirective field="shopkeeperMobileNumber" headerText="MobileNumber" />
              <ColumnDirective field="shop" headerText="Shop" />
              <ColumnDirective field="areaAndCity" headerText="Area, City" />
              <ColumnDirective field="currentStatus" headerText="Status" />
              <ColumnDirective field="paymentStatus" headerText="Payment Status" />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
          </GridComponent>
        </Card>
      </Container>
    </>
  );
};

export default Orders;
