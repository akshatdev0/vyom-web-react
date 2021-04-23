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

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

import { Maybe, User } from 'types';

type Props = {
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const ProfileHeader: React.FunctionComponent<Props> = ({ user }: Props) => {
  return (
    <>
      <div
        className="header d-flex align-items-center"
        style={{
          minHeight: '150px',
          backgroundImage: 'url("' + require('assets/img/theme/profile-cover.jpg').default + '")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />

        <Container className="" fluid>
          <Row>
            <Col md="8" lg="10">
              <h1 className="display-2 text-white">Hello {user?.firstName}</h1>
            </Col>
            {/* <Col md="4" lg="2">
              <Button
                className="float-md-right btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileHeader;
