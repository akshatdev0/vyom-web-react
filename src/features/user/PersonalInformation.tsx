import React from 'react';

import { Row, Col } from 'reactstrap';
import { Control, FieldValues } from 'react-hook-form';

import { DatePicker, Select, TextField } from 'components/atoms';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
};

const PersonalInformation: React.FunctionComponent<Props> = ({ control }: Props) => (
  <>
    <h6 className="heading-small text-muted mb-4">Personal Information</h6>
    <div className="pl-lg-4">
      <Row>
        <Col lg="6">
          <TextField
            name="firstName"
            type="text"
            labelType="text"
            labelValue="First Name"
            placeholder="First Name"
            control={control}
          />
        </Col>
        <Col lg="6">
          <TextField
            name="lastName"
            type="text"
            labelType="text"
            labelValue="Last Name"
            placeholder="Last Name"
            control={control}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <DatePicker name="dateOfBirth" labelValue="Date of Birth" control={control} />
        </Col>
        <Col lg="6">
          <Select name="gender" labelValue="Gender" selectedByDefault control={control}>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </Select>
        </Col>
        {/* <Row>
          <Col md="12">
            <TextField
              name="address"
              type="text"
              labelType="text"
              labelValue="Home Address"
              placeholder="Home Address"
              control={control}
              defaultValue={address}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <TextField
              name="city"
              type="text"
              labelType="text"
              labelValue="City"
              placeholder="City"
              control={control}
              defaultValue={city}
            />
          </Col>
          <Col lg="4">
            <TextField
              name="country"
              type="text"
              labelType="text"
              labelValue="Country"
              placeholder="Country"
              control={control}
              defaultValue={country}
            />
          </Col>
          <Col lg="4">
            <TextField
              name="pincode"
              type="text"
              labelType="text"
              labelValue="Pincode"
              placeholder="Pincode"
              control={control}
              defaultValue={pincode}
            />
          </Col>
        </Row> */}
      </Row>
    </div>
  </>
);

export default PersonalInformation;
