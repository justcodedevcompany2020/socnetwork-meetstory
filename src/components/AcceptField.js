import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CheckedIcon, UncheckedIcon } from "../assets/svgs/AuthSvgs";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";

export default function AcceptField({ accepted, onPressAccept, text, error }) {
    return <TouchableOpacity style={[Styles.flexRow, { marginBottom: 10 }]} onPress={onPressAccept}>
        {accepted ?
            <CheckedIcon />
            :
            <View style={error && { borderWidth: 1, borderColor: AppColors.RED_COLOR, borderRadius: 4 }}>
                <UncheckedIcon />
            </View>
        }
        <Text style={[Styles.darkMedium15, { marginBottom: 5 }]}>  {text}</Text>
    </TouchableOpacity>
}