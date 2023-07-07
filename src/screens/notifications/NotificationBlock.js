import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Styles } from "../../styles/Styles";
import { AppColors } from "../../styles/AppColors";

export default function NotificationBlock({notificationInfo}){
   
    return <Shadow distance={3} containerStyle={{ marginBottom: 10, marginHorizontal: 5, marginTop: 3 }} style={{ width: '100%' }}>
    <TouchableOpacity style={[styles.container, Styles.flexRowJustifyBetween, notificationInfo.new && { borderWidth: 1, borderColor: AppColors.STEEL_BLUE_COLOR }]}>
        <View style={[Styles.flexRow, { width: '100%', alignItems: 'flex-start'}]}>
            <Image source={notificationInfo.image} style={styles.image}/>
            <View style={{flexShrink: 1}}>
                <Text style={[Styles.darkSemiBold12, {marginBottom: 4}]}>{notificationInfo.notificationText}</Text>
                <Text style={Styles.darkBlueSemiBold10}>{notificationInfo.date}</Text>
            </View>
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
    }
})