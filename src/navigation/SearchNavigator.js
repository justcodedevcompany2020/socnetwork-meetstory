import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/search/SearchScreen';
import { UserScreen } from '../screens/User/userScreen';

const Stack = createNativeStackNavigator();

export const SearchNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'SearchScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false
                }}
            />
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