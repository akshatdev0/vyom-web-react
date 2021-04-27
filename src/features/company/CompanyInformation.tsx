import React from 'react';
// reactstrap components
import { Row, Col, Form, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { ErrorAlert, Select, TextField } from 'components/atoms';
import { Maybe } from 'types';
import { useFillForm } from 'hooks';
import { useReactQueryClient } from 'client';
import { useNotify } from 'core/notification';
import { useAuthState } from 'features/auth';
import { CompanyQuery, useCompanyBusinessTypesQuery, useUpdateCompanyInformationMutation } from 'generated/graphql';

type Props = {
  company: Maybe<CompanyQuery['company']>;
};

const CompanyInformation: React.FunctionComponent<Props> = ({ company }: Props) => {
  const { data: { companyTypes, businessTypes } = {} } = useCompanyBusinessTypesQuery();

  const { user: sessionUser } = useAuthState();
  const companyOwnerID = sessionUser?.companyOwner?.id;
  const reactQueryClient = useReactQueryClient();
  const notify = useNotify();
  const { mutate, isLoading, isError, error } = useUpdateCompanyInformationMutation({
    onSuccess: async (data) => {
      const updatedCompanyInformation = data.updateCompany?.company;
      reactQueryClient.setQueryData<CompanyQuery>(['Company', { id: company?.id }], {
        company: updatedCompanyInformation,
      });
      reactQueryClient.invalidateQueries(['CompanyOwnerLayout', { id: companyOwnerID }]);
      notify({ type: 'success', title: 'Company', message: 'Successfully saved!' });
    },
  });

  const { control, handleSubmit, setValue } = useForm();
  useFillForm(setValue, company);
  const onSubmit = async (variables: any) => {
    if (company) {
      mutate({
        id: company?.id,
        name: variables.name,
        companyType: variables.companyType.id,
        businessType: variables.businessType.id,
      });
    }
  };

  return (
    <>
      <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <ErrorAlert isError={isError} error={error} />
        <h6 className="heading-small text-muted mb-4">Company Information</h6>
        <div className="pl-lg-4">
          <Row>
            <Col lg="8">
              <TextField
                name="name"
                type="text"
                labelType="text"
                labelValue="Company Name"
                placeholder="Name of your Company"
                control={control}
              />
            </Col>
            <Col lg="4">
              <TextField
                name="registrationNumber"
                type="text"
                labelType="text"
                labelValue="Registration Number"
                placeholder="Registration Number"
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Select name="companyType.id" labelValue="Company Type" defaultValue="0" control={control}>
                {companyTypes?.map((companyType, index) => (
                  <option key={index} value={companyType?.id}>
                    {companyType?.name}
                  </option>
                ))}
              </Select>
            </Col>
            <Col lg="4">
              <Select name="businessType.id" labelValue="Business Type" defaultValue="0" control={control}>
                {businessTypes?.map((businessType, index) => (
                  <option key={index} value={businessType?.id}>
                    {businessType?.name}
                  </option>
                ))}
              </Select>
            </Col>
            <Col lg="2">
              <TextField
                name="sku"
                type="text"
                labelType="text"
                labelValue="Marka"
                placeholder="Marka"
                control={control}
                disabled
              />
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <Button className="my-2" color="primary" type="submit" disabled={isLoading}>
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CompanyInformation;
