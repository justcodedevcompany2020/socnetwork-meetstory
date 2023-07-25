import React from "react";
import Container from "../../components/Container";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";
import { AppColors } from "../../styles/AppColors";


export default function MyFriendsScreen() {
    return <Container goBack headerTitle={'Мои друзья'}>
        <Text style={styles.whiteText}> <Text style={Styles.whiteMedium15}> Друзей: </Text> 45 (<Text style={Styles.whiteMedium15}>Онлайн</Text>6)</Text>
        <View style={Styles.whiteContainer}>
            <ScrollView style={{ marginTop: 20, }} showsVerticalScrollIndicator={false}>
                <UserBlock moreIcon activityStatus />
                <UserBlock moreIcon activityStatus selected />
                <UserBlock moreIcon activityStatus />
                <UserBlock moreIcon activityStatus />
                <UserBlock moreIcon activityStatus />
                <UserBlock moreIcon activityStatus />
                <UserBlock moreIcon activityStatus />
            </ScrollView>
        </View>
    </Container>
}

const styles = StyleSheet.create({
    whiteText: {
        color: AppColors.WHITE_COLOR,
        fontSize: 15,
        width: '100%',
        paddingLeft: 20,
        marginVertical: 20
    }
})