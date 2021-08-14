import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Internationalization } from '@syncfusion/ej2-base';
import { Column } from 'react-table';

import componentStyles from 'assets/theme/views/admin/tables';
import { Table } from 'components/atoms';
import { SimpleHeader } from 'components/molecules';
import { OrdersOfCompanyQuery, OrdersOfCompanyQueryVariables, useOrdersOfCompanyQuery } from 'generated/graphql';
import { useTableQueryVariables } from 'hooks';
import { Unarray } from 'types';

type Order = NonNullable<Unarray<OrdersOfCompanyQuery['orders']>>;

const intl = new Internationalization();
const dateFormat = intl.getDateFormat({ skeleton: 'medium', type: 'dateTime' });

const columns: Array<Column<Order>> = [
  {
    Header: 'Order Number',
    accessor: 'number',
  },
  {
    id: 'created_at',
    Header: 'Date',
    accessor: (row) => dateFormat(new Date(row.created_at)),
  },
  {
    id: 'shopkeeperMobilenumber',
    Header: 'Mobile Number',
    accessor: (row) => row.shop?.shopkeepers?.[0]?.user?.mobileNumber,
    // TODO: Disable sorting. Enabled to showcase ErrorOverlay!
    // disableSortBy: true,
  },
  {
    id: 'shop.name',
    Header: 'Shop',
    accessor: (row) => row.shop?.name,
  },
  {
    id: 'shop.billingAddress.area.name',
    Header: 'Area, City',
    accessor: (row) => row?.shop?.billingAddress?.area?.name + ', ' + row?.shop?.billingAddress?.area?.city?.name,
    disableSortBy: true,
  },
  {
    Header: 'Status',
    accessor: 'currentStatus',
  },
  {
    Header: 'Payment Status',
    accessor: 'paymentStatus',
  },
];

const useStyles = makeStyles(componentStyles);

const Orders: React.FunctionComponent = () => {
  const classes = useStyles();
  const { initialState, queryVariables, setQueryVariables } = useTableQueryVariables<
    OrdersOfCompanyQueryVariables,
    Order
  >({}, { sortBy: [{ id: 'number', desc: false }] });
  const [pageCount, setPageCount] = useState(0);
  const ordersQuery = useOrdersOfCompanyQuery(queryVariables, {
    onSuccess: ({ countOrders }) => {
      if (queryVariables.limit) {
        setPageCount(Math.ceil(countOrders / queryVariables.limit));
      }
    },
  });
  const { data: { countOrders, orders = [] } = {} } = ordersQuery;

  return (
    <>
      <SimpleHeader section="Orders" subsection="Orders" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Table<Order>
          title="Orders"
          columns={columns}
          isError={ordersQuery.isError}
          isLoading={ordersQuery.isLoading}
          data={orders}
          totalItems={countOrders}
          pageCount={pageCount}
          initialState={initialState}
          setQueryVariables={setQueryVariables}
        />
      </Container>
    </>
  );
};

export default Orders;
