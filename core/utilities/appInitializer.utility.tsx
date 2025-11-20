import { useEffect } from 'react';
import { firebaseUtility } from './firebase.utility';
import { useRemoteConfigUtility } from './useRemoteConfig.utility';
import { useInternationalizationUtility } from './useInternationalization.utility';
import BootSplash from 'react-native-bootsplash';

export const AppInitializer = ({ children }: any) => {
  /**
   * hooks
   */
  useRemoteConfigUtility();
  const { i18nAvailable } = useInternationalizationUtility();

  /**
   * Effects
   */
  useEffect(() => {
    if (i18nAvailable) {
      (async () => {
        await BootSplash.hide();
      })();
    }
  }, [i18nAvailable]);

  useEffect(() => {
    firebaseUtility().analytics();
  }, []);

  return <>{children}</>;
};
