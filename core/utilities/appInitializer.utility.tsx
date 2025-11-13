import { useEffect } from 'react';
import { firebaseUtility } from './firebase.utility';
import { useRemoteConfigUtility } from './useRemoteConfig.utility';

export const AppInitializer = ({ children }: any) => {
  /**
   * hooks
   */
  useRemoteConfigUtility();

  useEffect(() => {
    firebaseUtility().analytics();
    console.log('haha');
  }, []);

  return <>{children}</>;
};
