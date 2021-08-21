import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/admin/profile';
import { Select, TextField, QuillEditor } from 'components/atoms';
// import { useSnackbar } from 'components/molecules';
// import { produce } from 'core/utils';
// import { useAuthState } from 'features/auth';
// import {
//   CompanyOwnerLayoutQuery,
//   CompanyQuery,
//   useCompanyBusinessTypesQuery,
//   useUpdateCompanyInformationMutation,
// } from 'generated/graphql';
// import { useFillForm } from 'hooks';
import * as v from 'validations';

const schema = z.object({
  id: v.id(),
  name: v.companyName(),
  registrationNumber: z.string().optional(),
  companyType: z.object({
    id: v.selected(),
  }),
  businessType: z.object({
    id: v.selected(),
  }),
  sku: z.string(),
});

const useStyles = makeStyles(componentStyles);

const InventoryPricingForm: React.FunctionComponent = () => {
  const classes = useStyles();

  const { control } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form noValidate>
        {/* <ErrorAlert isError={isError} error={error} /> */}
        <div>
          <Grid container>
            <Grid item lg={8}>
              <Select name="unit.id" labelValue="Product Unit" control={control} />
            </Grid>
            <Grid item lg={4}>
              <TextField
                name="sku"
                type="text"
                labelValue="SKU"
                placeholder="Stock Keeping Unit of the Product"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6}>
              <Select name="productCategory.id" labelValue="Category" control={control} />
            </Grid>
            <Grid item lg={6}>
              <Select name="productSubcategory.id" labelValue="Subcategory" control={control} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={4}>
              <TextField
                name="brandName"
                type="text"
                labelValue="Brand Name"
                placeholder="Name of the Brand"
                control={control}
              />
            </Grid>
            <Grid item lg={8}>
              <TextField
                name="description"
                type="text"
                labelValue="Short Description"
                placeholder="Describe the Product briefly..."
                control={control}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12}>
              <QuillEditor
                name="longDescription"
                labelValue="Long Description"
                placeholder="Describe the Product in detail..."
                control={control}
              />
            </Grid>
          </Grid>
        </div>
        <CardActions classes={{ root: classes.cardActionsRoot }}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default InventoryPricingForm;
