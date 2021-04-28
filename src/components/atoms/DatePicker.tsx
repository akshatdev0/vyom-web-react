import React, { useState } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input } from 'reactstrap';

import { Override } from 'types';
import { getZodError } from 'core/utils';

type InputProps = React.ComponentProps<typeof Input>;

type Props<TFieldValues extends FieldValues = FieldValues> = Override<
  InputProps,
  { defaultValue?: string | number | string[] | undefined | null }
> & {
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
    type: 'date',
    placeholder,
    autoComplete,
    innerRef: ref,
    invalid,
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

  const error = invalid ? <div className="invalid-feedback">{getZodError(name, errors)}</div> : null;

  return (
    <FormGroup className={formGroupClassName}>
      <label className="form-control-label" htmlFor={name}>
        {labelValue}
      </label>
      <Input {...inputProps} />
      {error}
    </FormGroup>
  );
};

export default DatePicker;
