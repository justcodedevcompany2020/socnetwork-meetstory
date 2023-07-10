import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";

export default function Button({ text, onPress, loading, margin, height, marginBottom, backgroundColor, noFill,outLineColor }) {
    return <TouchableOpacity style={[styles.buttonContainer, margin && {marginHorizontal: 25}, height && {height: height}, backgroundColor && {backgroundColor: backgroundColor}, marginBottom && {marginBottom: marginBottom}, noFill && {backgroundColor: AppColors.WHITE_COLOR, borderWidth: 2, borderColor: AppColors.STEEL_BLUE_COLOR},outLineColor && {borderColor:outLineColor,borderWidth:2}]} onPress={onPress} >
        {loading ? <ActivityIndicator color={AppColors.WHITE_COLOR} size={'large'} /> : <Text style={[Styles.whiteSemiBold18, {marginBottom: 5}, noFill && {color: AppColors.STEEL_BLUE_COLOR},outLineColor && {color:AppColors.BLACK_COLOR}]}>{text}</Text>}
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