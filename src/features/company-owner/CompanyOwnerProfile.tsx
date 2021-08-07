import React from 'react';

import { useReactQueryClient } from 'client';
import { useNotify } from 'core/notification';
import { produce } from 'core/utils';
import { useAuthState } from 'features/auth';
import { UserProfile } from 'features/user';
import {
  CompanyOwnerQuery,
  CompanyOwnerLayoutQuery,
  useCompanyOwnerQuery,
  useUpdateUserMutation,
} from 'generated/graphql';

const CompanyOwnerProfile: React.FunctionComponent = () => {
  const { user: sessionUser } = useAuthState();
  const companyOwnerID = sessionUser?.companyOwner?.id;
  const { data: { companyOwner } = {} } = useCompanyOwnerQuery(
    { id: companyOwnerID || '' },
    { enabled: !!companyOwnerID },
  );

  const reactQueryClient = useReactQueryClient();
  const notify = useNotify();
  const mutation = useUpdateUserMutation({
    onSuccess: async (data) => {
      const updatedUser = data.updateUser?.user;
      reactQueryClient.setQueryData<CompanyOwnerQuery>(['CompanyOwner', { id: companyOwnerID }], (oldData) =>
        produce(oldData, (draft) => {
          if (draft?.companyOwner) {
            draft.companyOwner.user = updatedUser;
          }
        }),
      );
      reactQueryClient.setQueryData<CompanyOwnerLayoutQuery>(
        ['CompanyOwnerLayout', { id: companyOwnerID }],
        (oldData) =>
          produce(oldData, (draft) => {
            if (draft?.companyOwner) {
              draft.companyOwner.user = updatedUser;
            }
          }),
      );
      notify({ type: 'success', title: 'Profile', message: 'Successfully saved!' });
    },
  });
  const { user } = companyOwner || {};

  return <UserProfile mutation={mutation} user={user} />;
};

export default CompanyOwnerProfile;
