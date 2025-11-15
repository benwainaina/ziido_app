export interface ISupportedLocale {
  /**
   * Code for the locale eg EN
   */
  code: string;

  /**
   * Label for the locale eg English
   */
  label: string;
}

export interface ISharedState {
  /**
   * User defined locale and the default is EN
   */
  userLocale?: string;

  /**
   * List of supported locales
   */
  supportedLocales: ISupportedLocale[];
}

export const ISharedSliceKey = 'sharedSlice';
