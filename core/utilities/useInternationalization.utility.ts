import { useEffect, useState } from 'react';
import 'intl-pluralrules';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';
import { NativeModules } from 'react-native';

import { TDynamicKeys } from '../shared/interfaces';
import { useRemoteConfigUtility } from './useRemoteConfig.utility';
import {
  selectListOfSupportedLocales,
  selectUserLocale,
} from '../presentation/state-manager/shared/selectors';
import { jsonStringToObjectUtility } from './jsonStringToObject.utility';
import {
  LOCALIZATION_MAPPING,
  REMOTE_CONFIG_CONSTANTS_SUPPORTED_LANGUAGES,
} from '../shared/constants/remoteConfig.constants';
import {
  setSupportedLocales,
  setUserLocale,
} from '../presentation/state-manager/shared/slice';

export const useInternationalizationUtility = () => {
  /**
   * hooks
   */
  const { t: translate } = useTranslation();
  const { remoteConfigAvailable, getValue } = useRemoteConfigUtility();
  const dispatch = useDispatch();

  /**
   * states
   */
  const [i18nAvailable, seti18nAvailable] = useState<boolean>(false);

  /**
   * selectors
   */
  const userLocale = useSelector(selectUserLocale);
  const supportedLocales = useSelector(selectListOfSupportedLocales);

  /**
   * effects
   */
  useEffect(() => {
    if (remoteConfigAvailable) {
      if (!supportedLocales?.length) {
        const locales = jsonStringToObjectUtility(
          getValue(REMOTE_CONFIG_CONSTANTS_SUPPORTED_LANGUAGES),
        );
        dispatch(setSupportedLocales(locales));
      } else {
        supportedLocales.forEach(locale => {
          const resources = jsonStringToObjectUtility(
            getValue(LOCALIZATION_MAPPING[locale.code.toUpperCase()]) || '{}',
          );
          i18n.addResourceBundle(
            locale.code.toLowerCase(),
            'translation',
            resources,
            true,
            true,
          );
        });
        seti18nAvailable(true);
      }
    }
  }, [remoteConfigAvailable, supportedLocales]);

  useEffect(() => {
    if (i18nAvailable) {
      changeLanguage(userLocale || 'en');
    }
  }, [i18nAvailable]);

  useEffect(() => {
    /**
     * set a supported locale if it is not already there
     */
    if (supportedLocales?.length) {
      if (!userLocale) {
        let deviceLanguage =
          NativeModules.I18nManager.localeIdentifier.split('_')[0];
        deviceLanguage = deviceLanguage?.toLowerCase() || '';
        const languageIsSupported = supportedLocales.find(
          locale => locale.code === deviceLanguage,
        );
        if (!languageIsSupported) {
          deviceLanguage = 'en';
        }
        dispatch(setUserLocale(deviceLanguage));
      } else {
        changeLanguage(userLocale);
      }
    }
  }, [userLocale, supportedLocales]);

  /**
   * handler
   */
  const changeLanguage = (locale: string) => i18n.changeLanguage(locale);

  return {
    translate: (translationString: string, values?: TDynamicKeys) =>
      translate(translationString, values),
    i18nAvailable,
  };
};
