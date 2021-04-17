import React from 'react';

// reactstrap components
import { Button, Card, CardBody, Form, Row, Col } from 'reactstrap';

import { useForm } from 'react-hook-form';

import { ErrorAlert, TextField } from 'components/atoms';
import { useSendOtpMutation } from 'generated/graphql';

const GenerateOtp: React.FunctionComponent = ({ mobileNumber, prevStage, nextStage }: any) => {
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
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Generate OTP</small>
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
              disabled
              defaultValue={mobileNumber}
              control={control}
            />
            <div className="text-center">
              <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
                Send
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <a className="text-light" href="#" onClick={() => prevStage()}>
            <small>Change Mobile Number</small>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default GenerateOtp;
