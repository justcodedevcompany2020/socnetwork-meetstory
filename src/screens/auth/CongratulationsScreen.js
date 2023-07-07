import React from "react";
import Container from "../../components/Container";
import { Image, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";


export default function CongratulationsScreen({navigation}) {
    return <Container>
        <View style={Styles.whiteContainer}>
            <View style={{ marginTop: 25 }}>
                <Text style={[Styles.blackSemiBold28]}>Поздравляем!</Text>
                <Text style={[Styles.darkRegular15]}>Ваш аккаунт успешно создан.</Text>
            </View>
            <View style={{ alignSelf: 'center', width: 260, height: 260, marginBottom: 45 }}>
                <Image source={require('../../assets/pngs/RegisterSuccess.png')} style={{ width: 260, height: 260 }} />
            </View>
            <Button text={'Войти'} onPress={() => navigation.navigate('LoginScreen')} margin/>
        </View>
    </Container>
}