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
import { Container, Row, Col } from 'reactstrap';

import { ProfileHeader, UserProfileCard } from 'components/molecules';
import { EditUserProfile } from 'components/organisms';
import { Maybe, User } from 'types';
import { UpdateUserMutation, UpdateUserMutationVariables } from 'generated/graphql';

type Props = {
  mutation: UseMutationResult<UpdateUserMutation, unknown, UpdateUserMutationVariables, unknown>;
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const UserProfile: React.FunctionComponent<Props> = (props: Props) => (
  <>
    <ProfileHeader user={props.user} />
    <Container className="mt-4" fluid>
      <Row>
        <Col className="order-xl-2" xl="4">
          <UserProfileCard user={props.user} />
        </Col>
        <Col className="order-xl-1" xl="8">
          <EditUserProfile {...props} />
        </Col>
      </Row>
    </Container>
  </>
);

export default UserProfile;
