import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function PassRecoveryScreen({navigation}) {
    const [code, setCode] = useState()

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <View style={{marginVertical: 25}}>
                <Text style={Styles.blackSemiBold28}>Востоновление пароля</Text>
                <Text style={[Styles.darkRegular15, {marginTop: 15}]}>Укажите 6-ти значный код отпрвленный на ваш номер</Text>
            </View>
            <Input labelText={'Код подтверждения'} value={code} setValue={setCode} inputType={'code'} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Подтвердить'} onPress={() => navigation.navigate('NewPassScreen')} margin/>
            </View>
        </View>
    </Container>
}