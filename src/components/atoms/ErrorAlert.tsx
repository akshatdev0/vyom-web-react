import React from 'react';

import { Alert } from 'reactstrap';
import { getErrorMessage } from 'core/utils';

type Props = {
  isError: boolean;
  error: unknown;
};

const ErrorAlert = ({ isError, error }: Props): JSX.Element | null =>
  isError ? <Alert color="danger">{getErrorMessage(error)}</Alert> : null;

export default ErrorAlert;
