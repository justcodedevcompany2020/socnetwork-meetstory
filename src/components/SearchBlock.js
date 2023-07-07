import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput, Dimensions } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import { SearchIcon } from "../assets/svgs/AuthSvgs";

const {width} = Dimensions.get('screen')

export default function SearchBlock({value, setValue}) {
    return <View style={{ height: 40, backgroundColor: AppColors.WHITE_COLOR, margin: 20, paddingHorizontal: 10, borderRadius: 6, flexDirection: 'row', alignItems: 'center', width: width-40, justifyContent: 'space-between' }}>
        <TextInput placeholder="Поиск..."  style={[Styles.darkMedium14]} value={value} onChangeText={setValue} />
        <SearchIcon />
    </View>
}