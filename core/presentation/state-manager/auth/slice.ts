import { createSlice } from '@reduxjs/toolkit';
import { IAuthSliceKey, IAuthState } from './interfaces';

const initialState: IAuthState = {
  signup: {},
};

const authSlice = createSlice({
  initialState,
  name: IAuthSliceKey,
  reducers: {
    setUserPreferredExperience: (state, { payload: option }) => ({
      ...state,
      signup: {
        ...state.signup,
        continueAs: option,
      },
    }),
  },
});

export const { setUserPreferredExperience } = authSlice.actions;

export const authReducer = authSlice.reducer;
