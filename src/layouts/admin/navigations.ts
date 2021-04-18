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
import { Navigation } from 'core/navigation';
import Alternative from 'views/pro/pages/dashboards/Alternative.js';
import Buttons from 'views/pro/pages/components/Buttons.js';
import Cards from 'views/pro/pages/components/Cards.js';
import Grid from 'views/pro/pages/components/Grid.js';
import Icons from 'views/pro/pages/components/Icons.js';
import Notifications from 'views/pro/pages/components/Notifications.js';
import Profile from 'views/pro/pages/examples/Profile.js';
import Typography from 'views/pro/pages/components/Typography.js';

const sidebarMenu: Navigation = [
  {
    identifier: 'dashboard',
    name: 'Dashboard',
    icon: 'ni ni-shop text-primary',
    path: '/dashboard',
    component: Alternative,
  },
  {
    identifier: 'components',
    name: 'Components',
    icon: 'ni ni-ui-04 text-info',
    collapse: true,
    children: [
      {
        identifier: 'buttons',
        path: '/buttons',
        name: 'Buttons',
        initial: 'B',
        component: Buttons,
      },
      {
        identifier: 'cards',
        path: '/cards',
        name: 'Cards',
        initial: 'C',
        component: Cards,
      },
      {
        identifier: 'grid',
        path: '/grid',
        name: 'Grid',
        initial: 'G',
        component: Grid,
      },
      {
        identifier: 'notifications',
        path: '/notifications',
        name: 'Notifications',
        initial: 'N',
        component: Notifications,
      },
      {
        identifier: 'icons',
        path: '/icons',
        name: 'Icons',
        initial: 'I',
        component: Icons,
      },
      {
        identifier: 'typography',
        path: '/typography',
        name: 'Typography',
        initial: 'T',
        component: Typography,
      },
    ],
  },
];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: 'ni ni-single-02',
    path: '/profile',
    component: Profile,
  },
  {
    identifier: 'settings',
    name: 'Settings',
    icon: 'ni ni-settings-gear-65',
    path: '/settings',
    component: Alternative,
  },
  {
    identifier: 'activity',
    name: 'Activity',
    icon: 'ni ni-calendar-grid-58',
    path: '/activity',
    component: Alternative,
  },
  {
    identifier: 'support',
    name: 'Support',
    icon: 'ni ni-support-16',
    path: '/support',
    component: Alternative,
  },
];

export { sidebarMenu, userAccountMenu };
