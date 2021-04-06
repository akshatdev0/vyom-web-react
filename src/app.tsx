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

import { Layout, AuthLayout, AdminLayout } from 'layouts';
import { useAuthState } from 'features/auth';

const AuthRouter = (
  <BrowserRouter basename={Layout.Auth}>
    <Switch>
      <Route path="/" render={() => <AuthLayout />} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
);

const AdminRouter = (
  <BrowserRouter basename={Layout.Admin}>
    <Switch>
      <Route path="/" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>
);

const App: React.FunctionComponent = () => {
  const { isSignedIn } = useAuthState();

  if (isSignedIn) {
    return AdminRouter;
  } else {
    return AuthRouter;
  }
};

export default App;
