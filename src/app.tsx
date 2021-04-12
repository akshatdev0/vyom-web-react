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
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Layout, AuthLayout, AdminLayout, CompanyOwnerLayout } from 'layouts';
import { useAuthState, Role } from 'features/auth';

const AuthSwitch = (
  <Switch>
    <Route path={Layout.Auth} render={() => <AuthLayout />} />
    <Redirect from="/" to={Layout.Auth + '/sign-in'} />
  </Switch>
);

const AdminSwitch = (
  <Switch>
    <Route path={Layout.Admin} render={(props) => <AdminLayout {...props} />} />
    <Redirect from="/" to={Layout.Admin + '/index'} />
  </Switch>
);

const CompanyOwnerSwitch = (
  <Switch>
    <Route path={Layout.CompanyOwner} render={(props) => <CompanyOwnerLayout {...props} />} />
    <Redirect from="/" to={Layout.CompanyOwner + '/index'} />
  </Switch>
);

const App: React.FunctionComponent = () => {
  const { isSignedIn, user } = useAuthState();

  let sw = AuthSwitch;
  if (isSignedIn) {
    if (user?.role?.type) {
      switch (user.role.type) {
        case Role.PlatformMasterAdmin:
          sw = AdminSwitch;
          break;

        case Role.CompanyOwner:
          sw = CompanyOwnerSwitch;
          break;

        default:
          break;
      }
    }
  }

  return <BrowserRouter>{sw}</BrowserRouter>;
};

export default App;