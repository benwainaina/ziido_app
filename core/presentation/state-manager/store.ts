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

export interface IStore {
  [ISharedSliceKey]: ISharedState;
}

export let STORE = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
    },
    combineReducers({
      [ISharedSliceKey]: sharedPersistReducer,
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
