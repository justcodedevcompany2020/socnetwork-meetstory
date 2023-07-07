import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPassScreen from '../screens/auth/ForgotPassScreen';
import PassRecoveryScreen from '../screens/auth/PassRecoveryScreen';
import NewPassScreen from '../screens/auth/NewPassScreen';
import VerificationScreen from '../screens/auth/VerificationScreen';
import AddInfoScreen from '../screens/auth/AddInfoScreen';
import AddProfilePhoto from '../screens/auth/AddProfilePhoto';
import CongratulationsScreen from '../screens/auth/CongratulationsScreen';
import NavigationMenu from './NavigationMenu';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName={'Menu'}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
        })}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassScreen"
          component={ForgotPassScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PassRecoveryScreen"
          component={PassRecoveryScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewPassScreen"
          component={NewPassScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddInfoScreen"
          component={AddInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddProfilePhoto"
          component={AddProfilePhoto}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="CongratulationsScreen"
          component={CongratulationsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={NavigationMenu}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
