import { TAccountTypeOptions } from '../shared/interfaces';

export interface IAuthState {
  /**
   * Signup configurations
   */
  signup: {
    /**
     * User selected platform experience
     */
    continueAs?: TAccountTypeOptions;
  };
}

export const IAuthSliceKey = 'authSlice';
