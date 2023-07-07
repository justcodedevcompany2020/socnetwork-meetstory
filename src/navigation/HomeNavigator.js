import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import BecomeAnAuthority from '../screens/home/BecomeAnAuthority';
import Header from './Header';
import NewFacesScreen from '../screens/home/NewFacesScreen';
import GiftsScreen from '../screens/home/GiftsScreen';
import Top100Screen from '../screens/home/Top100Screen';
import HelpScreen from '../screens/home/HelpScreen';
import Top100OfSmth from '../screens/home/Top100ofSmth';
import ChooseFriendScreen from '../screens/home/ChooseFriendScreen';
import FeedScreen from '../screens/feed/FeedScreen';
import CommentsScreen from '../screens/feed/CommentsScreen';
import ForumScreen from '../screens/forum/ForumScreen';
import PopularTopics from '../screens/forum/PopularTopics';
import ForumSingle from '../screens/forum/ForumSingle';
import BuyingAuthority from '../screens/Balance/BuyingAuthority';
import { RaisingProfile } from '../screens/Balance/RaisingProfile';
import { GiftYourself } from '../screens/Balance/GiftYourself';
import { BalanceCongrats } from '../screens/Balance/BalanceCongrats';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BecomeAnAuthority"
                component={BecomeAnAuthority}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Стать авторитетом'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="NewFacesScreen"
                component={NewFacesScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Новые лица'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="GiftsScreen"
                component={GiftsScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Подарки'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="Top100Screen"
                component={Top100Screen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Топ 100'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Помощь'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="Top100OfSmth"
                component={Top100OfSmth}
                options={({ navigation, route }) => {
                    console.log(route.params.title)
                    return {
                        title: '',
                        headerTransparent: true,
                        header: () => (
                            <Header navigation={navigation} title={route.params.title} backIcon />
                        ),
                    }
                }}
            />
            <Stack.Screen
                name="ChooseFriendScreen"
                component={ChooseFriendScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="FeedScreen"
                component={FeedScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Лента'} backIcon plusIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="CommentsScreen"
                component={CommentsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ForumScreen"
                component={ForumScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Форум'} backIcon plusIcon />
                    ),
                })}
            />

            <Stack.Screen
                name="PopularTopics"
                component={PopularTopics}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Популярные темы'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="ForumSingle"
                component={ForumSingle}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={' '} blackBackIcon />
                    ),
                })}
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
                name="GiftYourself"
                component={GiftYourself}
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
        </Stack.Navigator>
    );
};