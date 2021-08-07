import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Control, FieldValues } from 'react-hook-form';

import componentStyles from 'assets/theme/views/admin/profile';
import { DatePicker, Select, TextField } from 'components/atoms';
import { Option } from 'types';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
};

const useStyles = makeStyles(componentStyles);

const PersonalInformation: React.FunctionComponent<Props> = ({ control }: Props) => {
  const classes = useStyles();
  const genderOptions: Array<Option> = [
    {
      value: 'MALE',
      label: 'Male',
    },
    {
      value: 'FEMALE',
      label: 'Female',
    },
  ];
  return (
    <>
      <Box paddingTop=".25rem" paddingBottom=".25rem" marginBottom="1.5rem!important">
        <Typography variant="h6" classes={{ root: classes.typographyRootH6 }}>
          Personal Information
        </Typography>
      </Box>
      <div>
        <Grid container>
          <Grid item lg={6}>
            <TextField
              name="firstName"
              type="text"
              labelValue="First Name"
              placeholder="First Name"
              control={control}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField name="lastName" type="text" labelValue="Last Name" placeholder="Last Name" control={control} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={6}>
            <DatePicker name="dateOfBirth" labelValue="Date of Birth" control={control} />
          </Grid>
          <Grid item lg={6}>
            <Select
              name="gender"
              labelValue="Gender"
              control={control}
              options={genderOptions}
              placeholder="Please select"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PersonalInformation;
