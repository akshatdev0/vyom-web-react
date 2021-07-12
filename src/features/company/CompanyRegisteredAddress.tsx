import React from 'react';
import { Form, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import * as v from 'validations';
import { ErrorAlert } from 'components/atoms';
import { useFillForm } from 'hooks';
import { useNotify } from 'core/notification';
import { AddressInput } from 'components/molecules';
import { Maybe } from 'types';
import {
  CompanyQuery,
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useSetCompanyRegisteredAddressMutation,
} from 'generated/graphql';

type Props = {
  company: Maybe<CompanyQuery['company']>;
};

const schema = v.address();

type FormValues = z.infer<typeof schema>;

const CompanyRegisteredAddress: React.FunctionComponent<Props> = ({ company }: Props) => {
  const notify = useNotify();

  const setMutation = useSetCompanyRegisteredAddressMutation({
    onSuccess: async () => {
      notify({ type: 'success', title: 'Company', message: 'Registered Address Saved!' });
    },
  });

  const createMutation = useCreateAddressMutation({
    onSuccess: async (data) => {
      const createdAddress = data.createAddress?.address;
      if (company?.id && createdAddress?.id) {
        setMutation.mutate({ id: company?.id, registeredAddress: createdAddress?.id });
      }
    },
  });

  const updateMutation = useUpdateAddressMutation({
    onSuccess: async () => {
      notify({ type: 'success', title: 'Company', message: 'Registered Address Saved!' });
    },
  });

  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useFillForm(setValue, company?.registeredAddress);
  const onSubmit = async (variables: FormValues) => {
    const address = {
      addressLine1: variables.addressLine1,
      addressLine2: variables.addressLine2,
      landmark: variables.landmark,
      postalCode: variables.postalCode,
      area: variables.area.id,
    };
    if (company?.registeredAddress) {
      updateMutation.mutate({ id: variables.id, ...address });
    } else {
      createMutation.mutate(address);
    }
  };

  const isLoading = createMutation.isLoading || setMutation.isLoading || updateMutation.isLoading;
  const isError = createMutation.isError || setMutation.isError || updateMutation.isError;
  const error = createMutation.error || setMutation.error || updateMutation.error;

  return (
    <>
      <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <ErrorAlert isError={isError} error={error} />
        <AddressInput
          labelValue="Registered Address"
          address={company?.registeredAddress}
          setValue={setValue}
          control={control}
        />
        <div className="text-center">
          <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CompanyRegisteredAddress;
