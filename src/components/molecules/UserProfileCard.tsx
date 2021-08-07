import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';
// import LocationOn from '@material-ui/icons/LocationOn';
// import School from '@material-ui/icons/School';
import { parse, differenceInCalendarYears } from 'date-fns';

import componentStylesCardImg from 'assets/theme/components/card-img';
import componentStyles from 'assets/theme/components/cards/profile/card-profile';
import { Maybe, User } from 'types';

type Props = {
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const useStyles = makeStyles(componentStyles);
const useStylesCardImg = makeStyles(componentStylesCardImg);

const UserProfileCard: React.FunctionComponent<Props> = ({ user }: Props) => {
  const classes = { ...useStyles(), ...useStylesCardImg() };
  // const theme = useTheme();
  const { firstName, lastName, dateOfBirth, gender, mobileNumber, alternateMobileNumber, email } = user || {};
  const age =
    dateOfBirth && differenceInCalendarYears(new Date(), parse(dateOfBirth, 'yyyy-MM-dd', new Date())) + ' yrs';
  const genderAndAge = [gender && (gender === 'MALE' ? 'Male' : 'Female'), age].filter(Boolean).join(', ');
  const mobileNumbers = [mobileNumber, alternateMobileNumber].filter(Boolean).join(', ');

  return (
    <Card classes={{ root: classes.cardRoot }}>
      <img alt="..." src={require('assets/img/theme/img-1-1000x600.jpg').default} className={classes.cardImgTop} />
      <Box component={Grid} justifyContent="center">
        <Grid item xs={12} lg={3}>
          <img
            src={require('assets/img/theme/team-4-800x800.jpg').default}
            alt="..."
            className={classes.profileImage}
          />
        </Grid>
      </Box>
      <CardHeader
        border="0!important"
        textAlign="center"
        paddingBottom="0!important"
        paddingTop="8rem!important"
        classes={{ root: classes.cardHeaderRootProfile }}
        subheader={
          <Box display="flex" justifyContent="space-between">
            <Button variant="contained" size="small" classes={{ root: classes.buttonRootInfo }}>
              Connect
            </Button>
            <Button variant="contained" size="small" classes={{ root: classes.buttonRootDark }}>
              Message
            </Button>
          </Box>
        }
      />
      <CardContent classes={{ root: classes.cardContentRoot }}>
        <Grid container>
          <Grid item xs={12}>
            <Box padding="1rem 0" justifyContent="center" display="flex">
              {/* <Box textAlign="center" marginRight="1rem" padding=".875rem">
                <Box
                  component="span"
                  fontSize="1.1rem"
                  fontWeight="700"
                  display="block"
                  letterSpacing=".025em"
                  className={classes.typographyRootH6}
                >
                  22
                </Box>
                <Box component="span" fontSize=".875rem" color={theme.palette.gray[500]}>
                  Friends
                </Box>
              </Box>
              <Box textAlign="center" marginRight="1rem" padding=".875rem">
                <Box
                  component="span"
                  fontSize="1.1rem"
                  fontWeight="700"
                  display="block"
                  letterSpacing=".025em"
                  className={classes.typographyRootH6}
                >
                  10
                </Box>
                <Box component="span" fontSize=".875rem" color={theme.palette.gray[500]}>
                  Photos
                </Box>
              </Box>
              <Box textAlign="center" padding=".875rem">
                <Box
                  component="span"
                  fontSize="1.1rem"
                  fontWeight="700"
                  display="block"
                  letterSpacing=".025em"
                  className={classes.typographyRootH6}
                >
                  89
                </Box>
                <Box component="span" fontSize=".875rem" color={theme.palette.gray[500]}>
                  Comments
                </Box>
              </Box> */}
            </Box>
          </Grid>
        </Grid>
        <div className="text-center">
          <Typography variant="h3">
            {firstName} {lastName}
          </Typography>
          {genderAndAge && (
            <Typography variant="h4">
              <Box component="span" fontWeight="300">
                {genderAndAge}
              </Box>
            </Typography>
          )}
          {/* <Box fontWeight="300!important" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5">
              <Box component={LocationOn} width="1.25rem!important" height="1.25rem!important"></Box>
              Bucharest, Romania
            </Typography>
          </Box>
          <Box marginTop="1rem!important">
            <Typography variant="h5">Solution Manager - Creative Tim Officer</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" marginTop="0.5rem" fontSize="0.85rem">
            <Box component={School} width="1.15rem!important" height="1.15rem!important" marginRight=".5rem"></Box>
            University of Computer Science
          </Box> */}
          {mobileNumbers && (
            <Box display="flex" alignItems="center" justifyContent="center" marginTop="0.5rem" fontSize="0.85rem">
              <Box component={Call} width="1.15rem!important" height="1.15rem!important" marginRight=".5rem"></Box>
              {mobileNumbers}
            </Box>
          )}
          {email && (
            <Box display="flex" alignItems="center" justifyContent="center" marginTop="0.5rem" fontSize="0.85rem">
              <Box component={Email} width="1.15rem!important" height="1.15rem!important" marginRight=".5rem"></Box>
              {email}
            </Box>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
