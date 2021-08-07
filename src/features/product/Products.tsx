import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
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
import { useAuthState } from 'features/auth';
import { useProductsOfCompanyQuery } from 'generated/graphql';

const useStyles = makeStyles(componentStyles);
const useTableStyles = makeStyles(tableComponentStyles);

const Products: React.FunctionComponent = () => {
  const classes = { ...useStyles(), ...useTableStyles() };
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
      <SimpleHeader section="Product Catalog" subsection="Products" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Products"
            titleTypographyProps={{
              component: Box,
              marginBottom: '0!important',
              variant: 'h3',
            }}
          />
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
