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
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import { composeStore } from './store';
import App from './app';
import { ClientProvider } from 'client';
import { AuthProvider } from 'features/auth';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';
import 'assets/css/custom/vyom.css';

const endpoint = process.env.REACT_APP_CLIENT_ENDPOINT;

const store = composeStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <ClientProvider endpoint={endpoint}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ClientProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
