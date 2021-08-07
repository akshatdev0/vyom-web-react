import React from 'react';

import { UserLayout } from 'components/templates';
import { useAuthState } from 'features/auth';
import { useCompanyOwnerLayoutQuery } from 'generated/graphql';
import { Layouts } from 'layouts';
import routes from 'routes';

import { sidebarMenu, userAccountMenu } from './navigations';

const CompanyOwnerLayout: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyOwnerID = sessionUser?.companyOwner?.id;
  const { data: { companyOwner } = {} } = useCompanyOwnerLayoutQuery(
    { id: companyOwnerID || '' },
    { enabled: !!companyOwnerID },
  );
  return (
    <UserLayout
      layout={Layouts.COMPANY_OWNER}
      routes={routes}
      sidebarMenu={sidebarMenu}
      userAccountMenu={userAccountMenu}
      user={companyOwner?.user}
      business={companyOwner?.company}
    />
  );
};

export default CompanyOwnerLayout;
