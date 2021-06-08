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

// plugins styles from node_modules
import 'react-notification-alert/dist/animate.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@fullcalendar/common/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'select2/dist/css/select2.min.css';
import 'react-quill/dist/quill.snow.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// syncfusion styles from node_modules
import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-buttons/styles/bootstrap4.css';
import '@syncfusion/ej2-calendars/styles/bootstrap4.css';
import '@syncfusion/ej2-dropdowns/styles/bootstrap4.css';
import '@syncfusion/ej2-inputs/styles/bootstrap4.css';
import '@syncfusion/ej2-navigations/styles/bootstrap4.css';
import '@syncfusion/ej2-popups/styles/bootstrap4.css';
import '@syncfusion/ej2-splitbuttons/styles/bootstrap4.css';
import '@syncfusion/ej2-react-grids/styles/bootstrap4.css';
import '@syncfusion/ej2-react-treegrid/styles/bootstrap4.css';

// plugins styles downloaded
import 'assets/vendor/nucleo/css/nucleo.css';

// core styles
import 'assets/scss/argon-dashboard-pro-react.scss?v1.2.0';

// custom styles
import 'assets/css/vyom.css';

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
