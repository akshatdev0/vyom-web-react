import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from 'react-router-dom';

import componentStyles from 'assets/theme/layouts/admin.js';
import Sidebar from 'components/molecules/Sidebar';
import Snackbars from 'components/molecules/Snackbars';
import UserFooter from 'components/molecules/UserFooter';
import UserTopbar from 'components/molecules/UserTopbar';
import { Layout } from 'core/layout';
import { Navigation } from 'core/navigation';
import { NotificationContainer } from 'core/notification';
import { getRoutes, RouteMapping } from 'core/routing';
import { useSidebarControls } from 'hooks';
import { Business, Maybe, User } from 'types';

const useStyles = makeStyles(componentStyles);

type Props = {
  // The layout for which this sidebar will be used
  layout: Layout;
  routes: Record<string, RouteMapping>;
  // sidebar menu which will be displayed inside the sidebar
  sidebarMenu: Navigation;
  // user account menu which will be displayed inside the topbar
  userAccountMenu: Navigation;
  user: Maybe<User>;
  business: Maybe<Business>;
};

const UserLayout: React.FunctionComponent<Props> = ({
  layout,
  routes,
  sidebarMenu,
  userAccountMenu,
  user,
  business,
}: Props) => {
  const classes = useStyles();
  const [sidebarOpen, openSidebar, closeSidebar] = useSidebarControls(true);

  return (
    <>
      <Box display="flex">
        <Sidebar
          layout={layout}
          navigation={sidebarMenu}
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          logo={{
            innerLink: '/',
            imgSrc: require('assets/img/brand/argon-react.png').default,
            imgAlt: '...',
          }}
        />
        <Box position="relative" flex="1" className={classes.mainContent}>
          <Snackbars origin={{ horizontal: 'right', vertical: 'bottom' }}>
            <NotificationContainer place="br">
              <UserTopbar
                layout={layout}
                openSidebar={openSidebar}
                accountMenu={userAccountMenu}
                user={user}
                business={business}
              />
              <Switch>
                {getRoutes(layout, routes)}
                {/* TODO: 404 page redirect */}
              </Switch>
              <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
                <UserFooter />
              </Container>
            </NotificationContainer>
          </Snackbars>
        </Box>
      </Box>
    </>
  );
};

export default UserLayout;
