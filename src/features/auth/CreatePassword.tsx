import React from 'react';

// reactstrap components
import { Button, Card, CardBody, Form } from 'reactstrap';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { ErrorAlert, TextField } from 'components/atoms';
import { useCreatePasswordMutation } from 'generated/graphql';
import { useAuthState } from './auth';

type FormValues = {
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    password: z.string().nonempty({ message: 'Please enter a password!' }),
    confirmPassword: z.string().nonempty({ message: 'Please confirm your password!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match!',
    path: ['confirmPassword'],
  });

const CreatePassword: React.FunctionComponent = () => {
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
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Sign up using mobile number</small>
          </div>
          <ErrorAlert isError={isError} error={error} />
          <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
            <TextField
              name="password"
              type="password"
              labelType="prepend-icon"
              labelValue="ni ni-lock-circle-open"
              placeholder="Password"
              autoComplete="new-password"
              control={control}
            />
            <TextField
              name="confirmPassword"
              type="password"
              labelType="prepend-icon"
              labelValue="ni ni-lock-circle-open"
              placeholder="Repeat Password"
              autoComplete="new-password"
              control={control}
            />
            <div className="text-center">
              <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
                Finish
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default CreatePassword;
