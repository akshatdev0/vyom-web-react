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

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Layout.Admin} render={(props) => <AdminLayout {...props} />} />
      <Route path={Layout.Auth} render={() => <AuthLayout />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>
);

export default App;
