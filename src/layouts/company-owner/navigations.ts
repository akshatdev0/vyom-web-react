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
import Components from 'views/pro/pages/forms/Components.js';
import Dashboard from 'views/pro/pages/dashboards/Dashboard.js';
import Elements from 'views/pro/pages/forms/Elements.js';
import Google from 'views/pro/pages/maps/Google.js';
import ReactBSTables from 'views/pro/pages/tables/ReactBSTables.js';
import Sortable from 'views/pro/pages/tables/Sortable.js';
import Tables from 'views/pro/pages/tables/Tables.js';
import Validation from 'views/pro/pages/forms/Validation.js';
import Vector from 'views/pro/pages/maps/Vector.js';

import { CompanyOwnerProfile } from 'features/company-owner';
import { CompanyProfile } from 'features/company';

const sidebarMenu: Navigation = [
  {
    identifier: 'dashboard',
    name: 'Dashboard',
    icon: 'ni ni-shop text-primary',
    path: '/dashboard',
    component: Dashboard,
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
    identifier: 'maps',
    collapse: true,
    name: 'Maps',
    icon: 'ni ni-map-big text-primary',
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
];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: 'ni ni-single-02',
    path: '/profile',
    component: CompanyOwnerProfile,
  },
  {
    identifier: 'company',
    name: 'Company',
    icon: 'ni ni-building',
    path: '/company',
    component: CompanyProfile,
  },
  {
    identifier: 'settings',
    name: 'Settings',
    icon: 'ni ni-settings-gear-65',
    path: '/settings',
    component: Dashboard,
  },
  {
    identifier: 'activity',
    name: 'Activity',
    icon: 'ni ni-calendar-grid-58',
    path: '/activity',
    component: Dashboard,
  },
  {
    identifier: 'support',
    name: 'Support',
    icon: 'ni ni-support-16',
    path: '/support',
    component: Dashboard,
  },
];

export { sidebarMenu, userAccountMenu };
