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

import { Layout } from 'layouts';
import { sidebarMenu, userAccountMenu } from './navigations';
import AbstractProLayout from './AbstractProLayout';

const ProLayout: React.FunctionComponent = () => {
  return (
    <AbstractProLayout
      layout={Layout.Pro}
      sidebarMenu={sidebarMenu}
      userAccountMenu={userAccountMenu}
      user={null}
      business={null}
    />
  );
};

export default ProLayout;
