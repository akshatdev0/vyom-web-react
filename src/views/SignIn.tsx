import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lock from '@material-ui/icons/Lock';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/auth/login';
import { ErrorAlert, TextField } from 'components/atoms';
import { AuthHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { useSignInMutation } from 'generated/graphql';
import * as v from 'validations';

const schema = z.object({
  mobileNumber: v.mobileNumber(),
  password: v.password(),
});

type FormValues = z.infer<typeof schema>;

const useStyles = makeStyles(componentStyles);

const Login: React.FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { signIn } = useAuthState();
  const { mutate, isLoading, isError, error } = useSignInMutation({
    onSuccess: async (data) => signIn(data.signIn),
  });
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (variables: FormValues) => mutate(variables);

  return (
    <>
      <AuthHeader
        title="Welcome!"
        description="Use these awesome forms to sign in or create new account in your project for free."
      />
      <Container component={Box} classes={{ root: classes.containerRoot }}>
        <Grid container classes={{ root: classes.gridContainerRoot }}>
          <Grid item xs={12} lg={6} md={8}>
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
                    Sign in with credentials
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
                    control={control}
                  />
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Password"
                    prepend={<Lock />}
                    autoComplete="current-password"
                    control={control}
                  />
                  <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                    <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                      Sign in
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
            <Grid container component={Box} marginTop="1rem">
              <Grid item xs={6} component={Box} textAlign="left">
                <Link className={classes.footerLinks} to="/auth/sign-up">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={6} component={Box} textAlign="right">
                <Link className={classes.footerLinks} to="/auth/sign-up">
                  Create new account
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
