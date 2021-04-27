/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { UseMutationResult } from 'react-query';
// reactstrap components
import { Container, Button, Card, CardHeader, CardBody, Form, Row, Col, CardFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import * as v from 'validations';
import { ErrorAlert } from 'components/atoms';
import { ProfileHeader, UserProfileCard } from 'components/molecules';
import { Maybe, User } from 'types';
import { useFillForm } from 'hooks';
import { UpdateUserMutation, UpdateUserMutationVariables } from 'generated/graphql';
import AccountInformation from './AccountInformation';
import PersonalInformation from './PersonalInformation';

type Props = {
  mutation: UseMutationResult<UpdateUserMutation, unknown, UpdateUserMutationVariables, unknown>;
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const schema = z.object({
  id: z.string().nonempty(),
  firstName: v.firstName,
  lastName: v.lastName,
  gender: v.gender,
  dateOfBirth: z.string().optional(),
  mobileNumber: z.undefined(),
  alternateMobileNumber: v.alternateMobileNumber,
  email: v.email,
});

const UserProfile: React.FunctionComponent<Props> = ({ mutation, user }: Props) => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useFillForm(setValue, user);
  const { mutate, isLoading, isError, error } = mutation;
  const onSubmit = async (variables: UpdateUserMutationVariables) => {
    mutate(variables);
  };

  return (
    <>
      <ProfileHeader user={user} />
      <Container className="mt-4" fluid>
        <Row>
          <Col className="order-xl-2" xl="4">
            <UserProfileCard user={user} />
          </Col>
          <Col className="order-xl-1" xl="8">
            <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
              <Card>
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Profile</h3>
                    </Col>
                    {/* <Col className="text-right" xs="4">
                    <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      Settings
                    </Button>
                  </Col> */}
                  </Row>
                </CardHeader>
                <CardBody>
                  <ErrorAlert isError={isError} error={error} />
                  <AccountInformation control={control} />
                  <hr className="my-4" />
                  <PersonalInformation control={control} />
                  {/* <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">Other Information</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label className="form-control-label">About Me</label>
                      <Input placeholder="A few words about you ..." rows="4" type="textarea" />
                    </FormGroup>
                  </div> */}
                </CardBody>
                <CardFooter>
                  <div className="text-center">
                    <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
                      Save
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;