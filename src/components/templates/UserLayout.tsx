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
import React, { useRef, RefObject } from 'react';
// react library for routing
import { useLocation, Switch, Redirect } from 'react-router-dom';
// core components
import { getRoutes, Navigation } from 'core/navigation';
import { UserTopbar, UserFooter, Sidebar } from 'components/molecules';
import { useToggleSidebar } from 'hooks';

type Props = {
  // The layout for which this sidebar will be used
  layout: string;
  // sidebar menu which will be displayed inside the sidebar
  sidebarMenu: Navigation;
  // user account menu which will be displayed inside the topbar
  userAccountMenu: Navigation;
  // nav bar theme
  navbarTheme?: string;
};

const UserLayout: React.FunctionComponent<Props> = ({
  layout,
  sidebarMenu,
  userAccountMenu,
  navbarTheme = 'dark',
}: Props) => {
  const [sidebarOpen, toggleSidebar] = useToggleSidebar(true);
  const location = useLocation();
  const mainContentRef: RefObject<HTMLDivElement> = useRef({}) as RefObject<HTMLDivElement>;

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainContentRef && mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [location]);

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
        <UserTopbar
          layout={layout}
          theme={navbarTheme}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          accountMenu={userAccountMenu}
        />
        <Switch>
          {getRoutes(layout, sidebarMenu, userAccountMenu)}
          <Redirect from="*" to={layout + '/dashboard'} />
        </Switch>
        <UserFooter />
      </div>
      {sidebarOpen ? <div className="backdrop d-xl-none" onClick={toggleSidebar} /> : null}
    </>
  );
};

export default UserLayout;
