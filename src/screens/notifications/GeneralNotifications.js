import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import NotificationBlock from "./NotificationBlock";

export default function GeneralNotifications() {

    const notifications = [
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: true
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: true
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        },
        {
            notificationText: 'Пользователю James понравилось ваше фото',
            date: 'Cегодня в 13:44',
            image: require('../../assets/pngs/post1.png'),
            new: false
        }
    ]

    return <ScrollView style={{marginTop: 20, paddingHorizontal: 20}}>
        {notifications.map((item, i) => <NotificationBlock notificationInfo={item} key={i}/>)}

    </ScrollView>
}