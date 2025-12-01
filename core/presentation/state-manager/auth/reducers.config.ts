import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { IAuthSliceKey } from './interfaces';
import { authReducer } from './slice';

export const authPersistReducer = persistReducer(
  {
    storage: AsyncStorage,
    key: IAuthSliceKey,
    whitelist: ['signup.continueAs'],
  },
  authReducer,
);
