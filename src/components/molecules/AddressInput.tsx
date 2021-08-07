import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';

import componentStyles from 'assets/theme/views/admin/profile';
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

const useStyles = makeStyles(componentStyles);

const AddressInput: React.FunctionComponent<Props> = ({ labelValue, address, setValue, control }: Props) => {
  const classes = useStyles();
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
      setStateID('0');
      statesOfCountryQuery.refetch();
    }
  }, [countryID]);

  useEffect(() => {
    if (stateID && stateID !== address?.area?.city?.state?.id) {
      setValue(`${cityFieldName}` as const, '');
      setValue(`${areaFieldName}` as const, '');
      setCityID('0');
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
      <Box paddingTop=".25rem" paddingBottom=".25rem" marginBottom="1.5rem!important">
        <Typography variant="h6" classes={{ root: classes.typographyRootH6 }}>
          {labelValue}
        </Typography>
      </Box>
      <div>
        <Grid container>
          <Grid item lg={6}>
            <TextField
              name="addressLine1"
              type="text"
              labelValue="Address Line 1"
              placeholder="Address Line 1"
              control={control}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              name="addressLine2"
              type="text"
              labelValue="Address Line 2"
              placeholder="Address Line 2"
              control={control}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={6}>
            <TextField name="landmark" type="text" labelValue="Landmark" placeholder="Landmark" control={control} />
          </Grid>
          <Grid item lg={4}>
            <Select
              name={areaFieldName}
              labelValue="Area"
              control={control}
              options={areas?.map((area) => ({ value: area?.id, label: area?.name }))}
            />
          </Grid>
          <Grid item lg={2}>
            <TextField name="postalCode" type="text" labelValue="Pincode" placeholder="Pincode" control={control} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={4}>
            <Select
              name={cityFieldName}
              labelValue="City"
              onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
                setCityID(e.target.value as string)
              }
              control={control}
              options={cities?.map((city) => ({ value: city?.id, label: city?.name }))}
            />
          </Grid>
          <Grid item lg={4}>
            <Select
              name={stateFieldName}
              labelValue="State"
              onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
                setStateID(e.target.value as string)
              }
              control={control}
              options={states?.map((state) => ({ value: state?.id, label: state?.name }))}
            />
          </Grid>
          <Grid item lg={4}>
            <Select
              name={countryFieldName}
              labelValue="Country"
              onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
                setCountryID(e.target.value as string)
              }
              control={control}
              options={countries?.map((country) => ({ value: country?.id, label: country?.name }))}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AddressInput;
