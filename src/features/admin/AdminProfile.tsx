/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { useReactQueryClient } from 'client';

import { UserProfile } from 'components/templates';
import { useAuthState } from 'features/auth';
import { UserQuery, GetUserInfoQuery, useUserQuery, useUpdateUserMutation } from 'generated/graphql';

const AdminProfile: React.FunctionComponent = () => {
  const reactQueryClient = useReactQueryClient();
  const { user: sessionUser } = useAuthState();
  const userID = sessionUser?.id;
  const { data: { user } = {} } = useUserQuery({ id: userID || '' }, { enabled: !!userID });
  const mutation = useUpdateUserMutation({
    onSuccess: async (data) => {
      const updatedUser = data.updateUser?.user;
      reactQueryClient.setQueryData<GetUserInfoQuery>(['GetUserInfo', { id: userID }], {
        user: {
          id: userID || '',
          firstName: updatedUser?.firstName,
          lastName: updatedUser?.lastName,
          mobileNumber: updatedUser?.mobileNumber || '',
        },
      });
      reactQueryClient.setQueryData<UserQuery>(['User', { id: userID }], {
        user: updatedUser,
      });
    },
  });

  return <UserProfile mutation={mutation} user={user} />;
};

export default AdminProfile;
