import React, { useState } from 'react';

import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Clear from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ZoomIn from '@material-ui/icons/ZoomIn';
import clsx from 'clsx';

import componentStyles from 'assets/theme/components/navbars/user-topbar';
import { Layout } from 'core/layout';
import { Navigation } from 'core/navigation';
import { Business, Maybe, User } from 'types';

import UserAccountMenu from './UserAccountMenu';

const useStyles = makeStyles(componentStyles);

type Props = {
  // The layout for which this menu will be used
  layout: Layout;
  openSidebar: () => void;
  // navigation which will be displayed inside the component
  accountMenu: Navigation;
  user: Maybe<User>;
  business: Maybe<Business>;
};

const UserTopbar: React.FunctionComponent<Props> = ({
  openSidebar,
  layout,
  accountMenu: navigation,
  user,
  business,
}: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <AppBar position="relative" elevation={0} classes={{ root: classes.appBarRoot }}>
        <Toolbar disableGutters>
          <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              marginTop="1rem"
              marginBottom="1rem"
            >
              <Box display="flex" alignItems="center" width="auto" marginRight="2rem" className={classes.brandBox}>
                <Typography variant="h2" component="h6" className={classes.brandTitle}>
                  {business?.name}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                width="auto"
                marginRight="1rem"
                className={clsx(classes.searchBox, {
                  [classes.searchBoxShow]: showSearch,
                })}
              >
                <SearchIcon className={classes.searchIcon} />
                <InputBase
                  placeholder="Search"
                  classes={{
                    input: classes.searchInput,
                  }}
                />
                <Hidden smUp implementation="css">
                  <Clear className={classes.searchClose} onClick={() => setShowSearch(false)} />
                </Hidden>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft="auto"
                className={clsx(classes.marginLeftNone, {
                  [classes.displayNone]: showSearch,
                })}
              >
                <Hidden xlUp implementation="css">
                  <IconButton onClick={openSidebar}>
                    <Box
                      component={MenuIcon}
                      color={theme.palette.white.main}
                      width="1.5rem!important"
                      height="1.5rem!important"
                    />
                  </IconButton>
                </Hidden>
                <Hidden smUp implementation="css">
                  <IconButton onClick={() => setShowSearch(true)}>
                    <Box
                      component={ZoomIn}
                      color={theme.palette.white.main}
                      width="1.5rem!important"
                      height="1.5rem!important"
                    />
                  </IconButton>
                </Hidden>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={clsx(classes.marginLeftAuto, {
                  [classes.displayNone]: showSearch,
                })}
              >
                <UserAccountMenu layout={layout} navigation={navigation} user={user} />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default UserTopbar;
