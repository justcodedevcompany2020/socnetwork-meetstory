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
import ApplicationFormScreen from '../screens/applicationForm/ApplicationForm';
import PersonalInformation from '../screens/applicationForm/PersonalInformation';
import AboutMeScreen from '../screens/applicationForm/AboutMeScreen';
import PreferencesScreen from '../screens/applicationForm/PreferencesScreen';
import AppearanceScreen from '../screens/applicationForm/AppearanceScreen';
import { SettingScreen } from '../screens/settings/SettingScreen';
import { AboutUs } from '../screens/settings/AboutUs';
import { NotificationScreen } from '../screens/settings/NotificationScreen';
import { ChangePasswordScreen } from '../screens/settings/ChangePasswordScreen';
import { PrivacyScreen } from '../screens/settings/PrivacyScreen';
import { ChangeTemaScreen } from '../screens/settings/ChangeTemaScreen';
import { AccountAndSecurityScreen } from '../screens/settings/AccountAndSecurityScreen';
import { UserScreen } from '../screens/user/UserScreen';
import ViewsPerDay from '../screens/profile/ViewsPerDay';
import BalanceScreen from '../screens/Balance/BalanceScreen';
import AddBalanceScreen from '../screens/Balance/AddBalanceScreen';
import PaymentMetod from '../screens/Balance/PaymentMetod';
import { BalanceHistory } from '../screens/Balance/BalanceHistory';
import BuyingAuthority from '../screens/Balance/BuyingAuthority';
import { RaisingProfile } from '../screens/Balance/RaisingProfile';
import { BalanceCongrats } from '../screens/Balance/BalanceCongrats';
import { BalanceCongrats1 } from '../screens/Balance/BalanceCongrats1';
import { NoBalance } from '../screens/Balance/NoBalance';

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
                name="ApplicationFormScreen"
                component={ApplicationFormScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PersonalInformation"
                component={PersonalInformation}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="AboutMeScreen"
                component={AboutMeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PreferencesScreen"
                component={PreferencesScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AppearanceScreen"
                component={AppearanceScreen}
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
                name="AboutUs"
                component={AboutUs}
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
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
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
            <Stack.Screen
                name="AccountAndSecurityScreen"
                component={AccountAndSecurityScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ChangeTemaScreen"
                component={ChangeTemaScreen}
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
                name="ViewsPerDay"
                component={ViewsPerDay}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Просмотры за день'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="BalanceScreen"
                component={BalanceScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AddBalanceScreen"
                component={AddBalanceScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PaymentMetod"
                component={PaymentMetod}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BalanceHistory"
                component={BalanceHistory}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BuyingAuthority"
                component={BuyingAuthority}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RaisingProfile"
                component={RaisingProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BalanceCongrats"
                component={BalanceCongrats}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BalanceCongrats1"
                component={BalanceCongrats1}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="NoBalance"
                component={NoBalance}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};
