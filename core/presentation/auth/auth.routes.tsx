import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignupRoutes } from './signup/signup.routes';
import { View } from 'react-native';

export const AuthRoutes = createBottomTabNavigator({
  screens: {
    signup: {
      screen: SignupRoutes,
      options: { headerShown: false },
    },
  },
  tabBar: () => <AuthRoutesTabBarComponent />,
});

const AuthRoutesTabBarComponent = () => <View></View>;
