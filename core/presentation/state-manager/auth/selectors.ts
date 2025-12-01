import { createSelector } from '@reduxjs/toolkit';
import { IStore } from '../store';

const authSlice = (app: IStore) => app.authSlice;

export const selectUserPreferredExperience = createSelector(
  authSlice,
  slice => slice.signup.continueAs,
);
