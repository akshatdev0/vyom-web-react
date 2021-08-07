import React from 'react';

import Alert from '@material-ui/lab/Alert';

import { getGraphQLError } from 'core/utils';

type Props = {
  isError: boolean;
  error: unknown;
};

const ErrorAlert = ({ isError, error }: Props): JSX.Element | null =>
  isError ? <Alert severity="error">{getGraphQLError(error)}</Alert> : null;

export default ErrorAlert;
