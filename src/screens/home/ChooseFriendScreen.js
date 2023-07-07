import React from "react";
import Container from "../../components/Container";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";


export default function ChooseFriendScreen() {
    return <Container goBack headerTitle={'Выберите друга'}>
        <Text style={[Styles.whiteMedium15, { margin: 20, alignSelf: 'flex-start', }]}>Друзей: 45 (Онлайн 6)</Text>
        <View style={Styles.whiteContainer}>
            <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
                <UserBlock activityStatus moveEnd />
                <UserBlock activityStatus moveEnd selected />
                <UserBlock activityStatus moveEnd  />
                <UserBlock activityStatus moveEnd />
                <UserBlock activityStatus moveEnd />
                <UserBlock activityStatus moveEnd />
                <UserBlock activityStatus moveEnd />
                <UserBlock activityStatus moveEnd /> 
                <UserBlock activityStatus moveEnd />
            </ScrollView>
        </View>
    </Container>
}