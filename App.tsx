/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AppRoutes } from './core/presentation/app.routes';
import BootSplash from 'react-native-bootsplash';
import { AppInitializer } from './core/utilities/appInitializer.utility';

const App = (): React.JSX.Element => {
  useEffect(() => {
    (async () => {
      await BootSplash.hide();
    })();
  }, []);

  return (
    <React.StrictMode>
      <AppInitializer>
        <AppRoutes />
      </AppInitializer>
    </React.StrictMode>
  );
};

export default App;
