import React from 'react';

import { FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import { InputType } from 'reactstrap/es/Input';

type Props = {
  name: string;
  type?: InputType | undefined;
  defaultValue?: string | number | string[] | undefined;
  labelType?: 'text' | 'prepend-text' | 'append-text' | 'prepend-icon' | 'append-icon';
  labelValue: string;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
};

const TextField = ({
  name,
  type = 'text',
  defaultValue = '',
  labelType = 'text',
  labelValue,
  placeholder,
  autoComplete,
}: Props): JSX.Element => {
  switch (labelType) {
    case 'text':
      return (
        <FormGroup>
          <label className="form-control-label" htmlFor={name}>
            {labelValue}
          </label>
          <Input
            id={name}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
        </FormGroup>
      );

    case 'prepend-text':
      return (
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{labelValue}</InputGroupText>
            </InputGroupAddon>
            <Input
              id={name}
              type={type}
              defaultValue={defaultValue}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
          </InputGroup>
        </FormGroup>
      );

    case 'append-text':
      return (
        <FormGroup>
          <InputGroup>
            <Input
              id={name}
              type={type}
              defaultValue={defaultValue}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
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
            <Input
              id={name}
              type={type}
              defaultValue={defaultValue}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
          </InputGroup>
        </FormGroup>
      );

    case 'append-icon':
      return (
        <FormGroup>
          <Input
            id={name}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
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
