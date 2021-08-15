import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import theme from 'assets/theme/theme';
import { ClientProvider } from 'client';
import { AuthProvider } from 'features/auth';

import App from './app';
import { composeStore } from './store';

// plugins styles from node_modules
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-quill/dist/quill.snow.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// plugins styles
import 'assets/vendor/nucleo/css/nucleo.css';

// core styles
// eslint-disable-next-line
import 'assets/scss/argon-dashboard-pro-material-ui.scss?v1.0.0';

// custom styles
import 'assets/css/vyom.css';

const endpoint = process.env.REACT_APP_CLIENT_ENDPOINT;

const store = composeStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <ClientProvider endpoint={endpoint}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </ClientProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
