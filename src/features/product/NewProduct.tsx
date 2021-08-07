import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';
import componentStyles from 'assets/theme/views/admin/tables';
import { SimpleHeader } from 'components/molecules';

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
      <SimpleHeader section="Product Catalog" subsection="New Product" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="New Product"
            titleTypographyProps={{
              component: Box,
              marginBottom: '0!important',
              variant: 'h3',
            }}
          />
          <CardContent></CardContent>
        </Card>
      </Container>
    </>
  );
};

export default NewProduct;
