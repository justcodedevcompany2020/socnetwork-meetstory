import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import { Arrow } from "../assets/svgs/ProfileSvgs";


export default function BlueInput({ labelText, value, onPress, arrow }) {
    return <View style={{ marginBottom: 15 }}>
        <View style={[Styles.flexRowJustifyBetween, { marginBottom: 10 }]}>
            <Text style={Styles.blueMedium16}>{labelText}</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={[styles.input, Styles.flexRowJustifyBetween]}>
            <Text style={{ color: AppColors.WHITE_COLOR, fontSize: 15 }}>{value}</Text>
            {arrow && <Arrow />}
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: AppColors.STEEL_BLUE_COLOR,
        borderRadius: 6,
    },

})