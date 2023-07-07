import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Styles } from "../styles/Styles";
import { Diamond30Icon } from "../assets/svgs/ProfileSvgs";


export default function MyGiftBlock({ onPress }) {
    return <Shadow distance={3} containerStyle={{ marginBottom: 10, marginHorizontal: 5, marginTop: 3 }} style={{ width: '100%' }}>
        <TouchableOpacity onPress={onPress} style={[styles.container, Styles.flexRowJustifyBetween, { alignItems: 'flex-start' }]}>
            <View style={[Styles.flexRow, { alignItems: 'flex-start', width: '75%' }]}>
                <Shadow distance={3} containerStyle={{ marginRight: 15 }}>
                    <TouchableOpacity style={styles.imageBlock} onPress={onPress}>
                        <Diamond30Icon />
                    </TouchableOpacity>
                </Shadow>
                <View>
                    <Text style={Styles.darkMedium14}>От: John Smith</Text>
                    <Text style={Styles.darkRegular10}>Комментарий</Text>
                    <Text style={Styles.darkBlueSemiBold12}>Для тебя, С днём рождения</Text>
                </View>
            </View>
            <Text style={[Styles.darkBlueSemiBold10, { width: '30%' }]}>24 января 2023</Text>
        </TouchableOpacity>
    </Shadow>
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    imageBlock: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: 'white',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
})