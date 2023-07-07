import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Styles } from "../../styles/Styles";
import { AppColors } from "../../styles/AppColors";

export default function FriendRequestBlock({ requestInfo }) {
    return <Shadow distance={3} containerStyle={{ marginBottom: 10, marginHorizontal: 5, marginTop: 3 }} style={{ width: '100%' }}>
        <TouchableOpacity style={styles.container}>
            <View style={[Styles.flexRow, { width: '100%', alignItems: 'flex-start' }]}>
                <Image source={requestInfo.image} style={styles.image} />
                <View style={{ flexShrink: 1 }}>
                    <Text style={[Styles.darkMedium12, { marginBottom: 4 }]}>Пользователь {requestInfo.name} отправил запрос на добавления в друзья</Text>
                    <Text style={Styles.darkBlueSemiBold10}>{requestInfo.date}</Text>
                </View>
            </View>
            <View style={[Styles.flexRowJustifyBetween, { marginTop: 15 }]}>
                <TouchableOpacity style={[styles.button, { backgroundColor: AppColors.STEEL_BLUE_COLOR }]}>
                    <Text style={[Styles.whiteSemiBold10, { marginBottom: 3 }]}>Принять</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: AppColors.BITTERSWEET_COLOR }]}>
                    <Text style={[Styles.whiteSemiBold10, { marginBottom: 3 }]}>Отказаться</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </Shadow> 
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 15
    },
    button: {
        height: 20,
        borderRadius: 4,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})