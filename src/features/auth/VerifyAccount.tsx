import React from 'react';

// reactstrap components
import { Button, Card, CardBody, Form, Row, Col } from 'reactstrap';

import { useForm } from 'react-hook-form';

import { ErrorAlert, TextField } from 'components/atoms';
import { useAuthState } from './auth';
import { Stage } from 'views/SignUp';
import { useSendOtpMutation, useVerifyMutation } from 'generated/graphql';

type FormValues = {
  token: string;
};

const VerifyAccount: React.FunctionComponent = ({ mobileNumber, nextStage, setStage }: any) => {
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
  const { control, handleSubmit } = useForm();
  const onSubmit = async (variables: FormValues) => verifyMutation.mutate({ mobileNumber, ...variables });

  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Enter OTP sent to '{mobileNumber}'</small>
          </div>
          <ErrorAlert isError={isError} error={error} />
          <Form role="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="token"
              type="number"
              labelType="prepend-icon"
              labelValue="ni ni-mobile-button"
              placeholder="OTP (One Time Password)"
              autoComplete="one-time-code"
              control={control}
            />
            <div className="d-flex flex-row justify-content-between">
              <Button
                className="my-2"
                color="secondary"
                onClick={() => sendOtpMutation.mutate({ mobileNumber })}
                disabled={isLoading}
              >
                Resend
              </Button>
              <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
                Next
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <a className="text-light" href="#" onClick={() => setStage(Stage.ACCOUNT_CREATION)}>
            <small>Change Mobile Number</small>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default VerifyAccount;