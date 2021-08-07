import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/auth/register';
import { ErrorAlert, TextField } from 'components/atoms';
import { useSignUpMutation } from 'generated/graphql';
import * as v from 'validations';

const schema = z.object({
  mobileNumber: v.mobileNumber(),
});

type FormValues = z.infer<typeof schema>;

const useStyles = makeStyles(componentStyles);

const CreateAccount: React.FunctionComponent = ({ mobileNumber, setMobileNumber, nextStage }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const { mutate, isLoading, isError, error } = useSignUpMutation({
    onSuccess: (data, variables) => {
      if (data?.signUp?.ok) {
        setMobileNumber(variables.mobileNumber);
        nextStage();
      }
    },
  });
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (variables: FormValues) => mutate(variables);

  return (
    <>
      <Card classes={{ root: classes.cardRoot }}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Box
            color={theme.palette.gray[600]}
            textAlign="center"
            marginBottom="1.5rem"
            marginTop=".5rem"
            fontSize="1rem"
          >
            <Box fontSize="80%" fontWeight="400" component="small">
              Sign up using mobile number
            </Box>
          </Box>
          <ErrorAlert isError={isError} error={error} />
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              name="mobileNumber"
              type="tel"
              placeholder="Mobile Number"
              prepend={<PhoneIphoneIcon />}
              autoComplete="username"
              defaultValue={mobileNumber}
              control={control}
            />
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                Next
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
      <Grid container component={Box} marginTop="1rem">
        <Grid item xs={6} component={Box}>
          <Link className={classes.footerLinks} to="/auth/sign-in">
            Sign in instead
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateAccount;
