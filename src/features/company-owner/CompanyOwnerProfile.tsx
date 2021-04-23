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

import { useNotify } from 'core/notification';
import { UserProfile } from 'components/templates';
import { useAuthState } from 'features/auth';
import { CompanyOwnerQuery, GetUserInfoQuery, useCompanyOwnerQuery, useUpdateUserMutation } from 'generated/graphql';

const CompanyOwnerProfile: React.FunctionComponent = () => {
  const reactQueryClient = useReactQueryClient();
  const { user: sessionUser } = useAuthState();
  const notify = useNotify();

  const userID = sessionUser?.id;
  const companyOwnerID = sessionUser?.companyOwner?.id;
  const { data: { companyOwner } = {} } = useCompanyOwnerQuery(
    { id: companyOwnerID || '' },
    { enabled: !!companyOwnerID },
  );
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
      reactQueryClient.setQueryData<CompanyOwnerQuery>(['CompanyOwner', { id: companyOwnerID }], {
        companyOwner: { id: companyOwnerID || '', user: updatedUser },
      });
      notify({ type: 'success', title: 'Profile', message: 'Successfully saved!' });
    },
  });
  const { user } = companyOwner || {};

  return <UserProfile mutation={mutation} user={user} />;
};

export default CompanyOwnerProfile;
