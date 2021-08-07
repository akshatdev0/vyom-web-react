import React from 'react';

// import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import componentStyles from 'assets/theme/components/headers/user-header';
import { Maybe, User } from 'types';

type Props = {
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const useStyles = makeStyles(componentStyles);

const ProfileHeader: React.FunctionComponent<Props> = ({ user }: Props) => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        className={classes.wrapperBox}
        minHeight="163px"
        position="relative"
        paddingBottom="4.5rem"
      >
        <Box position="absolute" top="0" left="0" width="100%" height="100%" className={classes.overlayBox} />
        <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
          <Grid container component={Box} flex={1}>
            <Grid item xs={12} md={10} lg={7}>
              <Typography variant="h1" classes={{ root: classes.typographyRootH1 }}>
                Hello {user?.firstName}
              </Typography>
              {/* <Box component="p" marginBottom="3rem" color={theme.palette.white.main} lineHeight="1.7" fontSize="1rem">
                This is your profile page. You can see the progress you've made with your work and manage your projects
                or assigned tasks
              </Box>
              <Button variant="contained" classes={{ root: classes.buttonRoot }}>
                Edit profile
              </Button> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProfileHeader;
