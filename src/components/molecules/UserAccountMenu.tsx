import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import Jdenticon from 'react-jdenticon';
import { Link } from 'react-router-dom';

import componentStyles from 'assets/theme/components/dropdowns/user-account-menu';
import { Layout } from 'core/layout';
import { hasRoute, isDivider, isMenuItem, isTitle, Navigation } from 'core/navigation';
import { getPath } from 'core/routing';
import { useAuthState } from 'features/auth';
import { Maybe, User } from 'types';

const useStyles = makeStyles(componentStyles);

type Props = {
  // The layout for which this menu will be used
  layout: Layout;
  // navigation which will be displayed inside the component
  navigation: Navigation;
  user: Maybe<User>;
};

const UserAccountMenu: React.FunctionComponent<Props> = ({ layout, navigation, user }: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { signOut } = useAuthState();

  const isMenuOpen = Boolean(anchorEl);
  const name = user && user.firstName + ' ' + user.lastName;

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'dropdowns-user-dropdown-id';

  // this function creates the titles, divider and links that appear in the user account menu
  const createMenuItems = (navigation: Navigation) => {
    const items: Array<JSX.Element | null> = [];

    if (navigation) {
      for (let i = 0; i < navigation.length; i++) {
        const item = navigation[i];
        if (isDivider(item)) {
          const component = <Divider key={i} component="div" classes={{ root: classes.dividerRoot }} />;
          items.push(component);
        } else if (isTitle(item)) {
          const component = (
            <Typography key={i} variant="h6" component="h6" classes={{ root: classes.menuTitle }}>
              {item.title}
            </Typography>
          );
          items.push(component);
        } else if (isMenuItem(item) && hasRoute(item)) {
          const component = (
            <MenuItem key={i} component={Link} to={getPath(layout, item.route)} onClick={handleMenuClose}>
              <Box component={item.icon} width="1.25rem!important" height="1.25rem!important" marginRight="1rem" />
              <span>{item.name}</span>
            </MenuItem>
          );
          items.push(component);
        }
      }
    }
    return items;
  };

  return (
    <>
      <Button
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          classes={{
            root: classes.avatarRoot,
          }}
        >
          <Jdenticon size="36" value={user ? user.mobileNumber : 'default'} />
        </Avatar>
        {name && <Hidden mdDown>{name}</Hidden>}
      </Button>
      <Menu
        anchorEl={anchorEl}
        id={menuId}
        keepMounted
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        getContentAnchorEl={null}
      >
        {createMenuItems(navigation)}
        <Divider component="div" classes={{ root: classes.dividerRoot }} />
        <Box display="flex!important" alignItems="center!important" component={MenuItem} onClick={() => signOut()}>
          <Box component={DirectionsRun} width="1.25rem!important" height="1.25rem!important" marginRight="1rem" />
          <span>Sign Out</span>
        </Box>
      </Menu>
    </>
  );
};

export default UserAccountMenu;
