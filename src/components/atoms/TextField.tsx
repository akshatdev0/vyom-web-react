import React from 'react';

import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import styled from 'styled-components';

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

const NoError = styled.div`
  margin-top: 0.05rem;
  height: 15px;
  max-height: 15px;
  width: 5px;
`;

const Error = styled(NoError)`
  width: auto;
  padding-left: 0.325rem;
  font-size: 0.725rem;
  color: #fb6340;
`;

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
    fieldState: { invalid },
    formState: { errors },
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
    invalid,
    ...rest,
  };

  const input = <Input {...inputProps} />;
  const error = invalid ? <Error>{errors[name]?.message}</Error> : <NoError />;

  const formGroupClassName = 'mb-3 ' + (invalid ? 'has-danger' : '');

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
          <InputGroup>
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
          <InputGroup>
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
          <InputGroup>
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
          <InputGroup>
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
