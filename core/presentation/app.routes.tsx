import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { hasLoggedInGuardHook } from '../utilities/guards/hasLoggedInGuardHook.utility';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { isLoggedOutGuardHook } from '../utilities/guards/isLoggedOutGuardHook.utility';
import { AuthRoutes } from './auth/auth.routes';
import { createStaticNavigation } from '@react-navigation/native';

export const _AppRoutes = createNativeStackNavigator({
  screens: {
    dashboard: {
      if: hasLoggedInGuardHook,
      screen: DashboardRoutes,
      options: {
        headerShown: false,
      },
    },
    auth: {
      if: isLoggedOutGuardHook,
      screen: AuthRoutes,
      options: {
        headerShown: false,
      },
    },
  },
});

export const AppRoutes = createStaticNavigation(_AppRoutes);
