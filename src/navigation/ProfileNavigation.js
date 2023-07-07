import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SalesSinglePage from '../screens/sales/sales/SalesSinglePage';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'ProfileScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false
                }}
            />
          
        </Stack.Navigator>
    );
};