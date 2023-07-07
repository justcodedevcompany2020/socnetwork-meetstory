import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function NewPassScreen({navigation}) {
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <View style={{marginVertical: 25}}>
                <Text style={Styles.blackSemiBold28}>Востоновление пароля</Text>
                <Text style={[Styles.darkRegular15, {marginTop: 15}]}>Введите новый пароль для вашего аккаунта</Text>
            </View>
            <Input labelText={'Новый пароль'} value={pass} setValue={setPass} inputType={'pass'} minLengthPass />
            <Input labelText={'Новый пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Сохранить'} onPress={() => navigation.navigate('LoginScreen')}  margin/>
            </View>
        </View>
    </Container>
}