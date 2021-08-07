import SvgIcon from '@material-ui/core/SvgIcon';

import { RouteMapping } from './routing';

type AbstractMenuProps = {
  identifier: string;
  name: string;
};

type AbstractIconMenu = {
  icon: typeof SvgIcon;
};

type AbstractColoredItem = {
  color?:
    | 'Primary'
    | 'PrimaryLight'
    | 'Error'
    | 'ErrorLight'
    | 'Warning'
    | 'WarningLight'
    | 'Info'
    | 'InfoLight'
    | 'Success'
    | 'SuccessLight'
    | 'Default';
};

type AbstractMenu = {
  collapse: boolean;
  children?: Array<SubMenu | SubMenuItem>;
};

type AbstractRouteItem = {
  route: RouteMapping;
};

type AbstractLinkItem = {
  href: string;
};

type Divider = {
  light: boolean;
};

type Title = {
  title: string;
};

export type MenuItem = AbstractMenuProps &
  AbstractIconMenu &
  AbstractColoredItem &
  (AbstractRouteItem | AbstractLinkItem);

export type Menu = AbstractMenuProps & AbstractIconMenu & AbstractColoredItem & AbstractMenu;

export type SubMenu = AbstractMenuProps & AbstractMenu;

export type SubMenuItem = AbstractMenuProps &
  (AbstractRouteItem | AbstractLinkItem) &
  AbstractColoredItem & {
    initial: string;
  };

export type Navigation = Array<Menu | MenuItem | Divider | Title>;

export type SubNavigation = Array<SubMenu | SubMenuItem>;

export function isDivider(v: Menu | MenuItem | SubMenu | SubMenuItem | Divider | Title): v is Divider {
  return (v as Divider).light !== undefined;
}

export function isTitle(v: Menu | MenuItem | SubMenu | SubMenuItem | Divider | Title): v is Title {
  return (v as Title).title !== undefined;
}

export function hasIcon(v: Menu | MenuItem | SubMenu | SubMenuItem | Divider | Title): v is Menu | MenuItem {
  return (v as AbstractIconMenu).icon !== undefined;
}

export function hasInitial(v: Menu | MenuItem | SubMenu | SubMenuItem | Divider | Title): v is SubMenuItem {
  return (v as SubMenuItem).initial !== undefined;
}

export function hasRoute(
  v: Menu | MenuItem | SubMenu | SubMenuItem | Divider | Title | AbstractRouteItem | AbstractLinkItem,
): v is AbstractRouteItem {
  return (v as AbstractRouteItem).route !== undefined;
}

export function hasLink(
  v: Menu | MenuItem | SubMenu | SubMenuItem | Divider | Title | AbstractRouteItem | AbstractLinkItem,
): v is AbstractLinkItem {
  return (v as AbstractLinkItem).href !== undefined;
}

export function isCollapsibleMenu(v: MenuItem | SubMenu | SubMenuItem | Divider | Title): v is Menu | SubMenu {
  return (v as AbstractMenu).collapse !== undefined;
}

export function isMenuItem(v: MenuItem | SubMenu | SubMenuItem): v is MenuItem {
  return (v as AbstractIconMenu).icon !== undefined && (v as AbstractRouteItem).route !== undefined;
}

export function isMenu(v: MenuItem | SubMenu | SubMenuItem): v is Menu {
  return (v as AbstractIconMenu).icon !== undefined && (v as AbstractMenu).collapse !== undefined;
}

export function isSubMenuItem(v: MenuItem | SubMenu | SubMenuItem): v is SubMenuItem {
  return (v as SubMenuItem).initial !== undefined && (v as AbstractRouteItem).route !== undefined;
}
