import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ProfileIcon,
  SearchIcon,
  HomeIcon,
  NotificationsIcon,
} from '../assets/svgs/NavigationMenuSvgs';
import { HomeNavigator } from './HomeNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import NotificationsScreen from '../screens/notifications/NotificationsScreen';
import Header from './Header';
import { SearchNavigator } from './SearchNavigator';
import { ProfileNavigator } from './ProfileNavigation';

const Tab = createBottomTabNavigator();

export default function NavigationMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        // tabBarStyle:  { height: 80, borderTopWidth: 0, elevation: 0 },
        tabBarStyle: (() => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (routeName === 'CommentsScreen' || routeName === 'ForumSingle' || routeName === 'ChangeTemaScreen' || routeName === 'accountAndSecurityScreen' || routeName === 'PrivacyScreen' || routeName === 'ChatScreen' || routeName === 'SettingScreen' || routeName === 'AboutUs' || routeName === 'ChangePasswordScreen' || routeName === 'NotificationScreen') {
            return {
              display: 'none',
              height: 0
            };
          }
          return { height: 80, borderTopWidth: 0, elevation: 0 };
        })(route),
      })}
    >
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          title: '',
          headerTransparent: true,
          header: () => (
            <Header navigation={navigation} title={'Уведомления'} />
          ),
          tabBarIcon: ({ focused }) => <NotificationsIcon focused={focused} />
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />
        }}
      />
    </Tab.Navigator>
  );
}
