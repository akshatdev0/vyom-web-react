import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/admin/profile';
import { ErrorAlert, QuillEditor } from 'components/atoms';
import { useSnackbar } from 'components/molecules';
import {
  CompanyQuery,
  useSetCompanyDetailMutation,
  useCreateCompanyDetailMutation,
  useUpdateCompanyDetailMutation,
} from 'generated/graphql';
import { useFillForm } from 'hooks';
import { Maybe } from 'types';

type Props = {
  company: Maybe<CompanyQuery['company']>;
};

const schema = z.object({
  returnPolicy: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const useStyles = makeStyles(componentStyles);

const CompanyDetails: React.FunctionComponent<Props> = ({ company }: Props) => {
  const classes = useStyles();
  const showSnackbar = useSnackbar();

  const setMutation = useSetCompanyDetailMutation({
    onSuccess: async () => {
      showSnackbar({ severity: 'success', title: 'Company', message: 'Details Saved!' });
    },
  });

  const createMutation = useCreateCompanyDetailMutation({
    onSuccess: async (data) => {
      const companyDetail = data.createCompanyDetail?.companyDetail;
      if (company?.id && companyDetail?.id) {
        setMutation.mutate({ id: company?.id, companyDetail: companyDetail?.id });
      }
    },
  });

  const updateMutation = useUpdateCompanyDetailMutation({
    onSuccess: async () => {
      showSnackbar({ severity: 'success', title: 'Company', message: 'Details Saved!' });
    },
  });

  const { control, handleSubmit, setValue } = useForm();
  useFillForm(setValue, company?.companyDetail);
  const onSubmit = async (variables: FormValues) => {
    if (company?.companyDetail) {
      updateMutation.mutate({ id: company.id, ...variables });
    } else {
      createMutation.mutate(variables);
    }
  };

  const isLoading = createMutation.isLoading || setMutation.isLoading || updateMutation.isLoading;
  const isError = createMutation.isError || setMutation.isError || updateMutation.isError;
  const error = createMutation.error || setMutation.error || updateMutation.error;

  return (
    <>
      <form role="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <ErrorAlert isError={isError} error={error} />
        <Box paddingTop=".25rem" paddingBottom=".25rem" marginBottom="1.5rem!important">
          <Typography variant="h6" classes={{ root: classes.typographyRootH6 }}>
            Company Details
          </Typography>
        </Box>
        <div>
          <Grid container>
            <Grid item lg={12}>
              <QuillEditor
                name="returnPolicy"
                labelValue="Return Policy"
                placeholder="Your company return policy"
                control={control}
              />
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

export default CompanyDetails;
