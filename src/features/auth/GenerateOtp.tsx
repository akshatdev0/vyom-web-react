import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useForm } from 'react-hook-form';

import componentStyles from 'assets/theme/views/auth/register';
import { ErrorAlert, TextField } from 'components/atoms';
import { useSendOtpMutation } from 'generated/graphql';

const useStyles = makeStyles(componentStyles);

const GenerateOtp: React.FunctionComponent = ({ mobileNumber, prevStage, nextStage }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const { mutate, isLoading, isError, error } = useSendOtpMutation({
    onSuccess: (data) => {
      if (data?.sendOtp?.sent) {
        console.log(data);
        nextStage();
      }
    },
  });
  const { control, handleSubmit } = useForm();
  const onSubmit = async () => mutate({ mobileNumber });

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
              Generate OTP
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
              disabled
              defaultValue={mobileNumber}
              control={control}
            />
            <div className="text-center">
              <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                Send
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Grid container component={Box} marginTop="1rem">
        <Grid item xs={6} component={Box}>
          <a className={classes.footerLinks} href="#" onClick={() => prevStage()}>
            Change Mobile Number
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default GenerateOtp;
