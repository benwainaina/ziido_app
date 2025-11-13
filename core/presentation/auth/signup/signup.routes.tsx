import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeSignupComponent } from './welcome/welcome.signup.component';
import { SignupTabbarComponent } from './signup.tabbar.component';

export const SignupRoutes = createBottomTabNavigator({
  screens: {
    welcome: {
      options: { headerShown: false },
      screen: WelcomeSignupComponent,
    },
  },
  tabBar: () => <SignupTabbarComponent />,
});
