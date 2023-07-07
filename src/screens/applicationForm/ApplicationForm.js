import React from "react";
import Container from "../../components/Container";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import HorizontalBlock from "../../components/HorizontalBlock";


export default function ApplicationFormScreen({ navigation }) {
    return <Container goBack headerTitle={'Анкета'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingHorizontal: 10 }]}>
            <ScrollView style={{ marginTop: 10, }}>
                <HorizontalBlock text={'Личные данные'} backImagePath={require('../../assets/pngs/BlockBack18.png')} onPress={() => navigation.navigate('PersonalInformation')} />
                <View style={Styles.flexRowJustifyBetween}>
                    <HorizontalBlock text={'Обо мне'} backImagePath={require('../../assets/pngs/BlockBack24.png')} width={'49%'} onPress={() => navigation.navigate('AboutMeScreen')} />
                    <HorizontalBlock text={'Внешний вид'} backImagePath={require('../../assets/pngs/BlockBack11.png')} width={'49%'} onPress={() => navigation.navigate('AppearanceScreen')} />
                </View>
                <HorizontalBlock text={'Предподчтения '} backImagePath={require('../../assets/pngs/BlockBack25.png')} onPress={() => navigation.navigate('PreferencesScreen')} />
            </ScrollView>
        </View>
    </Container>
}