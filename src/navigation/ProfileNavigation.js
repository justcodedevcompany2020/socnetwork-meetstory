import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import MyFriendsScreen from '../screens/profile/MyFriendsScreen';
import MyFeedScreen from '../screens/profile/MyFeedScreen';
import Header from './Header';
import AddPostScreen from '../screens/profile/AddPostScreen';
import MyPhotosScreen from '../screens/profile/MyPhotosScreen';
import AddPhotoScreen from '../screens/profile/AddPhotoScreen';
import MyGiftsScreen from '../screens/profile/MyGiftsScreen';
import { SettingScreen } from '../screens/settings/SettingScreen';
import { AboutAs } from '../screens/settings/AboutAs';
import { BalanceCongrats } from '../screens/Balance/BalanceCongrats';
import { NotificationScreen } from '../screens/settings/NotificationScreen';
import { ChnagePasswordScreen } from '../screens/settings/ChnagePasswordScreen';
import { PrivacyScreen } from '../screens/settings/PrivacyScreen';

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'MyProfileScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="MyProfileScreen"
                component={MyProfileScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MyFriendsScreen"
                component={MyFriendsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MyFeedScreen"
                component={MyFeedScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Моя стена'} backIcon plusIcon onPressPlus={() => navigation.navigate('AddPostScreen')} />
                    ),
                })}
            />
            <Stack.Screen
                name="AddPostScreen"
                component={AddPostScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MyPhotosScreen"
                component={MyPhotosScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Мои фотографии'} backIcon plusIcon onPressPlus={() => navigation.navigate('AddPhotoScreen')} />
                    ),
                })}
            />
            <Stack.Screen
                name="AddPhotoScreen"
                component={AddPhotoScreen}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="MyGiftsScreen"
                component={MyGiftsScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Мои Подарки'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="BalanceCongrats"
                component={BalanceCongrats}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AboutAs"
                component={AboutAs}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ChnagePasswordScreen"
                component={ChnagePasswordScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PrivacyScreen"
                component={PrivacyScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};
// ChnagePasswordScreen
// PrivacyScreen