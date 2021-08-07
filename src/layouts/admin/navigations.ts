import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import House from '@material-ui/icons/House';

import { Navigation } from 'core/navigation';
import routes from 'routes';

const sidebarMenu: Navigation = [];

const userAccountMenu: Navigation = [
  {
    identifier: 'profile',
    name: 'Profile',
    icon: AccountCircleIcon,
    route: routes.adminProfile,
  },
];

export { sidebarMenu, userAccountMenu };
