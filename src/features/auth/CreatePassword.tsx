import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lock from '@material-ui/icons/Lock';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import componentStyles from 'assets/theme/views/auth/register';
import { ErrorAlert, TextField } from 'components/atoms';
import { useCreatePasswordMutation } from 'generated/graphql';
import * as v from 'validations';

import { useAuthState } from './auth';

const schema = v.createPassword();

const valueSchema = z.object({
  password: v.newPassword(),
});
type FormValues = z.infer<typeof valueSchema>;

const useStyles = makeStyles(componentStyles);

const CreatePassword: React.FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { signIn } = useAuthState();
  const { mutate, isLoading, isError, error } = useCreatePasswordMutation({
    onSuccess: (data) => {
      if (data?.createPassword) {
        signIn(data.createPassword);
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
              name="password"
              type="password"
              placeholder="Password"
              prepend={<Lock />}
              autoComplete="new-password"
              control={control}
            />
            <TextField
              name="confirmPassword"
              type="password"
              placeholder="Repeat Password"
              prepend={<Lock />}
              autoComplete="new-password"
              control={control}
            />
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                Finish
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default CreatePassword;
