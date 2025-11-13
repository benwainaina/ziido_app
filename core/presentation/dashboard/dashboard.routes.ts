import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SessionsDashboardComponent } from './sessions/sessions.dashboard.component';

export const DashboardRoutes = createBottomTabNavigator({
  screens: {
    sessions: {
      screen: SessionsDashboardComponent,
      options: { headerShown: false },
    },
  },
});
