import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { CheckedIcon, UncheckedIcon } from "../assets/svgs/AuthSvgs";
import { Styles } from "../styles/Styles";

export default function AcceptField({ accepted, setAccepted, text }) {
    return <TouchableOpacity style={[Styles.flexRow, {marginBottom: 10}]} onPress={() => setAccepted(!accepted)}>
        {accepted ? <CheckedIcon /> : <UncheckedIcon />}
        <Text style={[Styles.darkMedium15, {marginBottom: 5}]}>  {text}</Text>
    </TouchableOpacity>
}