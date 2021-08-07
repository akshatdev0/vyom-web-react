import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Role, getAuthData, useAuthState } from 'features/auth';
import { useRouteDebugger } from 'hooks';
import { Layouts, AuthLayout, AdminLayout, CompanyOwnerLayout } from 'layouts';

const AuthSwitch = (
  <Switch>
    <Route path={Layouts.AUTH.path} render={() => <AuthLayout />} />
    <Redirect from="/" to={Layouts.AUTH.path + '/sign-in'} />
  </Switch>
);

const AdminSwitch = (
  <Switch>
    <Route path={Layouts.ADMIN.path} render={() => <AdminLayout />} />
    <Redirect from="/" to={Layouts.ADMIN.path + '/index'} />
  </Switch>
);

const CompanyOwnerSwitch = (
  <Switch>
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
