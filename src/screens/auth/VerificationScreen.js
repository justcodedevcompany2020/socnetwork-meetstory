import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";


export default function VerificationScreen({navigation}) {
    const [code, setCode] = useState()

    return <Container>
        <View style={Styles.whiteContainer}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Регистрация</Text>
                <Text style={Styles.darkRegular15}>Мы отправили на ваш номер телефона 6-ти значный код, для проверки подлинности введите код безопастности ниже.</Text>
            </View>
            <Input labelText={'Код подтверждения'} value={code} setValue={setCode} inputType={'code'} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Продолжить'} onPress={() => navigation.navigate('AddInfoScreen')} margin/>
            </View>
        </View>
    </Container>
}