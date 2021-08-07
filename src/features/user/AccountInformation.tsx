import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Control, FieldValues } from 'react-hook-form';

import componentStyles from 'assets/theme/views/admin/profile';
import { TextField } from 'components/atoms';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
};

const useStyles = makeStyles(componentStyles);

const AccountInformation: React.FunctionComponent<Props> = ({ control }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Box paddingTop=".25rem" paddingBottom=".25rem" marginBottom="1.5rem!important">
        <Typography variant="h6" classes={{ root: classes.typographyRootH6 }}>
          Account Information
        </Typography>
      </Box>
      <div>
        <Grid container>
          <Grid item lg={4}>
            <TextField
              name="mobileNumber"
              type="tel"
              labelValue="Registered Mobile Number"
              placeholder="Registered Mobile Number"
              control={control}
              disabled
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              name="alternateMobileNumber"
              type="tel"
              labelValue="Alternate Mobile Number"
              placeholder="Alternate Mobile Number"
              control={control}
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              name="email"
              type="email"
              labelValue="Email Address"
              placeholder="Email Address"
              control={control}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AccountInformation;
