import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { ISharedSliceKey } from './interfaces';
import { sharedReducer } from './slice';

export const sharedPersistReducer = persistReducer(
  {
    storage: AsyncStorage,
    key: ISharedSliceKey,
    whitelist: ['userLocale'],
  },
  sharedReducer,
);
