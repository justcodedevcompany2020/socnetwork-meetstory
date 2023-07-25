import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { postRequest } from "../../api/RequestHelpers";

export default function NewPassScreen({ navigation, route }) {
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const { phone, code } = route.params
    const [errors, setErrors] = useState({
        pass: false,
        confirmPass: false,
        confirmPassMsg: false,
        passMsg: false,
    });

    const [tryLater, setTryLater] = useState(false)
    const [loading, setLoading] = useState(false)

    function savePass() {
        setLoading(true)

        let isValidInfo = validate();
        isValidInfo ?
            postRequest('add_new_password_from_forgot_password', {
                phone: phone,
                code: code,
                password: pass,
                password_confirmation: confirmPass

            }).then(([status, data]) => {
                if (status == 200) {
                    navigation.navigate('LoginScreen')
                } else setTryLater(true)
            })
            : setLoading(false)
    }

    function validate() {

        let items = { ...errors };
        let error = false;
        if (!pass) {
            items.pass = true;
            items.passMsg = false;
            error = true;
        } else if (pass && pass.length < 8) {
            items.pass = true;
            items.passMsg = true;
            error = true;
        } else {
            items.pass = false;
            items.passMsg = false;
        }

        if (!confirmPass) {
            items.confirmPass = true;
            items.confirmPassMsg = false;
            error = true;
        } else if ((pass && confirmPass) && (pass != confirmPass)) {
            items.confirmPassMsg = true;
            error = true;
        } else {
            items.confirmPass = false;
            items.confirmPassMsg = false;
        }

        setTryLater(false)
        setErrors(items);
        return !error
    }

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Востоновление пароля</Text>
                <Text style={[Styles.darkRegular15, { marginTop: 15 }]}>Введите новый пароль для вашего аккаунта</Text>
            </View>
            <Input labelText={'Новый пароль'} value={pass} setValue={setPass} inputType={'pass'} minLengthPass error={errors.pass || errors.passMsg || errors.confirmPassMsg} />
            {errors.passMsg && (
                <Text style={Styles.redRegular12}>
                    Пароль должен содержать не менее 8 символов.
                </Text>
            )}
            <Input labelText={'Подтвердите пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} error={errors.confirmPass || errors.confirmPassMsg} />
            {errors.confirmPassMsg && (
                <Text style={Styles.redRegular12}>Пароли не совпадают.</Text>
            )}
            <View style={{ marginVertical: 45 }}>
                {tryLater && (
                    <Text style={[Styles.redRegular12, { textAlign: 'center' }]}>Попробуйте немного позже</Text>
                )}
                <Button text={'Сохранить'} onPress={savePass} margin loading={loading} />
            </View>
        </View>
    </Container>
}