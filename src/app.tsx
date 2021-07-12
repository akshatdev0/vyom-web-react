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

import { Layouts, ProLayout, AuthLayout, AdminLayout, CompanyOwnerLayout } from 'layouts';
import { Role, getAuthData, useAuthState } from 'features/auth';
import { useRouteDebugger } from 'hooks';

const AuthSwitch = (
  <Switch>
    <Route path={Layouts.PRO.path} render={() => <ProLayout />} />
    <Route path={Layouts.AUTH.path} render={() => <AuthLayout />} />
    <Redirect from="/" to={Layouts.AUTH.path + '/sign-in'} />
  </Switch>
);

const AdminSwitch = (
  <Switch>
    <Route path={Layouts.PRO.path} render={() => <ProLayout />} />
    <Route path={Layouts.ADMIN.path} render={() => <AdminLayout />} />
    <Redirect from="/" to={Layouts.ADMIN.path + '/index'} />
  </Switch>
);

const CompanyOwnerSwitch = (
  <Switch>
    <Route path={Layouts.PRO.path} render={() => <ProLayout />} />
    <Route path={Layouts.COMPANY_OWNER.path} render={() => <CompanyOwnerLayout />} />
    <Redirect from="/" to={Layouts.COMPANY_OWNER.path + '/index'} />
  </Switch>
);

const Switcher: React.FunctionComponent = () => {
  useRouteDebugger();
  const authState = useAuthState();
  const { isSignedIn, user } = getAuthData();

  let sw = AuthSwitch;
  if (isSignedIn || authState.isSignedIn) {
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
  return sw;
};

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switcher />
    </BrowserRouter>
  );
};

export default App;
