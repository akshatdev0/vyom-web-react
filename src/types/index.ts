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

import { SignInMutation, UsersPermissionsUser } from 'generated/graphql';

export type Maybe<T> = T | null | undefined;

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type AuthUserTokenPayload = SignInMutation['signIn'];

export type User = Pick<
  UsersPermissionsUser,
  'id' | 'firstName' | 'lastName' | 'dateOfBirth' | 'gender' | 'mobileNumber' | 'alternateMobileNumber' | 'email'
>;
