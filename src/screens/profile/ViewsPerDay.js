import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";

export default function ViewsPerDay() {
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{paddingHorizontal: 20}}>
            <UserBlock activityStatus moveEnd />
            <UserBlock activityStatus moveEnd selected />
            <UserBlock activityStatus moveEnd />
            <UserBlock activityStatus moveEnd />
        </ScrollView>
    </View>
}