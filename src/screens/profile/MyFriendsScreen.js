import React from "react";
import Container from "../../components/Container";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";


export default function MyFriendsScreen() {
    return <Container goBack headerTitle={'Мои друзья'}>
        <Text style={[Styles.whiteMedium15, { width: '100%', paddingLeft: 20, marginVertical: 20 }]}>Друзей: 45 (Онлайн 6)</Text>
        <View style={Styles.whiteContainer}>
            <ScrollView style={{ marginTop: 20, }} showsVerticalScrollIndicator={false}>
                <UserBlock moreIcon activityStatus friend />
                <UserBlock moreIcon activityStatus selected friend />
                <UserBlock moreIcon activityStatus friend />
                <UserBlock moreIcon activityStatus friend />
                <UserBlock moreIcon activityStatus friend /> 
                <UserBlock moreIcon activityStatus friend />
                <UserBlock moreIcon activityStatus friend />
            </ScrollView>
        </View>
    </Container>
}