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
    route: routes.companyOwnerDashboard,
  },
  {
    identifier: 'product-catalog',
    name: 'Product Catalog',
    icon: 'ni ni-align-left-2 text-default',
    collapse: true,
    children: [
      {
        identifier: 'products',
        name: 'Products',
        initial: 'P',
        route: routes.products,
      },
      {
        identifier: 'product-categories',
        name: 'Categories',
        initial: 'C',
        route: routes.productCategories,
      },
    ],
  },
  {
    identifier: 'orders',
    name: 'Orders',
    icon: 'ni ni-align-left-2 text-default',
    route: routes.orders,
  },
];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: 'ni ni-single-02',
    route: routes.companyOwnerProfile,
  },
  {
    identifier: 'company',
    name: 'Company',
    icon: 'ni ni-building',
    route: routes.company,
  },
];

export { sidebarMenu, userAccountMenu };
