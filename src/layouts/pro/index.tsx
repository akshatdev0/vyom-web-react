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

import { Layouts } from 'layouts';

import AbstractProLayout from './AbstractProLayout';
import { sidebarMenu, userAccountMenu } from './navigations';

const ProLayout: React.FunctionComponent = () => {
  return (
    <AbstractProLayout
      layout={Layouts.PRO}
      sidebarMenu={sidebarMenu}
      userAccountMenu={userAccountMenu}
      user={null}
      business={null}
    />
  );
};

export default ProLayout;
