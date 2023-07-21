import React from "react";
import { ActivityIndicator } from "react-native";
import { AppColors } from "../styles/AppColors";

export default function Loading({white, marginTop}){
    return <ActivityIndicator size={'large'} color={white ? AppColors.WHITE_COLOR : AppColors.STEEL_BLUE_COLOR} style={marginTop && {marginTop: marginTop}} />
}