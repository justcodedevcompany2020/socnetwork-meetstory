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
import { BalanceNavigator } from './BalanceNavigator';

const Tab = createBottomTabNavigator();
const PayScreenComponent = () => {
  return null;
};

export default function NavigationMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        // tabBarStyle:  { height: 80, borderTopWidth: 0, elevation: 0 },
        tabBarStyle: (() => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          console.log(routeName);
          if (routeName === 'CommentsScreen' || routeName === 'ForumSingle') {
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
        component={PayScreenComponent}
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
        // options={{
        // }}

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
        name="BalanceNavigator"
        component={BalanceNavigator}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />
        }}
      />
    </Tab.Navigator>
  );
}
