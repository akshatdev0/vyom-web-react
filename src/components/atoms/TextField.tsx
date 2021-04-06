import React from 'react';

import { Control, Controller, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';

type Props<TFieldValues extends FieldValues = FieldValues> = React.ComponentProps<typeof Input> & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  defaultValue?: any;
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
}: Props): JSX.Element => {
  const controller = (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Input id={name} type={type} placeholder={placeholder} autoComplete={autoComplete} {...field} />
      )}
    />
  );

  switch (labelType) {
    case 'text':
      return (
        <FormGroup>
          <label className="form-control-label" htmlFor={name}>
            {labelValue}
          </label>
          {controller}
        </FormGroup>
      );

    case 'prepend-text':
      return (
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{labelValue}</InputGroupText>
            </InputGroupAddon>
            {controller}
          </InputGroup>
        </FormGroup>
      );

    case 'append-text':
      return (
        <FormGroup>
          <InputGroup>
            {controller}
            <InputGroupAddon addonType="append">
              <InputGroupText>{labelValue}</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      );

    case 'prepend-icon':
      return (
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className={labelValue} />
              </InputGroupText>
            </InputGroupAddon>
            {controller}
          </InputGroup>
        </FormGroup>
      );

    case 'append-icon':
      return (
        <FormGroup>
          {controller}
          <InputGroup>
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className={labelValue} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      );
  }
};

export default TextField;
