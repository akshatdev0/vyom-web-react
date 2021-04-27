import React, { useState } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input } from 'reactstrap';

type InputProps = React.ComponentProps<typeof Input>;

type Props<TFieldValues extends FieldValues = FieldValues> = Omit<InputProps, 'defaultValue'> & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  children: React.ReactNode;
  errorText?: any;
  labelValue: string;
  selectedByDefault?: boolean;
};

const Select = ({
  name,
  control,
  children,
  labelValue,
  disabled,
  onChange,
  selectedByDefault = false,
}: Props): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const {
    field: { ref, onBlur: onBlurControlled, onChange: onChangeControlled, ...rest },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    defaultValue: '',
  });

  const inputProps: InputProps = {
    id: name,
    type: 'select',
    innerRef: ref,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);
      onBlurControlled();
    },
    onChange: (e) => {
      if (onChange) {
        onChange(e);
      }
      onChangeControlled(e);
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
      <Input {...inputProps}>
        {!selectedByDefault && <option value="0">-- select an option --</option>}
        {children}
      </Input>
      {error}
    </FormGroup>
  );
};

export default Select;
