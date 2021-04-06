import React from 'react';

import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';

type InputProps = React.ComponentProps<typeof Input>;

type Props<TFieldValues extends FieldValues = FieldValues> = InputProps & {
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
  const {
    field: { ref, ...rest },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const inputProps: InputProps = {
    id: name,
    type,
    placeholder,
    autoComplete,
    innerRef: ref,
    ...rest,
  };

  const input = <Input {...inputProps} />;

  switch (labelType) {
    case 'text':
      return (
        <FormGroup>
          <label className="form-control-label" htmlFor={name}>
            {labelValue}
          </label>
          {input}
        </FormGroup>
      );

    case 'prepend-text':
      return (
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{labelValue}</InputGroupText>
            </InputGroupAddon>
            {input}
          </InputGroup>
        </FormGroup>
      );

    case 'append-text':
      return (
        <FormGroup>
          <InputGroup>
            {input}
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
            {input}
          </InputGroup>
        </FormGroup>
      );

    case 'append-icon':
      return (
        <FormGroup>
          {input}
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
