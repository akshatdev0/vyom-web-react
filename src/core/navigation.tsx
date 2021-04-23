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
import { Route } from 'react-router-dom';

type AbstractMenuProps = {
  identifier: string;
  name: string;
  redirect?: any;
};

type AbstractIconMenu = {
  icon: string;
};

type AbstractMenu = {
  collapse: boolean;
  children?: Array<SubMenu | SubMenuItem>;
};

type AbstractMenuItem = {
  path: string;
  component: React.FC;
};

export type MenuItem = AbstractMenuProps & AbstractIconMenu & AbstractMenuItem;

export type Menu = AbstractMenuProps & AbstractIconMenu & AbstractMenu;

export type SubMenu = AbstractMenuProps & AbstractMenu;

export type SubMenuItem = AbstractMenuProps &
  AbstractMenuItem & {
    initial: string;
  };

export type Navigation = Array<Menu | MenuItem>;

export type SubNavigation = Array<SubMenu | SubMenuItem>;

function hasComponent(v: MenuItem | SubMenu | SubMenuItem): v is MenuItem | SubMenuItem {
  return (v as AbstractMenuItem).component !== undefined;
}

export function isCollapsibleMenu(v: MenuItem | SubMenu | SubMenuItem): v is Menu | SubMenu {
  return (v as AbstractMenu).collapse !== undefined;
}

export function isMenuItem(v: MenuItem | SubMenu | SubMenuItem): v is MenuItem {
  return (v as AbstractIconMenu).icon !== undefined && (v as AbstractMenuItem).component !== undefined;
}

export function isMenu(v: MenuItem | SubMenu | SubMenuItem): v is Menu {
  return (v as AbstractIconMenu).icon !== undefined && (v as AbstractMenu).collapse !== undefined;
}

export function isSubMenuItem(v: MenuItem | SubMenu | SubMenuItem): v is SubMenuItem {
  return (v as SubMenuItem).initial !== undefined && (v as AbstractMenuItem).component !== undefined;
}

export const getRoutes = (layout: string, ...navigations: Array<any>): any => {
  const routes: Array<any> = [];
  if (navigations) {
    for (let i = 0; i < navigations.length; i++) {
      const navigation = navigations[i];
      for (let j = 0; j < navigation.length; j++) {
        const view = navigation[j];
        if (isCollapsibleMenu(view) && view.collapse) {
          routes.push(getRoutes(layout, view.children));
        }
        if (hasComponent(view)) {
          routes.push(<Route path={layout + view.path} component={view.component} key={j} />);
        }
        routes.push(null);
      }
    }
  }
  return routes;
};
