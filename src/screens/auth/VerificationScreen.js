import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { postRequest } from "../../api/RequestHelpers";


export default function VerificationScreen({ navigation, route }) {
    const [code, setCode] = useState()
    const [codeError, setCodeError] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const [loading, setLoading] = useState(false)
    const { phone } = route.params

    function verify() {
        setLoading(true)
        if (!code) {
            setCodeError(true);
            setShowErrorMsg(false)
            setLoading(false)
        } else if (code.length < 4) {
            setCodeError(true);
            setShowErrorMsg(
                'Код безопасности должен содержать не менее 4 символов.',
            );
            setLoading(false)
        } else {
            setCodeError(false);
            setShowErrorMsg(false);
            postRequest('verify_registration', {
                phone: phone,
                code: code,
            }).then(([status, body]) => {
                console.log(body);
                if (status === 200) {
                    //dispatch token
                    navigation.navigate('AddInfoScreen')
                } else if (422) {
                    setCodeError(true);
                    setShowErrorMsg('Неверный код');
                }
                setLoading(false)
            });
        }
    }

    return <Container>
        <View style={Styles.whiteContainer}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Регистрация</Text>
                <Text style={Styles.darkRegular15}>Мы отправили 4-значный код на ваш номер телефона, для проверки подлинности введите код безопастности ниже.</Text>
            </View>
            <Input labelText={'Код подтверждения'} value={code} setValue={setCode} inputType={'code'} error={codeError} />
            {showErrorMsg && <Text style={Styles.redRegular12}>{showErrorMsg}</Text>}
            <View style={{ marginVertical: 45 }}>
                <Button text={'Продолжить'} onPress={verify} margin loading={loading} />
            </View>
        </View>
    </Container>
}
