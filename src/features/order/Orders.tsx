import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
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

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';
import componentStyles from 'assets/theme/views/admin/tables';
import { SimpleHeader } from 'components/molecules';
import { useOrdersOfCompanyQuery } from 'generated/graphql';

const useStyles = makeStyles(componentStyles);
const useTableStyles = makeStyles(tableComponentStyles);

const Orders: React.FunctionComponent = () => {
  const classes = { ...useStyles(), ...useTableStyles() };
  const ordersQuery = useOrdersOfCompanyQuery();
  const { data: { orders = [] } = {} } = ordersQuery;
  const pageSettings: PageSettingsModel = { pageSize: 10 };

  const intl = new Internationalization();
  const dateFormat = intl.getDateFormat({ skeleton: 'medium', type: 'dateTime' });

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
      <SimpleHeader section="Orders" subsection="Orders" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Orders"
            titleTypographyProps={{
              component: Box,
              marginBottom: '0!important',
              variant: 'h3',
            }}
          />
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
