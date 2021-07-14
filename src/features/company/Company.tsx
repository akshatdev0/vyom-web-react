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

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { useAuthState } from 'features/auth';
import { useCompanyQuery } from 'generated/graphql';

import CompanyDetails from './CompanyDetails';
import CompanyInformation from './CompanyInformation';
import CompanyRegisteredAddress from './CompanyRegisteredAddress';

const Company: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const { data: { company } = {} } = useCompanyQuery({ id: companyID || '' }, { enabled: !!companyID });

  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Company</h3>
                  </Col>
                  {/* <Col className="text-right" xs="4">
                    <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      Settings
                    </Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody>
                <CompanyInformation company={company} />
                <hr className="my-4" />
                <CompanyRegisteredAddress company={company} />
                <hr className="my-4" />
                <CompanyDetails company={company} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Company;
