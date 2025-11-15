import { useEffect, useState } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

export const useRemoteConfigUtility = () => {
  /**
   * states
   */
  const [remoteConfigAvailable, setRemoteConfigAvailable] =
    useState<boolean>(false);

  /**
   * effects
   */
  useEffect(() => {
    /**
     * fetch and activate firebase remote config
     */
    remoteConfig()
      .fetchAndActivate()
      .then(() => setRemoteConfigAvailable(true))
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  /**
   * handlers
   */
  const getRemoteConfigValue = (value: string) =>
    remoteConfig().getValue(value);

  /**
   * return result
   */
  return {
    remoteConfigAvailable,
    getValue: (value: string) => getRemoteConfigValue(value).asString(),
  };
};
