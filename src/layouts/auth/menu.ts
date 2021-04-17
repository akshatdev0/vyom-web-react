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
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

const menu: MenuArray = [
  {
    identifier: 'signIn',
    name: 'Sign In',
    path: '/sign-in',
    icon: 'ni ni-key-25 text-info',
    component: SignIn,
  },
  {
    identifier: 'signUp',
    name: 'Sign Up',
    path: '/sign-up',
    icon: 'ni ni-circle-08 text-pink',
    component: SignUp,
  },
];

export default menu;
