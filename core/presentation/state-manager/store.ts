import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ISharedSliceKey, ISharedState } from './shared/interfaces';
import { sharedPersistReducer } from './shared/reducers.config';
import { IAuthSliceKey, IAuthState } from './auth/interfaces';
import { authPersistReducer } from './auth/reducers.config';

export interface IStore {
  [ISharedSliceKey]: ISharedState;
  [IAuthSliceKey]: IAuthState;
}

export let STORE = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
    },
    combineReducers({
      [ISharedSliceKey]: sharedPersistReducer,
      [IAuthSliceKey]: authPersistReducer,
    }),
  ),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: {},
      },
    }),
});

export let STORE_PERSISTOR = persistStore(STORE);
