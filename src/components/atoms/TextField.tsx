import React, { useState } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';

import { Override } from 'types';
import { getZodError } from 'core/utils';

type ReactstrapInputProps = React.ComponentProps<typeof Input>;

type InputProps = Override<ReactstrapInputProps, { defaultValue?: string | number | string[] | undefined | null }>;

type Props<TFieldValues extends FieldValues = FieldValues> = InputProps & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  errorText?: any;
  labelType?: 'text' | 'prepend-text' | 'append-text' | 'prepend-icon' | 'append-icon';
  labelValue: string;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
};

const TextField = ({
  name,
  control,
  type = 'text',
  defaultValue = '',
  labelType = 'text',
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

  const inputProps: ReactstrapInputProps = {
    id: name,
    type,
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

  const input = <Input {...inputProps} />;
  const error = invalid ? <div className="invalid-feedback">{getZodError(name, errors)}</div> : null;

  switch (labelType) {
    case 'text':
      return (
        <FormGroup className={formGroupClassName}>
          <label className="form-control-label" htmlFor={name}>
            {labelValue}
          </label>
          {input}
          {error}
        </FormGroup>
      );

    case 'prepend-text':
      return (
        <FormGroup className={formGroupClassName}>
          <InputGroup className="input-group-merge">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{labelValue}</InputGroupText>
            </InputGroupAddon>
            {input}
          </InputGroup>
          {error}
        </FormGroup>
      );

    case 'append-text':
      return (
        <FormGroup className={formGroupClassName}>
          <InputGroup className="input-group-merge">
            {input}
            <InputGroupAddon addonType="append">
              <InputGroupText>{labelValue}</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          {error}
        </FormGroup>
      );

    case 'prepend-icon':
      return (
        <FormGroup className={formGroupClassName}>
          <InputGroup className="input-group-merge">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className={labelValue} />
              </InputGroupText>
            </InputGroupAddon>
            {input}
          </InputGroup>
          {error}
        </FormGroup>
      );

    case 'append-icon':
      return (
        <FormGroup className={formGroupClassName}>
          {input}
          <InputGroup className="input-group-merge">
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className={labelValue} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          {error}
        </FormGroup>
      );
  }
};

export default TextField;
