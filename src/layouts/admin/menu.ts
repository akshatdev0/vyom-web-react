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
import { MenuArray } from 'layouts';
import Alternative from 'views/pro/pages/dashboards/Alternative.js';
import Buttons from 'views/pro/pages/components/Buttons.js';
import Cards from 'views/pro/pages/components/Cards.js';
import Grid from 'views/pro/pages/components/Grid.js';
import Icons from 'views/pro/pages/components/Icons.js';
import Notifications from 'views/pro/pages/components/Notifications.js';
import Typography from 'views/pro/pages/components/Typography.js';

const menu: MenuArray = [
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

export default menu;
