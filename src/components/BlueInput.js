import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import { Arrow } from "../assets/svgs/ProfileSvgs";


export default function BlueInput({ labelText, inputType, value, setValue, minLengthPass, error,placeholder,type,onPress }) {
    return <View style={styles.container}>
        <View style={[Styles.flexRowJustifyBetween,{marginBottom:10}]}>
            <Text style={Styles.blueMedium16}>{labelText}</Text>
            {minLengthPass && <Text style={Styles.blueSemiBold12}>Минимум 8 символов</Text>}
        </View>
        {
            type === 'button' ?
            <TouchableOpacity onPress={onPress} style = {[styles.input,Styles.flexRowJustifyBetween]}>
                <Text style = {{color:AppColors.WHITE_COLOR}}>{value}</Text>
                <Arrow />
            </TouchableOpacity>:
            <TextInput
                style={[styles.input]}
                value={value}
                onChangeText={setValue}
                maxLength={inputType == 'code' ? 6 : 50}
                keyboardType={inputType == 'phone' || inputType == 'code' ? 'phone-pad' : 'ascii-capable'}
                placeholder ={placeholder}
            />
        }
        </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    inputContainer: {
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        marginTop: 10,
        height: 50,
        borderRadius: 6,
    },
    input: {
        width: '100%',
        paddingHorizontal: 15,
        height: 50,
        color: AppColors.WHITE_COLOR,
        textAlignVertical: 'center',
        backgroundColor:AppColors.STEEL_BLUE_COLOR,
        borderRadius:6,
    },
    eyeContainer: {
        height: 50,
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})