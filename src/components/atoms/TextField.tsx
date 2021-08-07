import React from 'react';

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import createStyles from '@material-ui/styles/createStyles';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';

import { getFormError } from 'core/utils';
import { Override } from 'types';

type InputProps = Override<OutlinedInputProps, { defaultValue?: string | number | string[] | undefined | null }>;

type Props<TFieldValues extends FieldValues = FieldValues> = InputProps & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  errorText?: any;
  labelValue?: string;
  prepend?: string | JSX.Element;
  append?: string | JSX.Element;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
};

const componentStyles = (theme: Theme) =>
  createStyles({
    outlinedInput: {
      backgroundColor: theme.palette.white.main,
      '&.Mui-disabled .MuiInputAdornment-root, &.Mui-disabled .MuiOutlinedInput-input': {
        backgroundColor: theme.palette.gray['200'],
      },
    },
  });

const useStyles = makeStyles(componentStyles);

const TextField = ({
  name,
  control,
  type = 'text',
  defaultValue = '',
  labelValue,
  prepend,
  append,
  placeholder,
  autoComplete,
  onChange,
  disabled,
}: Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  const {
    field: { ref, onChange: onChangeControlled, ...rest },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    defaultValue: defaultValue || '',
  });

  const inputProps: OutlinedInputProps = {
    id: name,
    type,
    placeholder,
    autoComplete,
    innerRef: ref,
    error: invalid,
    disabled,
    onChange: (e: any) => {
      if (onChange) {
        onChange(e);
      }
      onChangeControlled(e);
    },
    ...rest,
  };

  return (
    <FormGroup>
      {labelValue ? <FormLabel>{labelValue}</FormLabel> : null}
      <FormControl variant="outlined" component={Box} width="100%">
        <OutlinedInput
          className={classes.outlinedInput}
          fullWidth
          {...inputProps}
          startAdornment={
            prepend ? (
              <InputAdornment position="start">
                {prepend instanceof String ? <Box fontSize=".875rem">{prepend}</Box> : prepend}
              </InputAdornment>
            ) : null
          }
          endAdornment={
            append ? (
              <InputAdornment position="end">
                {append instanceof String ? <Box fontSize=".875rem">{append}</Box> : append}
              </InputAdornment>
            ) : null
          }
        />
      </FormControl>
      {invalid ? (
        <FormHelperText component={Box} color={theme.palette.warning.main + '!important'}>
          {getFormError(name, errors)}
        </FormHelperText>
      ) : null}
    </FormGroup>
  );
};

export default TextField;
