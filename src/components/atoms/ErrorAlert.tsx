import React from 'react';

import { Alert } from 'reactstrap';

import { getGraphQLError } from 'core/utils';

type Props = {
  isError: boolean;
  error: unknown;
};

const ErrorAlert = ({ isError, error }: Props): JSX.Element | null =>
  isError ? <Alert color="danger">{getGraphQLError(error)}</Alert> : null;

export default ErrorAlert;
