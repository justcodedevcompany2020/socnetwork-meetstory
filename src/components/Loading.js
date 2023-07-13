import React from "react";
import { ActivityIndicator } from "react-native";
import { AppColors } from "../styles/AppColors";

export default function Loading(){
    return <ActivityIndicator size={'large'} color={AppColors.STEEL_BLUE_COLOR}/>
}