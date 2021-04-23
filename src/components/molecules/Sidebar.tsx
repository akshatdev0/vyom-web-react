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
import React, { useState, useEffect } from 'react';
// react library for routing
import { useLocation, NavLink as NavLinkRRD, Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from 'classnames';
// react library that creates nice scrollbar on windows devices
import PerfectScrollbar from 'react-perfect-scrollbar';
// reactstrap components
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav } from 'reactstrap';
import {
  SubNavigation,
  SubMenuItem,
  Navigation,
  SubMenu,
  isMenu,
  isSubMenuItem,
  isCollapsibleMenu,
  isMenuItem,
} from 'core/navigation';

type Props = {
  // The layout for which this sidebar will be used
  layout: string;
  // prop to know if the sidenav is mini or normal
  sidebarOpen: boolean;
  // function used to make sidenav mini or normal
  toggleSidebar: () => void;
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
  // rtl active, this will make the sidebar to stay on the right side
  rtlActive?: boolean;
};

const Sidebar: React.FunctionComponent<Props> = ({
  layout,
  sidebarOpen,
  toggleSidebar,
  navigation,
  logo,
  rtlActive = false,
}: Props) => {
  const [state, setState] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    setState(getCollapseStates(navigation));
    // eslint-disable-next-line
  }, []);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  };
  // makes the sidenav normal on hover (actually when mouse enters on it)
  const onMouseEnterSidebar = () => {
    if (!document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.add('g-sidenav-show');
    }
  };
  // makes the sidenav mini on hover (actually when mouse leaves from it)
  const onMouseLeaveSidebar = () => {
    if (!document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.remove('g-sidenav-show');
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
        } else if (isSubMenuItem(item) && location.pathname.indexOf(item.path) !== -1) {
          return true;
        }
      }
    }
    return false;
  };
  // this is used on mobile devices, when a user navigates
  // the sidebar will autoclose
  const closeSidenav = () => {
    if (window.innerWidth < 1200) {
      toggleSidebar();
    }
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (navigation: Navigation | SubNavigation | undefined) => {
    const links: Array<JSX.Element | null> = [];

    if (navigation) {
      for (let i = 0; i < navigation.length; i++) {
        const item = navigation[i];
        if (item.redirect) {
          links.push(null);
        } else if (isCollapsibleMenu(item) && item.collapse) {
          const link = (
            <NavItem key={i}>
              <NavLink
                href="#pablo"
                data-toggle="collapse"
                aria-expanded={state[item.identifier]}
                className={classnames({
                  active: getCollapseInitialState(item.children),
                })}
                onClick={(e) => {
                  e.preventDefault();
                  const st: Record<string, boolean> = {};
                  st[item['identifier']] = !state[item.identifier];
                  setState(st);
                }}
              >
                {isMenu(item) && item.icon ? (
                  <>
                    <i className={item.icon} />
                    <span className="nav-link-text">{item.name}</span>
                  </>
                ) : isSubMenuItem(item) && item.initial ? (
                  <>
                    <span className="sidenav-mini-icon"> {item.initial} </span>
                    <span className="sidenav-normal"> {item.name} </span>
                  </>
                ) : null}
              </NavLink>
              <Collapse isOpen={state[item.identifier]}>
                <Nav className="nav-sm flex-column">{createLinks(item.children)}</Nav>
              </Collapse>
            </NavItem>
          );
          links.push(link);
        } else if (isMenuItem(item) || isSubMenuItem(item)) {
          const link = (
            <NavItem className={activeRoute(layout + item.path)} key={i}>
              <NavLink to={layout + item.path} activeClassName="" onClick={closeSidenav} tag={NavLinkRRD}>
                {isMenuItem(item) && item.icon ? (
                  <>
                    <i className={item.icon} />
                    <span className="nav-link-text">{item.name}</span>
                  </>
                ) : isSubMenuItem(item) && item.initial ? (
                  <>
                    <span className="sidenav-mini-icon"> {item.initial} </span>
                    <span className="sidenav-normal"> {item.name} </span>
                  </>
                ) : (
                  item.name
                )}
              </NavLink>
            </NavItem>
          );
          links.push(link);
        } else {
          links.push(null);
        }
      }
    }
    return links;
  };

  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: '_blank',
    };
  }
  const scrollBarInner = (
    <div className="scrollbar-inner">
      <div className="sidenav-header d-flex align-items-center">
        {logo ? (
          <NavbarBrand {...navbarBrandProps}>
            <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        <div className="ml-auto">
          <div
            className={classnames('sidenav-toggler d-none d-xl-block', {
              active: sidebarOpen,
            })}
            onClick={toggleSidebar}
          >
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-inner">
        <Collapse navbar isOpen={true}>
          <Nav navbar>{createLinks(navigation)}</Nav>
          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Documentation</span>
            <span className="docs-mini">D</span>
          </h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i className="ni ni-spaceship" />
                <span className="nav-link-text">Getting started</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i className="ni ni-palette" />
                <span className="nav-link-text">Foundation</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i className="ni ni-ui-04" />
                <span className="nav-link-text">Components</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i className="ni ni-chart-pie-35" />
                <span className="nav-link-text">Plugins</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </div>
  );
  return (
    <Navbar
      className={'sidenav navbar-vertical navbar-expand-xs navbar-light bg-white ' + (rtlActive ? '' : 'fixed-left')}
      onMouseEnter={onMouseEnterSidebar}
      onMouseLeave={onMouseLeaveSidebar}
    >
      {navigator.platform.indexOf('Win') > -1 ? <PerfectScrollbar>{scrollBarInner}</PerfectScrollbar> : scrollBarInner}
    </Navbar>
  );
};

export default Sidebar;
