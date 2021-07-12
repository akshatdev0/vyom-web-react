/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

import { Button, Card, CardBody, Form, Container, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import * as v from 'validations';
import { ErrorAlert, TextField } from 'components/atoms';
import { AuthHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { useSignInMutation } from 'generated/graphql';

const schema = z.object({
  mobileNumber: v.mobileNumber(),
  password: v.password(),
});

type FormValues = z.infer<typeof schema>;

const Login: React.FunctionComponent = () => {
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
        lead="Use these awesome forms to sign in or create new account in your project for free."
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign in with credentials</small>
                </div>
                <ErrorAlert isError={isError} error={error} />
                <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                  <TextField
                    name="mobileNumber"
                    type="tel"
                    labelType="prepend-icon"
                    labelValue="ni ni-mobile-button"
                    placeholder="Mobile Number"
                    autoComplete="username"
                    control={control}
                  />
                  <TextField
                    name="password"
                    type="password"
                    labelType="prepend-icon"
                    labelValue="ni ni-lock-circle-open"
                    placeholder="Password"
                    autoComplete="current-password"
                    control={control}
                  />
                  <div className="text-center">
                    <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                  <small>Forgot password?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <Link className="text-light" to="/auth/sign-up">
                  <small>Create new account</small>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
