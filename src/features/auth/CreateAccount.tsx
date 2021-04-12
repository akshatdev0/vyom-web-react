import React from 'react';

// reactstrap components
import { Button, Card, CardBody, Form, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { ErrorAlert, TextField } from 'components/atoms';
import { mobileNumberValidator } from 'core/utils';
import { useSignUpMutation } from 'generated/graphql';

type FormValues = {
  mobileNumber: string;
};

const schema = z.object({
  mobileNumber: z.string().nonempty({ message: 'Please enter your mobile number!' }).refine(mobileNumberValidator, {
    message: 'Please enter a valid mobile number!',
  }),
});

const CreateAccount: React.FunctionComponent = ({ mobileNumber, setMobileNumber, nextStage }: any) => {
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
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Sign up using mobile number</small>
          </div>
          <ErrorAlert isError={isError} error={error} />
          <Form role="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="mobileNumber"
              type="tel"
              labelType="prepend-icon"
              labelValue="ni ni-mobile-button"
              placeholder="Mobile Number"
              autoComplete="username"
              defaultValue={mobileNumber}
              control={control}
            />
            <div className="text-center">
              <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
                Next
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <Link className="text-light" to="/auth/sign-in">
            <small>Sign in instead</small>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default CreateAccount;
