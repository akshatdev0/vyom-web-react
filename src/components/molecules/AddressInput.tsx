import React, { useEffect, useState } from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';

import { Select, TextField } from 'components/atoms';
import {
  useAreasOfCityQuery,
  useCitiesOfStateQuery,
  useCountriesQuery,
  useStatesOfCountryQuery,
} from 'generated/graphql';
import { Address, Maybe } from 'types';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  labelValue: string;
  address?: Maybe<Partial<Address>>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<TFieldValues>;
};

const AddressInput: React.FunctionComponent<Props> = ({ labelValue, address, setValue, control }: Props) => {
  const [countryID, setCountryID] = useState<string | undefined>();
  const [stateID, setStateID] = useState<string | undefined>();
  const [cityID, setCityID] = useState<string | undefined>();

  const countriesQuery = useCountriesQuery();
  const statesOfCountryQuery = useStatesOfCountryQuery({ id: countryID || '' }, { enabled: !!countryID });
  const citiesOfStateQuery = useCitiesOfStateQuery({ id: stateID || '' }, { enabled: !!stateID });
  const areasOfCityQuery = useAreasOfCityQuery({ id: cityID || '' }, { enabled: !!cityID });

  const { data: { countries } = {} } = countriesQuery;
  const { data: { states } = {} } = statesOfCountryQuery;
  const { data: { cities } = {} } = citiesOfStateQuery;
  const { data: { areas } = {} } = areasOfCityQuery;

  const countryFieldName = `area.city.state.country.id`;
  const stateFieldName = `area.city.state.id`;
  const cityFieldName = `area.city.id`;
  const areaFieldName = `area.id`;

  useEffect(() => {
    if (address) {
      const city = address.area?.city;
      const state = city?.state;
      const country = state?.country;
      setCountryID(country?.id);
      setStateID(state?.id);
      setCityID(city?.id);
    } else if (countries && countries.length > 0) {
      setCountryID(countries[0]?.id);
    }
  }, [address, countries]);

  useEffect(() => {
    if (countryID && countryID !== address?.area?.city?.state?.country?.id) {
      setValue(`${stateFieldName}` as const, '');
      setValue(`${cityFieldName}` as const, '');
      setValue(`${areaFieldName}` as const, '');
      statesOfCountryQuery.refetch();
    }
  }, [countryID]);

  useEffect(() => {
    if (stateID && stateID !== address?.area?.city?.state?.id) {
      setValue(`${cityFieldName}` as const, '');
      setValue(`${areaFieldName}` as const, '');
      citiesOfStateQuery.refetch();
    }
  }, [stateID]);

  useEffect(() => {
    if (cityID && cityID !== address?.area?.city?.id) {
      setValue(`${areaFieldName}` as const, '');
      areasOfCityQuery.refetch();
    }
  }, [cityID]);

  return (
    <>
      <h6 className="heading-small text-muted my-4">{labelValue}</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <TextField
              name="addressLine1"
              type="text"
              labelType="text"
              labelValue="Address Line 1"
              placeholder="Address Line 1"
              control={control}
            />
          </Col>
          <Col lg="6">
            <TextField
              name="addressLine2"
              type="text"
              labelType="text"
              labelValue="Address Line 2"
              placeholder="Address Line 2"
              control={control}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <TextField
              name="landmark"
              type="text"
              labelType="text"
              labelValue="Landmark"
              placeholder="Landmark"
              control={control}
            />
          </Col>
          <Col lg="4">
            <Select name={areaFieldName} labelValue="Area" control={control}>
              {areas?.map((area, index) => (
                <option key={index} value={area?.id}>
                  {area?.name}
                </option>
              ))}
            </Select>
          </Col>
          <Col lg="2">
            <TextField
              name="postalCode"
              type="text"
              labelType="text"
              labelValue="Pincode"
              placeholder="Pincode"
              control={control}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Select
              name={cityFieldName}
              labelValue="City"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCityID(e.target.value)}
              control={control}
            >
              {cities?.map((city, index) => (
                <option key={index} value={city?.id}>
                  {city?.name}
                </option>
              ))}
            </Select>
          </Col>
          <Col lg="4">
            <Select
              name={stateFieldName}
              labelValue="State"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStateID(e.target.value)}
              control={control}
            >
              {states?.map((state, index) => (
                <option key={index} value={state?.id}>
                  {state?.name}
                </option>
              ))}
            </Select>
          </Col>
          <Col lg="4">
            <Select
              name={countryFieldName}
              labelValue="Country"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountryID(e.target.value)}
              selectedByDefault
              control={control}
            >
              {countries?.map((country, index) => (
                <option key={index} value={country?.id}>
                  {country?.name}
                </option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddressInput;
