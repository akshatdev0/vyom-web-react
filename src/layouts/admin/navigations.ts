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
import routes from 'routes';

const sidebarMenu: Navigation = [
  {
    identifier: 'dashboard',
    name: 'Dashboard',
    icon: 'ni ni-shop text-primary',
    route: routes.adminDashboard,
  },
];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: 'ni ni-single-02',
    route: routes.adminProfile,
  },
];

export { sidebarMenu, userAccountMenu };
