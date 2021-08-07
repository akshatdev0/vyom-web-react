import React from 'react';

import { useReactQueryClient } from 'client';
import { useSnackbar } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { UserProfile } from 'features/user';
import { UserQuery, GetUserInfoQuery, useUserQuery, useUpdateUserMutation } from 'generated/graphql';

const AdminProfile: React.FunctionComponent = () => {
  const reactQueryClient = useReactQueryClient();
  const { user: sessionUser } = useAuthState();
  const userID = sessionUser?.id;
  const { data: { user } = {} } = useUserQuery({ id: userID || '' }, { enabled: !!userID });
  const showSnackbar = useSnackbar();
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
      showSnackbar({ severity: 'success', title: 'Profile', message: 'Successfully saved!' });
    },
  });

  return <UserProfile mutation={mutation} user={user} />;
};

export default AdminProfile;
