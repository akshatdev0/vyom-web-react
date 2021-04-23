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
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

function UserFooter() {
  return (
    <>
      <Container fluid>
        <footer className="footer pt-0">
          <Row className="align-items-center justify-content-lg-between">
            <Col lg="6">
              <div className="copyright text-center text-lg-left text-muted">
                © {new Date().getFullYear()}{' '}
                <a className="font-weight-bold ml-1" href="#" target="_blank">
                  Vyom
                </a>
              </div>
            </Col>
            <Col lg="6">
              <Nav className="nav-footer justify-content-center justify-content-lg-end">
                <NavItem>
                  <NavLink href="#" target="_blank">
                    Vyom
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" target="_blank">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" target="_blank">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" target="_blank">
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default UserFooter;
