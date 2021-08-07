import React from 'react';

import { UserLayout } from 'components/templates';
import { useAuthState } from 'features/auth';
import { useGetUserInfoQuery } from 'generated/graphql';
import { Layouts } from 'layouts';
import routes from 'routes';

import { sidebarMenu, userAccountMenu } from './navigations';

const AdminLayout: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const userID = sessionUser?.id;
  const { data: { user } = {} } = useGetUserInfoQuery({ id: userID || '' }, { enabled: !!userID });

  const business = {
    id: '0',
    name: 'Vyom',
  };

  return (
    <UserLayout
      layout={Layouts.ADMIN}
      routes={routes}
      sidebarMenu={sidebarMenu}
      userAccountMenu={userAccountMenu}
      user={user}
      business={business}
    />
  );
};

export default AdminLayout;
