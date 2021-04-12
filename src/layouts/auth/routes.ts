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
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

const routes: RouteParams[] = [
  {
    path: '/sign-in',
    name: 'Sign In',
    icon: 'ni ni-key-25 text-info',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    icon: 'ni ni-circle-08 text-pink',
    component: SignUp,
  },
];

export default routes;
