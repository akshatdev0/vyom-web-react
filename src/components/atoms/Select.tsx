import React from 'react';

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect, { SelectProps } from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';

import { getFormError } from 'core/utils';
import { Option } from 'types';

type Props<TFieldValues extends FieldValues = FieldValues> = Omit<SelectProps, 'defaultValue'> & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  errorText?: any;
  labelValue: string;
  options?: Array<Option>;
  placeholder?: string;
};

const Select = ({ name, control, labelValue, disabled, options, placeholder, onChange }: Props): JSX.Element => {
  const theme = useTheme();
  const {
    field: { ref, onChange: onChangeControlled, ...rest },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    defaultValue: '',
  });

  const selectProps: SelectProps = {
    id: name,
    type: 'select',
    innerRef: ref,
    error: invalid,
    disabled,
    onChange: (e, child: React.ReactNode) => {
      if (onChange) {
        onChange(e, child);
      }
      onChangeControlled(e);
    },
    ...rest,
  };

  return (
    <FormGroup>
      {labelValue ? <FormLabel>{labelValue}</FormLabel> : null}
      <FormControl variant="outlined" fullWidth>
        <MuiSelect IconComponent={KeyboardArrowDown} {...selectProps}>
          {placeholder && (
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
          )}
          {options?.map(({ value, label }: Option, index) => (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
      {invalid ? (
        <FormHelperText component={Box} color={theme.palette.warning.main + '!important'}>
          {getFormError(name, errors)}
        </FormHelperText>
      ) : null}
    </FormGroup>
  );
};

export default Select;
