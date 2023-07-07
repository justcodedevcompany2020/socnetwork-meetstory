import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";


export default function NewFacesScreen() {
    return <View style={[Styles.containerTopPadding, ]}>
        <ScrollView style={{paddingTop: 5, paddingHorizontal: 20 }} >
            <UserBlock chatIcon activityStatus />
            <UserBlock chatIcon activityStatus selected />
            <UserBlock chatIcon activityStatus />
            <UserBlock chatIcon activityStatus />
            <UserBlock chatIcon activityStatus selected />
            <UserBlock chatIcon activityStatus />
            <UserBlock chatIcon activityStatus />
            <UserBlock chatIcon activityStatus />
            <UserBlock chatIcon activityStatus /> 
        </ScrollView>
    </View>
}