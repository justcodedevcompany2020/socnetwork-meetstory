import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/search/SearchScreen';
import { UserScreen } from '../screens/user/UserScreen';
import Header from './Header';
import { UserPostsScreen } from '../screens/user/UserPostsScreen';
import { UserPhotoScreen } from '../screens/user/UserPhotoScreen';
import { UserFriends } from '../screens/user/UserFriends';
import AdvancedSearchScreen from '../screens/search/AdvancedSearchScreen';

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
             <Stack.Screen
                name="AdvancedSearchScreen"
                component={AdvancedSearchScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};