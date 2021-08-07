import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import CategoryIcon from '@material-ui/icons/Category';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';

import { Navigation } from 'core/navigation';
import routes from 'routes';

const sidebarMenu: Navigation = [
  {
    identifier: 'product-catalog',
    name: 'Product Catalog',
    icon: CategoryIcon,
    color: 'Info',
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
    icon: ListAltIcon,
    color: 'Success',
    route: routes.orders,
  },
];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: AccountCircleIcon,
    route: routes.companyOwnerProfile,
  },
  {
    identifier: 'company',
    name: 'Company',
    icon: BusinessIcon,
    route: routes.company,
  },
];

export { sidebarMenu, userAccountMenu };
