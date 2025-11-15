import { createSelector } from '@reduxjs/toolkit';
import { IStore } from '../store';

const sharedSlice = (app: IStore) => app.sharedSlice;

export const selectListOfSupportedLocales = createSelector(
  sharedSlice,
  slice => slice.supportedLocales,
);

export const selectUserLocale = createSelector(
  sharedSlice,
  slice => slice.userLocale,
);
