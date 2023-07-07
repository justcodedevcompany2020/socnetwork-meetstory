import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";

export default function Button({ text, onPress, loading, margin, height, marginBottom, backgroundColor }) {
    return <TouchableOpacity style={[styles.buttonContainer, margin && {marginHorizontal: 25}, height && {height: height}, backgroundColor && {backgroundColor: backgroundColor}, marginBottom && {marginBottom: marginBottom}, ]} onPress={onPress}>
        {loading ? <ActivityIndicator color={AppColors.WHITE_COLOR} size={'large'} /> : <Text style={[Styles.whiteSemiBold18, {marginBottom: 5}]}>{text}</Text>}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 45,
        borderRadius: 10,
        backgroundColor: AppColors.STEEL_BLUE_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    }
})