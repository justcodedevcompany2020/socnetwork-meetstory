import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";


export default function Top100OfSmth() {
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{paddingHorizontal: 15}} showsVerticalScrollIndicator={false}>
            <UserBlock rating />
            <UserBlock rating />
            <UserBlock rating />
            <UserBlock rating />
            <UserBlock rating />
            <UserBlock rating />
        </ScrollView>
    </View>
}