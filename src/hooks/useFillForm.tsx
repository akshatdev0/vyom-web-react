import { useEffect } from 'react';

import _ from 'lodash';
import { UseFormSetValue, FieldValues } from 'react-hook-form';

const useFillForm = (
  setValue: UseFormSetValue<FieldValues>,
  values: Record<string, unknown> | undefined | null,
  paths?: Array<string>,
): void => {
  useEffect(() => {
    if (values) {
      if (paths) {
        values = _.pick(values, paths);
      }
      for (const [k, v] of Object.entries(values)) {
        const value = v || '';
        setValue(`${k}` as const, value);
      }
    }
  }, [values]);
};

export default useFillForm;
