import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DialpadIcon from '@material-ui/icons/Dialpad';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/auth/register';
import { ErrorAlert, TextField } from 'components/atoms';
import { useSendOtpMutation, useVerifyMutation } from 'generated/graphql';
import { useFillForm } from 'hooks';
import * as v from 'validations';
import { Stage } from 'views/SignUp';

import { useAuthState } from './auth';

const schema = z.object({
  mobileNumber: v.mobileNumber(),
  token: v.otp(),
});

type FormValues = z.infer<typeof schema>;

const useStyles = makeStyles(componentStyles);

const VerifyAccount: React.FunctionComponent = ({ mobileNumber, nextStage, setStage }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const { createSession } = useAuthState();
  const sendOtpMutation = useSendOtpMutation({
    onSuccess: (data) => {
      if (data?.sendOtp?.sent) {
        console.log(data);
      }
    },
  });
  const verifyMutation = useVerifyMutation({
    onSuccess: (data) => {
      if (data?.verify) {
        createSession(data.verify);
        nextStage();
      }
    },
  });
  const isLoading = sendOtpMutation.isLoading || verifyMutation.isLoading;
  const { isError, error } = verifyMutation;
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useFillForm(setValue, { mobileNumber });
  const onSubmit = async (variables: FormValues) => verifyMutation.mutate(variables);

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
              Enter OTP sent to '{mobileNumber}'
            </Box>
          </Box>
          <ErrorAlert isError={isError} error={error} />
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              name="token"
              type="number"
              placeholder="OTP (One Time Password)"
              prepend={<DialpadIcon />}
              autoComplete="one-time-code"
              control={control}
            />
            <Box display="flex" marginTop="1.5rem" marginBottom="1.5rem" justifyContent="space-between">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={isLoading}
                onClick={() => sendOtpMutation.mutate({ mobileNumber })}
              >
                Resend
              </Button>
              <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                Next
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
      <Grid container component={Box} marginTop="1rem">
        <Grid item xs={6} component={Box}>
          <a className={classes.footerLinks} href="#" onClick={() => setStage(Stage.ACCOUNT_CREATION)}>
            Change Mobile Number
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default VerifyAccount;
