import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';
import componentStyles from 'assets/theme/views/admin/container';
import { ViewHeader } from 'components/molecules';

const useStyles = makeStyles(componentStyles);
const useTableStyles = makeStyles(tableComponentStyles);

const NewProduct: React.FunctionComponent = () => {
  const classes = { ...useStyles(), ...useTableStyles() };
  // const { user: sessionUser } = useAuthState();
  // const companyID = sessionUser?.companyOwner?.company?.id;
  // const productsQuery = useProductsOfCompanyQuery({ companyID: companyID || '' }, { enabled: !!companyID });
  // const { data: { products = [] } = {} } = productsQuery;

  return (
    <>
      <ViewHeader title="Add a New Product" breadcrumbs={['Product Catalog', 'New Product']} />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardContent></CardContent>
        </Card>
      </Container>
    </>
  );
};

export default NewProduct;
