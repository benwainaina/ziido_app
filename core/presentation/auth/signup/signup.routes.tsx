import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeSignupComponent } from './welcome/welcome.signup.component';
import { SignupTabbarComponent } from './signup.tabbar.component';
import { AccountTypeSignupComponent } from './account-type/accountType.signup.component';

export const SignupRoutes = createBottomTabNavigator({
  screens: {
    welcome: {
      options: { headerShown: false },
      screen: WelcomeSignupComponent,
    },
    continueAs: {
      options: {
        headerShown: false,
      },
      screen: AccountTypeSignupComponent,
    },
  },
  tabBar: () => <SignupTabbarComponent />,
});
