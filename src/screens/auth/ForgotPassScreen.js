import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import AcceptField from "../../components/AcceptField";
import Button from "../../components/Button";
import { postRequest } from "../../api/RequestHelpers";

export default function ForgotPassScreen({ navigation }) {
    const [phone, setPhone] = useState('')
    const [accepted, setAccepted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        phone: false,
        accept: false
    });
    const [phoneError, setPhoneError] = useState(false)
    const [tryLater, setTryLater] = useState(false)

    function sendCode() {
        let myPhone = '+' + phone.replace(/\D/g, '')
        // let myPhone = '+37443413413'
        setLoading(true)

        let isValidInfo = validate();
        isValidInfo ?
            postRequest('forgot_password', {
                phone: myPhone
            }).then(([status, body]) => {
                console.log(body);
                if (status === 200) {
                    navigation.navigate('PassRecoveryScreen', { phone: myPhone })
                } else if (body.message == 'Wrong Phone') {
                    setPhoneError('Введите корректный номер телефона.')
                } else setTryLater(true)
                setLoading(false)
            }) : setLoading(false)
    }

    function validate() {
        let items = { ...errors };
        let error = false;
        setTryLater(false)

        if (!accepted) {
            items.accept = true;
            error = true;
        } else {
            items.accept = false;
        }

        if (!phone || phone == '+7 ') {
            items.phone = true;
            setPhoneError(false)
            error = true;
        } else if (phone.length < 22) {
            items.pass = true
            setPhoneError('Введите корректный номер телефона.')
            error = true
        } else {
            items.phone = false;
            setPhoneError(false)
        }

        setErrors(items);
        return !error
    }


    function onPressAccept() {
        setAccepted(!accepted)
        setErrors({ ...errors, accept: false })
    }


    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Востоновление пароля</Text>
                <Text style={[Styles.darkRegular15, { marginTop: 15 }]}>Укажите номер телефона использованный при регистрации</Text>
            </View>
            <Input labelText={'Номер телефона'} value={phone} setValue={setPhone} inputType={'phone'} error={errors.phone || phoneError} />
            {phoneError && (
                <Text style={Styles.redRegular12}>
                    {phoneError}
                </Text>
            )}
            <AcceptField accepted={accepted} onPressAccept={onPressAccept} text={'Подтвердить что я не робот'} error={errors.accept} />
            <View style={{ marginVertical: 45 }}>
                {tryLater && (
                    <Text style={[Styles.redRegular12, { textAlign: 'center' }]}>Попробуйте немного позже</Text>
                )}
                <Button text={'Отправить код'} onPress={sendCode} margin loading={loading} />
            </View>
        </View>
    </Container>
}