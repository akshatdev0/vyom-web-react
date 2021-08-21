import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';
import NavigateNext from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useLocation, Link } from 'react-router-dom';

import componentStyles from 'assets/theme/components/sidebar';
import { Layout } from 'core/layout';
import {
  SubNavigation,
  SubMenuItem,
  Navigation,
  SubMenu,
  isDivider,
  isSubMenuItem,
  isCollapsibleMenu,
  isTitle,
  MenuItem,
  hasIcon,
  Menu,
  hasInitial,
  hasLink,
  hasRoute,
} from 'core/navigation';
import { getParts, getPath } from 'core/routing';

type Props = {
  // The layout for which this sidebar will be used
  layout: Layout;
  // prop to know if the sidenav is mini or normal
  sidebarOpen: boolean;
  // function used to make sidenav mini or normal
  closeSidebar: () => void;
  // navigation which will be displayed inside the component
  navigation: Navigation;
  logo: {
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink?: string;
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink?: string;
    // the image src of the logo
    imgSrc: string;
    // the alt for the img
    imgAlt: string;
  };
};

const useStyles = makeStyles(componentStyles);

const Sidebar: React.FunctionComponent<Props> = ({ layout, sidebarOpen, closeSidebar, navigation, logo }: Props) => {
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = useState<Record<string, boolean>>({});
  const [compact, setCompact] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);

  useEffect(() => {
    setState(getCollapseStates(navigation));
    // eslint-disable-next-line
  }, []);

  const toggleCompactView = () => {
    if (mouseEnter) {
      setCompact(false);
      setMouseEnter(false);
    } else {
      setCompact(!compact);
    }
  };

  // dmakes the sidenav normal on hover (actually when mouse enters on it)
  const onMouseEnterSidebar = () => {
    if (compact && !mouseEnter) {
      setCompact(false);
      setMouseEnter(true);
    }
  };
  // makes the sidenav mini on hover (actually when mouse leaves from it)
  const onMouseLeaveSidebar = () => {
    if (mouseEnter) {
      setCompact(true);
      setMouseEnter(false);
    }
  };

  // this creates the intial state of this component based on the collapse views
  // that it gets through views
  const getCollapseStates = (menu: Navigation | SubNavigation | undefined) => {
    let initialState = {};
    if (menu) {
      for (let i = 0; i < menu.length; i++) {
        const item = menu[i];
        if (isCollapsibleMenu(item) && item.collapse) {
          initialState = {
            [item.identifier]: getCollapseInitialState(item.children),
            ...getCollapseStates(item.children),
            ...initialState,
          };
        }
      }
    }
    return initialState;
  };

  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms
  const getCollapseInitialState = (menu: SubNavigation | undefined): boolean => {
    if (menu) {
      for (let i = 0; i < menu.length; i++) {
        const item: SubMenu | SubMenuItem = menu[i];
        if (isCollapsibleMenu(item) && item.collapse && getCollapseInitialState(item.children)) {
          return true;
        } else if (isSubMenuItem(item) && hasRoute(item) && location.pathname.indexOf(getParts(item.route)) !== -1) {
          return true;
        }
      }
    }
    return false;
  };

  // this is used on mobile devices, when a user navigates
  // the sidebar will autoclose
  const handleCloseSidebar = () => {
    if (window.innerWidth < 1200) {
      closeSidebar();
    }
  };

  const getColorClassName = (color: string | undefined) => {
    if (!color) {
      return classes.textDefault;
    }
    switch (color) {
      case 'Primary':
        return classes.textPrimary;

      case 'PrimaryLight':
        return classes.textPrimaryLight;

      case 'Error':
        return classes.textError;

      case 'ErrorLight':
        return classes.textErrorLight;

      case 'Warning':
        return classes.textWarning;

      case 'WarningLight':
        return classes.textWarningLight;

      case 'Info':
        return classes.textInfo;

      case 'InfoLight':
        return classes.textInfoLight;

      case 'Success':
        return classes.textSuccess;

      case 'SuccessLight':
        return classes.textSuccessLight;

      default:
        return classes.textDefault;
    }
  };

  const createLinkLabel = (item: Menu | MenuItem | SubMenu | SubMenuItem) => (
    <>
      <Box minWidth="2.25rem" display="flex" alignItems="center">
        {hasIcon(item) ? (
          <Box
            component={item.icon}
            width="1.25rem!important"
            height="1.25rem!important"
            marginLeft={compact ? '-.25rem' : ''}
            className={getColorClassName(item.color)}
          />
        ) : null}
        {hasInitial(item) ? (
          <Box component="span" className={getColorClassName(item.color)}>
            {item.initial}
          </Box>
        ) : null}
      </Box>
      {compact ? null : item.name}
    </>
  );

  // this function creates the menu, titles, dividers, links and collapses that appear in the sidebar (left menu)
  const createMenuItems = (navigation: Navigation | SubNavigation | undefined) => {
    const items: Array<JSX.Element | null> = [];

    if (navigation) {
      for (let i = 0; i < navigation.length; i++) {
        const item = navigation[i];
        if (isDivider(item)) {
          const component = <Divider key={i} classes={{ root: classes.divider }} />;
          items.push(component);
        } else if (isTitle(item)) {
          if (compact) {
            return null;
          }
          const component = (
            <Typography key={i} variant="h6" component="h6" classes={{ root: classes.title }}>
              {item.title}
            </Typography>
          );
          items.push(component);
        } else if (isCollapsibleMenu(item) && item.collapse) {
          const st: Record<string, boolean> = {};
          st[item['identifier']] = !state[item.identifier];
          // TODO: Multi states
          const component = (
            <React.Fragment key={i}>
              <ListItem
                component={'a'}
                href="#mui"
                onClick={(e: any) => {
                  e.preventDefault();
                  setState(st);
                }}
                classes={{
                  root: clsx(classes.listItemRoot, {
                    [classes.listItemRootCollapseActive]: getCollapseInitialState(item.children),
                  }),
                }}
              >
                {createLinkLabel(item)}
                {compact ? null : (
                  <Box
                    component={NavigateNext}
                    marginLeft="auto"
                    width="1rem!important"
                    height="1rem!important"
                    className={clsx(classes.listItemRootCollapseIcon, {
                      [classes.listItemRootCollapseActiveIcon]: state[item.identifier],
                    })}
                  />
                )}
              </ListItem>
              <Collapse in={state[item.identifier]} unmountOnExit className={classes.collapseRoot}>
                <List classes={{ root: classes.listRootCollapse }}>{createMenuItems(item.children)}</List>
              </Collapse>
            </React.Fragment>
          );
          items.push(component);
        } else if (hasLink(item)) {
          const component = (
            <ListItem
              key={i}
              component={'a'}
              href={item.href}
              onClick={handleCloseSidebar}
              classes={{
                root: classes.listItemRoot,
                selected: classes.listItemSelected,
              }}
              target="_blank"
            >
              {createLinkLabel(item)}
            </ListItem>
          );
          items.push(component);
        } else if (hasRoute(item)) {
          const path = getPath(layout, item.route);
          const component = (
            <ListItem
              key={i}
              component={Link}
              onClick={handleCloseSidebar}
              to={path}
              classes={{
                root: classes.listItemRoot,
                selected: classes.listItemSelected,
              }}
              selected={location.pathname === path}
            >
              {createLinkLabel(item)}
            </ListItem>
          );
          items.push(component);
        } else {
          // TODO: Check if required
          items.push(null);
        }
      }
    }
    return items;
  };

  const logoImage = <img alt={logo.imgAlt} className={classes.logoClasses} src={logo.imgSrc} />;
  const logoObject =
    logo && logo.innerLink ? (
      <Link to={logo.innerLink} className={classes.logoLinkClasses}>
        {logoImage}
      </Link>
    ) : logo && logo.outterLink ? (
      <a href={logo.outterLink} className={classes.logoLinkClasses}>
        {logoImage}
      </a>
    ) : null;

  const desktopObject = (
    <>
      <Box
        padding={compact ? '0 0 1rem 0' : '0 1rem 1rem 1.5rem'}
        display="flex"
        justifyContent={compact ? 'center' : 'space-between'}
        alignItems="center"
      >
        {compact ? null : logoObject}
        <IconButton onClick={toggleCompactView}>
          <Box
            component={compact || mouseEnter ? MenuOpen : MenuIcon}
            width="1.5rem!important"
            height="1.5rem!important"
          />
        </IconButton>
      </Box>
      <List classes={{ root: classes.listRoot }}>{createMenuItems(navigation)}</List>
    </>
  );
  const mobileObject = (
    <>
      <Box padding={'0 1rem 1rem 1.5rem'} display="flex" justifyContent="flex-start" alignItems="center">
        {logoObject}
      </Box>
      <List classes={{ root: classes.listRoot }}>{createMenuItems(navigation)}</List>
    </>
  );
  return (
    <>
      <Hidden lgDown implementation="css">
        <Drawer
          variant="permanent"
          anchor="left"
          open
          classes={{
            paper: clsx({ [classes.drawerDockedCompact]: compact }),
            docked: clsx({ [classes.drawerPaperCompact]: compact }),
          }}
          onMouseEnter={onMouseEnterSidebar}
          onMouseLeave={onMouseLeaveSidebar}
        >
          <PerfectScrollbar>{desktopObject}</PerfectScrollbar>
        </Drawer>
      </Hidden>
      <Hidden xlUp implementation="js">
        <Drawer variant="temporary" anchor="left" open={sidebarOpen} onClose={closeSidebar}>
          <PerfectScrollbar>{mobileObject}</PerfectScrollbar>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
