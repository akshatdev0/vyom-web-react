import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/admin/profile';
import { useReactQueryClient } from 'client';
import { ErrorAlert, Select, TextField } from 'components/atoms';
import { useSnackbar } from 'components/molecules';
import { produce } from 'core/utils';
import { useAuthState } from 'features/auth';
import {
  CompanyOwnerLayoutQuery,
  CompanyQuery,
  useCompanyBusinessTypesQuery,
  useUpdateCompanyInformationMutation,
} from 'generated/graphql';
import { useFillForm } from 'hooks';
import { Maybe } from 'types';
import * as v from 'validations';

type Props = {
  company: Maybe<CompanyQuery['company']>;
};

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

type FormValues = z.infer<typeof schema>;

const paths = ['id', 'name', 'registrationNumber', 'companyType.id', 'businessType.id', 'sku'];

const useStyles = makeStyles(componentStyles);

const CompanyInformation: React.FunctionComponent<Props> = ({ company }: Props) => {
  const classes = useStyles();
  const { data: { companyTypes, businessTypes } = {} } = useCompanyBusinessTypesQuery();

  const { user: sessionUser } = useAuthState();
  const companyOwnerID = sessionUser?.companyOwner?.id;
  const reactQueryClient = useReactQueryClient();
  const showSnackbar = useSnackbar();
  const { mutate, isLoading, isError, error } = useUpdateCompanyInformationMutation({
    onSuccess: async (data) => {
      const updatedCompany = data.updateCompany?.company;
      reactQueryClient.setQueryData<CompanyOwnerLayoutQuery>(
        ['CompanyOwnerLayout', { id: companyOwnerID }],
        (oldData) =>
          produce(oldData, (draft) => {
            if (draft?.companyOwner) {
              draft.companyOwner.company = updatedCompany;
            }
          }),
      );
      reactQueryClient.setQueryData<CompanyQuery>(['Company', { id: company?.id }], (oldData) =>
        produce(oldData, (draft) => {
          if (updatedCompany && draft?.company) {
            draft.company.name = updatedCompany.name;
            draft.company.companyType = updatedCompany.companyType;
            draft.company.businessType = updatedCompany.businessType;
            draft.company.sku = updatedCompany.sku;
          }
        }),
      );
      showSnackbar({ severity: 'success', title: 'Company', message: 'Successfully saved!' });
    },
  });

  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useFillForm(setValue, company, paths);
  const onSubmit = async (variables: FormValues) => {
    mutate({
      id: variables.id,
      name: variables.name,
      companyType: variables.companyType.id,
      businessType: variables.businessType.id,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ErrorAlert isError={isError} error={error} />
        <Box paddingTop=".25rem" paddingBottom=".25rem" marginBottom="1.5rem!important">
          <Typography variant="h6" classes={{ root: classes.typographyRootH6 }}>
            Company Information
          </Typography>
        </Box>
        <div>
          <Grid container>
            <Grid item lg={8}>
              <TextField
                name="name"
                type="text"
                labelValue="Company Name"
                placeholder="Name of your Company"
                control={control}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                name="registrationNumber"
                type="text"
                labelValue="Registration Number"
                placeholder="Registration Number"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={4}>
              <Select
                name="companyType.id"
                labelValue="Company Type"
                control={control}
                options={companyTypes?.map((companyType) => ({ value: companyType?.id, label: companyType?.name }))}
              />
            </Grid>
            <Grid item lg={4}>
              <Select
                name="businessType.id"
                labelValue="Business Type"
                control={control}
                options={businessTypes?.map((businessType) => ({ value: businessType?.id, label: businessType?.name }))}
              />
            </Grid>
            <Grid item lg={2}>
              <TextField name="sku" type="text" labelValue="Marka" placeholder="Marka" control={control} disabled />
            </Grid>
          </Grid>
        </div>
        <CardActions classes={{ root: classes.cardActionsRoot }}>
          <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
            Save
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default CompanyInformation;
