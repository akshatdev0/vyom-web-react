import React from 'react';

import { Row, Col } from 'reactstrap';
import { Control, FieldValues } from 'react-hook-form';

import { TextField } from 'components/atoms';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
};

const AccountInformation: React.FunctionComponent<Props> = ({ control }: Props) => (
  <>
    <h6 className="heading-small text-muted mb-4">Account Information</h6>
    <div className="pl-lg-4">
      <Row>
        <Col lg="4">
          <TextField
            name="mobileNumber"
            type="tel"
            labelType="text"
            labelValue="Registered Mobile Number"
            placeholder="Registered Mobile Number"
            control={control}
            disabled
          />
        </Col>
        <Col lg="4">
          <TextField
            name="alternateMobileNumber"
            type="tel"
            labelType="text"
            labelValue="Alternate Mobile Number"
            placeholder="Alternate Mobile Number"
            control={control}
          />
        </Col>
        <Col lg="4">
          <TextField
            name="email"
            type="email"
            labelType="text"
            labelValue="Email Address"
            placeholder="Email Address"
            control={control}
          />
        </Col>
      </Row>
    </div>
  </>
);

export default AccountInformation;
