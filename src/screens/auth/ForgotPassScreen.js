import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import AcceptField from "../../components/AcceptField";
import Button from "../../components/Button";

export default function ForgotPassScreen({navigation}) {
    const [phone, setPhone] = useState()
    const [accepted, setAccepted] = useState(false)

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <View style={{marginVertical: 25}}>
                <Text style={Styles.blackSemiBold28}>Востоновление пароля</Text>
                <Text style={[Styles.darkRegular15, {marginTop: 15}]}>Укажите номер телефона использованный при регистрации</Text>
            </View>
            <Input labelText={'Номер телефона'} value={phone} setValue={setPhone} inputType={'phone'} />
            <AcceptField accepted={accepted} setAccepted={setAccepted} text={'Подтвердить что я не робот'} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Отправить код'} onPress={() => navigation.navigate('PassRecoveryScreen')} margin/>
            </View>
        </View>
    </Container>
}