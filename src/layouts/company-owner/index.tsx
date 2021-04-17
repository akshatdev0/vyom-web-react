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
import { AdminTopbar, AdminFooter, Sidebar } from 'components/molecules';
import { useToggleSidebar } from 'hooks';
import { Layout, getRoutes } from 'layouts';
import menu from './menu';

const CompanyOwnerLayout: React.FunctionComponent = () => {
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

  const getNavbarTheme = () => {
    return 'dark';
  };

  return (
    <>
      <Sidebar
        layout={Layout.CompanyOwner}
        menu={menu}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        logo={{
          innerLink: '/',
          imgSrc: require('assets/img/brand/argon-react.png').default,
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminTopbar theme={getNavbarTheme()} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          {getRoutes(Layout.CompanyOwner, menu)}
          <Redirect from="*" to="/company-owner/dashboard" />
        </Switch>
        <AdminFooter />
      </div>
      {sidebarOpen ? <div className="backdrop d-xl-none" onClick={toggleSidebar} /> : null}
    </>
  );
};

export default CompanyOwnerLayout;
