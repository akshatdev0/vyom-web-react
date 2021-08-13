import React from 'react';

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
    id: 'date',
    Header: 'Date',
    accessor: (row) => dateFormat(new Date(row.created_at)),
  },
  {
    id: 'shopkeeperMobilenumber',
    Header: 'Mobile Number',
    accessor: (row) => row.shop?.shopkeepers?.[0]?.user?.mobileNumber,
  },
  {
    id: 'shop',
    Header: 'Shop',
    accessor: (row) => row.shop?.name,
  },
  {
    id: 'areaAndCity',
    Header: 'Area, City',
    accessor: (row) => row?.shop?.billingAddress?.area?.name + ', ' + row?.shop?.billingAddress?.area?.city?.name,
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
  const ordersQuery = useOrdersOfCompanyQuery(queryVariables);
  const { data: { countOrders, orders = [] } = {} } = ordersQuery;

  return (
    <>
      <SimpleHeader section="Orders" subsection="Orders" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Table<Order>
          title="Orders"
          columns={columns}
          data={orders}
          totalItems={countOrders}
          initialState={initialState}
          setQueryVariables={setQueryVariables}
        />
      </Container>
    </>
  );
};

export default Orders;
