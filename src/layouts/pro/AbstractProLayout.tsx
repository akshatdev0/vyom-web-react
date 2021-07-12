/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
// core components
import { Navigation } from 'core/navigation';
import { NotificationContainer } from 'core/notification';
import { UserTopbar, UserFooter, Sidebar } from 'components/molecules';
import { useScrollTop, useToggleSidebar } from 'hooks';
import { Business, Maybe, User } from 'types';
import { getRoutes } from 'core/routing';
import { Layout } from 'core/layout';
import routes from './routes';

type Props = {
  // The layout for which this sidebar will be used
  layout: Layout;
  // sidebar menu which will be displayed inside the sidebar
  sidebarMenu: Navigation;
  // user account menu which will be displayed inside the topbar
  userAccountMenu: Navigation;
  user: Maybe<User>;
  business: Maybe<Business>;
  // nav bar theme
  navbarTheme?: string;
};

const AbstractProLayout: React.FunctionComponent<Props> = ({
  layout,
  sidebarMenu,
  userAccountMenu,
  user,
  business,
  navbarTheme = 'dark',
}: Props) => {
  const mainContentRef = useScrollTop();
  const [sidebarOpen, toggleSidebar] = useToggleSidebar(true);

  return (
    <>
      <Sidebar
        layout={layout}
        navigation={sidebarMenu}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        logo={{
          innerLink: '/',
          imgSrc: require('assets/img/brand/argon-react.png').default,
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <NotificationContainer place="br">
          <UserTopbar
            layout={layout}
            theme={navbarTheme}
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            accountMenu={userAccountMenu}
            user={user}
            business={business}
          />
          <Switch>
            {getRoutes(layout, routes)}
            <Redirect from="*" to={layout + '/dashboard'} />
          </Switch>
          <UserFooter />
        </NotificationContainer>
      </div>
      {sidebarOpen ? <div className="backdrop d-xl-none" onClick={toggleSidebar} /> : null}
    </>
  );
};

export default AbstractProLayout;
