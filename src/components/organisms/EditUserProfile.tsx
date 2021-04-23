import React from 'react';

import { UseMutationResult } from 'react-query';
// reactstrap components
import { Button, Card, CardHeader, CardBody, Form, Row, Col, CardFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import * as v from 'validations';
import { ErrorAlert } from 'components/atoms';
import { AccountInformation, PersonalInformation } from 'components/molecules';
import { Maybe, User } from 'types';
import useFillForm from 'hooks/useFillForm';
import { UpdateUserMutation, UpdateUserMutationVariables } from 'generated/graphql';

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

const EditUserProfile: React.FunctionComponent<Props> = ({ mutation, user }: Props) => {
  const { control, handleSubmit, setValue, formState } = useForm({
    resolver: zodResolver(schema),
  });
  useFillForm(setValue, user);
  const { mutate, isLoading, isError, error } = mutation;
  const { isDirty } = formState;
  const onSubmit = async (variables: UpdateUserMutationVariables) => {
    mutate(variables);
  };

  return (
    <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
      <Card>
        <CardHeader>
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">Edit profile</h3>
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
            <Button className="my-2" color="primary" type="submit" disabled={isLoading || !isDirty}>
              Save
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Form>
  );
};

export default EditUserProfile;
