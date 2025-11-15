/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AppRoutes } from './core/presentation/app.routes';
import { AppInitializer } from './core/utilities/appInitializer.utility';
import { Provider } from 'react-redux';
import {
  STORE,
  STORE_PERSISTOR,
} from './core/presentation/state-manager/store';
import { PersistGate } from 'redux-persist/integration/react';

import './i18n.config';

const App = (): React.JSX.Element => {
  return (
    <React.StrictMode>
      <Provider store={STORE}>
        <PersistGate persistor={STORE_PERSISTOR}>
          <AppInitializer>
            <AppRoutes />
          </AppInitializer>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
