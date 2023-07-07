import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen } from '../screens/User/userScreen';

const Stack = createNativeStackNavigator();

export const SearchNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={'UserScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="UserScreen"
                component={UserScreen}
                options={{
                    headerShown: false
                }}
            />
          
        </Stack.Navigator>
    );
};