import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/search/SearchScreen';
import { UserScreen } from '../screens/User/userScreen';
import Header from './Header';
import { UserPostsScreen } from '../screens/User/UserPostsScreen';
import { UserPhotoScreen } from '../screens/User/UserPhotoScreen';
import { UserFriends } from '../screens/User/UserFriends';

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
            <Stack.Screen
                name="UserPostsScreen"
                component={UserPostsScreen}
                options={({ navigation,route }) => ({

                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={route.params.username} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="UserPhotoScreen"
                component={UserPhotoScreen}
                options={({ navigation,route }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={route.params.username} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="UserFriends"
                component={UserFriends}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};