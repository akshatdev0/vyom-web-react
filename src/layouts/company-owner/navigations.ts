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
import Dashboard from 'views/pro/pages/dashboards/Dashboard.js';

import { CompanyOwnerProfile } from 'features/company-owner';
import { Company } from 'features/company';
import { Products } from 'features/product-catalog';
import { ProductCategories } from 'features/product-catalog';
import { Orders } from 'features/order';

const sidebarMenu: Navigation = [
  {
    identifier: 'dashboard',
    name: 'Dashboard',
    icon: 'ni ni-shop text-primary',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    identifier: 'product-catalog',
    name: 'Product Catalog',
    icon: 'ni ni-align-left-2 text-default',
    collapse: true,
    children: [
      {
        identifier: 'products',
        path: '/products',
        name: 'Products',
        initial: 'P',
        component: Products,
      },
      {
        identifier: 'product-categories',
        path: '/product-categories',
        name: 'Categories',
        initial: 'C',
        component: ProductCategories,
      },
    ],
  },
  {
    identifier: 'orders',
    name: 'Orders',
    icon: 'ni ni-align-left-2 text-default',
    path: '/orders',
    component: Orders,
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
    component: Company,
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
