import { createSlice } from '@reduxjs/toolkit';
import { ISharedSliceKey, ISharedState } from './interfaces';

const initialState: ISharedState = {
  supportedLocales: [],
  userLocale: 'en',
};

const sharedSlice = createSlice({
  initialState,
  name: ISharedSliceKey,
  reducers: {
    setSupportedLocales: (state, { payload: locales }) => {
      state.supportedLocales = locales;
    },
    setUserLocale: (state, { payload: locale }) => {
      state.userLocale = locale;
    },
  },
});

export const { setSupportedLocales, setUserLocale } = sharedSlice.actions;

export const sharedReducer = sharedSlice.reducer;
