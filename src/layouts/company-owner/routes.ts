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
import { RouteParams } from 'types';
import Index from 'views/Index';
import Profile from 'views/examples/Profile';
import Tables from 'views/examples/Tables';

const routes: RouteParams[] = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Tables,
  },
];

export default routes;
