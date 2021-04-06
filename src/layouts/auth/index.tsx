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
import React, { useRef, RefObject } from 'react';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import AuthTopbar from 'components/organisms/AuthTopbar';
import AuthFooter from 'components/organisms/AuthFooter';
import { RouteParams } from 'types';
import routes from './routes';

const AuthLayout: React.FunctionComponent = () => {
  const mainContent: RefObject<HTMLDivElement> = useRef({}) as RefObject<HTMLDivElement>;
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add('bg-default');
    return () => {
      document.body.classList.remove('bg-default');
    };
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainContent && mainContent.current) {
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  const getRoutes = (routes: RouteParams[]) => {
    return routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} />);
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthTopbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-default" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to={'/login'} />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
