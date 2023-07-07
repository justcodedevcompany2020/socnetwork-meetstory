import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";


export default function LoginScreen({ navigation }) {
    const [phone, setPhone] = useState()
    const [pass, setPass] = useState()

    return <Container>
        <ScrollView style={Styles.whiteContainer} showsVerticalScrollIndicator={false}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 30 }]}>Вход</Text>
            <Input labelText={'Номер телефона'} value={phone} setValue={setPhone} inputType={'phone'} />
            <Input labelText={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} />
            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => navigation.navigate('ForgotPassScreen')}>
                <Text style={[Styles.darkRegular15, { textDecorationLine: 'underline' }]}>Забыли пароль?</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 45 }}>
                <Button text={'Войти'} onPress={() => navigation.navigate('Menu')} margin/>
                <Text style={[Styles.darkMedium14, { textAlign: 'center', marginTop: 10 }]}>Нет аккаунта? <Text onPress={() => navigation.navigate('RegisterScreen')} style={{ color: AppColors.STEEL_BLUE_COLOR }}> Зарегистрироваться </Text> </Text>
            </View>
        </ScrollView>
    </Container>
}