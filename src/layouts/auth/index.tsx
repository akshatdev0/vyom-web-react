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
import React, { useEffect, useRef, RefObject } from 'react';
import { useLocation, Switch, Redirect } from 'react-router-dom';

// core components
import { getRoutes } from 'core/routing';
import { AuthTopbar, AuthFooter } from 'components/molecules';
import { Layouts } from 'layouts';
import routes from 'routes';

const AuthLayout: React.FunctionComponent = () => {
  const location = useLocation();
  const mainContentRef: RefObject<HTMLDivElement> = useRef({}) as RefObject<HTMLDivElement>;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainContentRef && mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
    document.body.classList.add('bg-default');
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove('bg-default');
    };
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainContentRef && mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [location]);

  return (
    <>
      <div className="main-content" ref={mainContentRef}>
        <AuthTopbar />
        <Switch>
          {getRoutes(Layouts.AUTH, routes)}
          <Redirect from="*" to="/auth/sign-in" />
        </Switch>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
