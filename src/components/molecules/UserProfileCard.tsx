import React from 'react';
import { Card, CardHeader, CardBody, CardImg, Row, Col } from 'reactstrap';
import { parse, differenceInCalendarYears } from 'date-fns';

import { Maybe, User } from 'types';

type Props = {
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const UserProfileCard: React.FunctionComponent<Props> = ({ user }: Props) => {
  const { firstName, lastName, dateOfBirth, gender, mobileNumber, alternateMobileNumber, email } = user || {};
  const age =
    dateOfBirth && differenceInCalendarYears(new Date(), parse(dateOfBirth, 'yyyy-MM-dd', new Date())) + ' yrs';
  const genderAndAge = [gender && (gender === 'MALE' ? 'Male' : 'Female'), age].filter(Boolean).join(', ');
  const mobileNumbers = [mobileNumber, alternateMobileNumber].filter(Boolean).join(', ');

  return (
    <Card className="card-profile">
      <CardImg alt="..." src={require('assets/img/theme/img-1-1000x600.jpg').default} top />
      <Row className="justify-content-center">
        <Col className="order-lg-2" lg="3">
          <div className="card-profile-image">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img alt="..." className="rounded-circle" src={require('assets/img/theme/team-4.jpg').default} />
            </a>
          </div>
        </Col>
      </Row>
      <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-6">
        {' '}
        {/* text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4 */}
        {/* <div className="d-flex justify-content-between">
            <Button className="mr-4" color="info" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
              Connect
            </Button>
            <Button
              className="float-right"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="sm"
            >
              Message
            </Button>
          </div> */}
      </CardHeader>
      <CardBody className="pt-0">
        {/* <Row>
            <div className="col">
              <div className="card-profile-stats d-flex justify-content-center">
                <div>
                  <span className="heading">22</span>
                  <span className="description">Friends</span>
                </div>
                <div>
                  <span className="heading">10</span>
                  <span className="description">Photos</span>
                </div>
                <div>
                  <span className="heading">89</span>
                  <span className="description">Comments</span>
                </div>
              </div>
            </div>
          </Row> */}
        <div className="text-center">
          <h3>
            {firstName} {lastName}
          </h3>
          {genderAndAge && (
            <div className="h5 mt-3">
              <span className="font-weight-light">{genderAndAge}</span>
            </div>
          )}
          {/* <div className="h5 font-weight-300">
              <i className="ni location_pin mr-2" />
              Bucharest, Romania
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Solution Manager - Creative Tim Officer
            </div>
            <div>
              <i className="ni education_hat mr-2" />
              University of Computer Science
            </div> */}
          {mobileNumbers && (
            <div className="h5 mt-3">
              <i className="ni ni-mobile-button mr-2" />
              {mobileNumbers}
            </div>
          )}
          {email && (
            <div className="h5 mt-3">
              <i className="ni ni-email-83 mr-2" />
              {email}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default UserProfileCard;
