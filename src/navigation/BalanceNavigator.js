import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

export const BalanceNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'BalanceScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
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