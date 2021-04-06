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

// reactstrap components
import { Button, Card, CardBody, Form, Row, Col } from 'reactstrap';
import TextField from 'components/atoms/TextField';
import { useSignInMutation } from 'generated/graphql';
import { useAuthState } from 'features/auth';

const Login: React.FunctionComponent = () => {
  const { signIn } = useAuthState();
  const { mutate } = useSignInMutation({
    onSuccess: async (payload) => {
      console.log(payload);
      signIn(payload);
    },
  });

  const handleClick = () => mutate({ mobileNumber: '8000000001', password: '8000000001' });

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <TextField
                name="mobile-number"
                type="tel"
                labelType="prepend-icon"
                labelValue="ni ni-mobile-button"
                placeholder="Mobile Number"
                autoComplete="username"
              />
              <TextField
                name="password"
                type="password"
                labelType="prepend-icon"
                labelValue="ni ni-lock-circle-open"
                placeholder="Password"
                autoComplete="current-password"
              />
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={handleClick}>
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
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
