import React from 'react';

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { useTheme } from '@material-ui/core/styles';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';

import { getFormError } from 'core/utils';
import { Override } from 'types';

type InputProps = Override<OutlinedInputProps, { defaultValue?: string | number | string[] | undefined | null }>;

type Props<TFieldValues extends FieldValues = FieldValues> = InputProps & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  errorText?: any;
  labelValue: string;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
};

const DatePicker = ({
  name,
  control,
  defaultValue = '',
  labelValue,
  placeholder,
  autoComplete,
  disabled,
}: Props): JSX.Element => {
  const theme = useTheme();

  const {
    field: { ref, ...rest },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    defaultValue: defaultValue || '',
  });

  const inputProps: OutlinedInputProps = {
    id: name,
    type: 'date',
    placeholder,
    autoComplete,
    innerRef: ref,
    error: invalid,
    disabled,
    ...rest,
  };

  return (
    <FormGroup>
      {labelValue ? <FormLabel>{labelValue}</FormLabel> : null}
      <FormControl variant="outlined" component={Box} width="100%">
        <OutlinedInput fullWidth {...inputProps} />
      </FormControl>
      {invalid ? (
        <FormHelperText component={Box} color={theme.palette.warning.main + '!important'}>
          {getFormError(name, errors)}
        </FormHelperText>
      ) : null}
    </FormGroup>
  );
};

export default DatePicker;
