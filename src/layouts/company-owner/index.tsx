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

import { UserLayout } from 'components/templates';
import { Layout } from 'layouts';
import { sidebarMenu, userAccountMenu } from './navigations';
import { useAuthState } from 'features/auth';
import { useCompanyOwnerLayoutQuery } from 'generated/graphql';

const CompanyOwnerLayout: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyOwnerID = sessionUser?.companyOwner?.id;
  const { data: { companyOwner } = {} } = useCompanyOwnerLayoutQuery(
    { id: companyOwnerID || '' },
    { enabled: !!companyOwnerID },
  );
  return (
    <UserLayout
      layout={Layout.CompanyOwner}
      sidebarMenu={sidebarMenu}
      userAccountMenu={userAccountMenu}
      user={companyOwner?.user}
      business={companyOwner?.company}
    />
  );
};

export default CompanyOwnerLayout;
