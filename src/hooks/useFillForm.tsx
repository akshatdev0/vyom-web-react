import { useEffect } from 'react';

import { UseFormSetValue, FieldValues } from 'react-hook-form';

const useFillForm = (
  setValue: UseFormSetValue<FieldValues>,
  values: Record<string, unknown> | undefined | null,
): void => {
  useEffect(() => {
    if (values) {
      for (const [k, v] of Object.entries(values)) {
        const value = v || '';
        setValue(`${k}` as const, value);
      }
    }
  }, [values]);
};

export default useFillForm;
