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
import { MenuArray } from 'layouts';
import Alternative from 'views/pro/pages/dashboards/Alternative.js';
import Buttons from 'views/pro/pages/components/Buttons.js';
import Calendar from 'views/pro/pages/Calendar.js';
import Cards from 'views/pro/pages/components/Cards.js';
import Charts from 'views/pro/pages/Charts.js';
import Components from 'views/pro/pages/forms/Components.js';
import Dashboard from 'views/pro/pages/dashboards/Dashboard.js';
import Elements from 'views/pro/pages/forms/Elements.js';
import Google from 'views/pro/pages/maps/Google.js';
import Grid from 'views/pro/pages/components/Grid.js';
import Icons from 'views/pro/pages/components/Icons.js';
import Lock from 'views/pro/pages/examples/Lock.js';
import Login from 'views/pro/pages/examples/Login.js';
import Notifications from 'views/pro/pages/components/Notifications.js';
import Pricing from 'views/pro/pages/examples/Pricing.js';
import Profile from 'views/pro/pages/examples/Profile.js';
import ReactBSTables from 'views/pro/pages/tables/ReactBSTables.js';
import Register from 'views/pro/pages/examples/Register.js';
import Sortable from 'views/pro/pages/tables/Sortable.js';
import Tables from 'views/pro/pages/tables/Tables.js';
import Timeline from 'views/pro/pages/examples/Timeline.js';
import Typography from 'views/pro/pages/components/Typography.js';
import Validation from 'views/pro/pages/forms/Validation.js';
import Vector from 'views/pro/pages/maps/Vector.js';
import Widgets from 'views/pro/pages/Widgets.js';

const menu: MenuArray = [
  {
    identifier: 'dashboards',
    name: 'Dashboards',
    icon: 'ni ni-shop text-primary',
    collapse: true,
    children: [
      {
        identifier: 'dashboard',
        path: '/dashboard',
        name: 'Dashboard',
        initial: 'D',
        component: Dashboard,
      },
      {
        identifier: 'alternative-dashboard',
        path: '/alternative-dashboard',
        name: 'Alternative',
        initial: 'A',
        component: Alternative,
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
        path: '/pricing',
        name: 'Pricing',
        initial: 'P',
        component: Pricing,
      },
      {
        identifier: 'login',
        path: '/login',
        name: 'Login',
        initial: 'L',
        component: Login,
      },
      {
        identifier: 'register',
        path: '/register',
        name: 'Register',
        initial: 'R',
        component: Register,
      },
      {
        identifier: 'lock',
        path: '/lock',
        name: 'Lock',
        initial: 'L',
        component: Lock,
      },
      {
        identifier: 'timeline',
        path: '/timeline',
        name: 'Timeline',
        initial: 'T',
        component: Timeline,
      },
      {
        identifier: 'profile',
        path: '/profile',
        name: 'Profile',
        initial: 'P',
        component: Profile,
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
  {
    identifier: 'forms',
    name: 'Forms',
    icon: 'ni ni-single-copy-04 text-pink',
    collapse: true,
    children: [
      {
        identifier: 'elements',
        path: '/elements',
        name: 'Elements',
        initial: 'E',
        component: Elements,
      },
      {
        identifier: 'components',
        path: '/components',
        name: 'Components',
        initial: 'C',
        component: Components,
      },
      {
        identifier: 'validation',
        path: '/validation',
        name: 'Validation',
        initial: 'V',
        component: Validation,
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
        path: '/basic-tables',
        name: 'Basic Tables',
        initial: 'BT',
        component: Tables,
      },
      {
        identifier: 'sortable',
        path: '/sortable',
        name: 'Sortable',
        initial: 'S',
        component: Sortable,
      },
      {
        identifier: 'react-bs-table',
        path: '/react-bs-table',
        name: 'React BS Tables',
        initial: 'RBT',
        component: ReactBSTables,
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
        path: '/google',
        name: 'Google',
        initial: 'G',
        component: Google,
      },
      {
        identifier: 'vector',
        path: '/vector',
        name: 'Vector',
        initial: 'V',
        component: Vector,
      },
    ],
  },
  {
    identifier: 'widgets',
    path: '/widgets',
    name: 'Widgets',
    icon: 'ni ni-archive-2 text-green',
    component: Widgets,
  },
  {
    identifier: 'charts',
    path: '/charts',
    name: 'Charts',
    icon: 'ni ni-chart-pie-35 text-info',
    component: Charts,
  },
  {
    identifier: 'calendar',
    path: '/calendar',
    name: 'Calendar',
    icon: 'ni ni-calendar-grid-58 text-red',
    component: Calendar,
  },
];

export default menu;
