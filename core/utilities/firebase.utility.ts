import analytics from '@react-native-firebase/analytics';

export const firebaseUtility = () => ({
  analytics: () => (__DEV__ ? '' : analytics().logAppOpen()),
  performance: () => (__DEV__ ? 'dev' : console.log('todo: performance')),
});
