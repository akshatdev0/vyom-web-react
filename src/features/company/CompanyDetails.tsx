import React from 'react';
// reactstrap components
import { Row, Col, Form, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { ErrorAlert, QuillEditor } from 'components/atoms';
import { useFillForm } from 'hooks';
import { useNotify } from 'core/notification';
import { Maybe } from 'types';
import {
  CompanyQuery,
  useSetCompanyDetailMutation,
  useCreateCompanyDetailMutation,
  useUpdateCompanyDetailMutation,
  CreateCompanyDetailMutationVariables,
  UpdateCompanyDetailMutationVariables,
} from 'generated/graphql';

type Props = {
  company: Maybe<CompanyQuery['company']>;
};

const CompanyDetails: React.FunctionComponent<Props> = ({ company }: Props) => {
  const notify = useNotify();

  const setMutation = useSetCompanyDetailMutation({
    onSuccess: async () => {
      notify({ type: 'success', title: 'Company', message: 'Details Saved!' });
    },
  });

  const createMutation = useCreateCompanyDetailMutation({
    onSuccess: async (data) => {
      const companyDetail = data.createCompanyDetail?.companyDetail;
      if (company?.id && companyDetail?.id) {
        setMutation.mutate({ id: company?.id, companyDetail: companyDetail?.id });
      }
    },
  });

  const updateMutation = useUpdateCompanyDetailMutation({
    onSuccess: async () => {
      notify({ type: 'success', title: 'Company', message: 'Details Saved!' });
    },
  });

  const { control, handleSubmit, setValue } = useForm();
  useFillForm(setValue, company?.companyDetail);
  const onSubmit = async (variables: CreateCompanyDetailMutationVariables | UpdateCompanyDetailMutationVariables) => {
    if (company?.companyDetail) {
      updateMutation.mutate({ id: company.id, ...variables });
    } else {
      createMutation.mutate(variables);
    }
  };

  const isLoading = createMutation.isLoading || setMutation.isLoading || updateMutation.isLoading;
  const isError = createMutation.isError || setMutation.isError || updateMutation.isError;
  const error = createMutation.error || setMutation.error || updateMutation.error;

  return (
    <>
      <Form role="form" onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <ErrorAlert isError={isError} error={error} />
        <h6 className="heading-small text-muted mb-4">Company Details</h6>
        <div className="pl-lg-4">
          <Row>
            <Col lg="12">
              <QuillEditor
                name="returnPolicy"
                labelValue="Return Policy"
                placeholder="Your company return policy"
                control={control}
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

export default CompanyDetails;
