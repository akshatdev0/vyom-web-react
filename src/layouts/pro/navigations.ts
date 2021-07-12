/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Navigation } from 'core/navigation';
import routes from './routes';

const sidebarMenu: Navigation = [
  {
    identifier: 'dashboards',
    name: 'Dashboards',
    icon: 'ni ni-shop text-primary',
    collapse: true,
    children: [
      {
        identifier: 'dashboard',
        name: 'Dashboard',
        initial: 'D',
        route: routes.dashboard,
      },
      {
        identifier: 'alternative-dashboard',
        name: 'Alternative',
        initial: 'A',
        route: routes.alternativeDashboard,
      },
    ],
  },
  {
    identifier: 'examples',
    name: 'Examples',
    icon: 'ni ni-ungroup text-orange',
    collapse: true,
    children: [
      {
        identifier: 'pricing',
        name: 'Pricing',
        initial: 'P',
        route: routes.pricing,
      },
      {
        identifier: 'login',
        name: 'Login',
        initial: 'L',
        route: routes.login,
      },
      {
        identifier: 'register',
        name: 'Register',
        initial: 'R',
        route: routes.register,
      },
      {
        identifier: 'lock',
        name: 'Lock',
        initial: 'L',
        route: routes.lock,
      },
      {
        identifier: 'timeline',
        name: 'Timeline',
        initial: 'T',
        route: routes.timeline,
      },
      {
        identifier: 'profile',
        name: 'Profile',
        initial: 'P',
        route: routes.profile,
      },
    ],
  },
  {
    identifier: 'components',
    name: 'Components',
    icon: 'ni ni-ui-04 text-info',
    collapse: true,
    children: [
      {
        identifier: 'buttons',
        name: 'Buttons',
        initial: 'B',
        route: routes.buttons,
      },
      {
        identifier: 'cards',
        name: 'Cards',
        initial: 'C',
        route: routes.cards,
      },
      {
        identifier: 'grid',
        name: 'Grid',
        initial: 'G',
        route: routes.grid,
      },
      {
        identifier: 'notifications',
        name: 'Notifications',
        initial: 'N',
        route: routes.notifications,
      },
      {
        identifier: 'icons',
        name: 'Icons',
        initial: 'I',
        route: routes.icons,
      },
      {
        identifier: 'typography',
        name: 'Typography',
        initial: 'T',
        route: routes.typography,
      },
    ],
  },
  {
    identifier: 'forms',
    name: 'Forms',
    icon: 'ni ni-single-copy-04 text-pink',
    collapse: true,
    children: [
      {
        identifier: 'elements',
        name: 'Elements',
        initial: 'E',
        route: routes.elements,
      },
      {
        identifier: 'components',
        name: 'Components',
        initial: 'C',
        route: routes.components,
      },
      {
        identifier: 'validation',
        name: 'Validation',
        initial: 'V',
        route: routes.validation,
      },
    ],
  },
  {
    identifier: 'tables',
    name: 'Tables',
    icon: 'ni ni-align-left-2 text-default',
    collapse: true,
    children: [
      {
        identifier: 'basic-tables',
        name: 'Basic Tables',
        initial: 'BT',
        route: routes.basicTables,
      },
      {
        identifier: 'sortable',
        name: 'Sortable',
        initial: 'S',
        route: routes.sortable,
      },
      {
        identifier: 'react-bs-table',
        name: 'React BS Tables',
        initial: 'RBT',
        route: routes.reactBsTable,
      },
    ],
  },
  {
    identifier: 'maps',
    name: 'Maps',
    icon: 'ni ni-map-big text-primary',
    collapse: true,
    children: [
      {
        identifier: 'google',
        name: 'Google',
        initial: 'G',
        route: routes.google,
      },
      {
        identifier: 'vector',
        name: 'Vector',
        initial: 'V',
        route: routes.vector,
      },
    ],
  },
  {
    identifier: 'widgets',
    name: 'Widgets',
    icon: 'ni ni-archive-2 text-green',
    route: routes.widgets,
  },
  {
    identifier: 'charts',
    name: 'Charts',
    icon: 'ni ni-chart-pie-35 text-info',
    route: routes.charts,
  },
  {
    identifier: 'calendar',
    name: 'Calendar',
    icon: 'ni ni-calendar-grid-58 text-red',
    route: routes.calendar,
  },
];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: 'ni ni-single-02',
    route: routes.profile,
  },
  {
    identifier: 'settings',
    name: 'Settings',
    icon: 'ni ni-settings-gear-65',
    route: routes.dashboard,
  },
  {
    identifier: 'activity',
    name: 'Activity',
    icon: 'ni ni-calendar-grid-58',
    route: routes.dashboard,
  },
  {
    identifier: 'support',
    name: 'Support',
    icon: 'ni ni-support-16',
    route: routes.dashboard,
  },
];

export { sidebarMenu, userAccountMenu };
