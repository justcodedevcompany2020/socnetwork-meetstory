import React from "react";
import Container from "../../components/Container";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";

export default function PreferencesScreen() {

    return <Container goBack headerTitle={'Предпочтения'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView>
                <Text style={Styles.darkMedium15}>Познакомлюсь</Text>
                <TextInput multiline style={[Styles.input, {height: 125, marginBottom: 15}]} numberOfLines={10} placeholder="С женщиной в возрасте 31 - 39 лет в районе Ашхабад, Туркменистан" />
                <Text style={Styles.darkMedium15}>Цель знакомства</Text>
                <TextInput multiline style={[Styles.input, {height: 125}]} numberOfLines={10} placeholder="Дружба, любовь, брак, встреча" />
                <Button text={'Сохранить'} margin />
            </ScrollView>
        </View>
    </Container>
}