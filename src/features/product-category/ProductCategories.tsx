import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  PageSettingsModel,
} from '@syncfusion/ej2-react-treegrid';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';
import componentStyles from 'assets/theme/views/admin/tables';
import { SimpleHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { useProductCategoriesOfCompanyQuery } from 'generated/graphql';

const useStyles = makeStyles(componentStyles);
const useTableStyles = makeStyles(tableComponentStyles);

const ProductCategories: React.FunctionComponent = () => {
  const classes = { ...useStyles(), ...useTableStyles() };
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
      <SimpleHeader section="Product Catalog" subsection="Categories" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Product Categories"
            titleTypographyProps={{
              component: Box,
              marginBottom: '0!important',
              variant: 'h3',
            }}
          />
          <TreeGridComponent
            dataSource={gridData}
            treeColumnIndex={0}
            childMapping="subcategories"
            allowPaging={true}
            pageSettings={pageSettings}
          >
            <ColumnsDirective>
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
