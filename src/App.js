import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

import Switcher from '@/pages';
import configureStore, { history } from '@/redux/configureStore';
import theme from '@/styles';

const store = configureStore();

const APP = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switcher />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);

export default APP;
