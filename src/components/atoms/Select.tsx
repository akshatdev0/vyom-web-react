import React, { useState } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input } from 'reactstrap';

import { Override } from 'types';

type InputProps = React.ComponentProps<typeof Input>;

type Props<TFieldValues extends FieldValues = FieldValues> = Override<
  InputProps,
  { defaultValue?: string | number | string[] | undefined | null }
> & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  children: React.ReactNode;
  errorText?: any;
  labelValue: string;
};

const Select = ({ name, control, children, defaultValue = '', labelValue, disabled }: Props): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const {
    field: { ref, onBlur: onBlurCallback, ...rest },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    defaultValue: defaultValue || '',
  });

  const inputProps: InputProps = {
    id: name,
    type: 'select',
    innerRef: ref,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);
      onBlurCallback();
    },
    ...rest,
  };

  const formGroupClassName = classnames('mb-3', {
    focused,
    'has-danger': invalid,
  });

  const error = invalid ? <div className="invalid-feedback">{errors[name]?.message}</div> : null;

  return (
    <FormGroup className={formGroupClassName}>
      <label className="form-control-label" htmlFor={name}>
        {labelValue}
      </label>
      <Input {...inputProps}>{children}</Input>
      {error}
    </FormGroup>
  );
};

export default Select;
