import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../styles/AppColors";
import { BackIcon, FilterIcon } from "../assets/svgs/AuthSvgs";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "../styles/Styles";


export default function Container(props) {
    const navigation = useNavigation();
    
    return <View style={{ flex: 1, backgroundColor: AppColors.STEEL_BLUE_COLOR, paddingTop: 50, alignItems: 'center' }} >
        {props.goBack &&
            <TouchableOpacity style={{position: 'absolute', width: 35, height: 35, left: 10, top: 50, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.goBack()} >
                <BackIcon />
            </TouchableOpacity>
        }
        {props.headerTitle && <Text style={Styles.whiteSemiBold20}>{props.headerTitle}</Text>}
        {!props.headerTitle && <Image source={require('../assets/pngs/Logo.png')} style={{ width: 155, height: 34, marginBottom: 20 }} />}
        {props.filterIcon && <TouchableOpacity style={{position: 'absolute', width: 35, height: 35, right: 10, top: 50, alignItems: 'center', justifyContent: 'center'}}>
            <FilterIcon/>
        </TouchableOpacity> }
        {props.children}
    </View>
}