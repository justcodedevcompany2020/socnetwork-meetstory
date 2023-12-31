import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { postRequest } from "../../api/RequestHelpers";
import { useDispatch } from "react-redux";
import { saveToken } from "../../store/actions/saveToken";


export default function LoginScreen({ navigation }) {
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState()

    const [error, setError] = useState(false)
    const [errors, setErrors] = useState({
        pass: false,
        phone: false,
    })
    const dispatch = useDispatch()

    function onPressLogin() {
        let myPhone = '+' + phone.replace(/\D/g, '')
        setLoading(true)

        let isValidInfo = validateData();
        isValidInfo ?
            postRequest('login', {
                phone: myPhone,
                password: pass,
            }).then(([status, data]) => {
                if (status === 200) {
                    dispatch(saveToken(data.token))
                    navigation.navigate('Menu', {
                        screen: 'Home', params: {
                            screen: 'HomeScreen'
                        }
                    });
                    clearData()
                } else if (status === 401 || status === 400) {
                    setError('Неверный ввод данных. Повторите попытку.');
                }
                setLoading(false)
            }) : setLoading(false)
    }


    function validateData() {
        let myErrors = { ...errors };
        let error = false;

        myErrors.pass = !pass
        myErrors.phone = !phone || phone == '+7 '

        if (pass && phone && (pass.length < 8 || phone.length < 22)) {
            setError(true)
        } else setError(false)

        error = !pass || !phone || pass.length < 8 || phone.length < 22 ? true : false
        setErrors(myErrors);
        return !error;
    }

    function clearData() {
        setErrors({
            pass: false,
            phone: false,
        })
        setError(false)
        setPhone(null)
        setPass(null)
    }

    return <Container>
        <ScrollView style={Styles.whiteContainer} showsVerticalScrollIndicator={false}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 30 }]}>Вход</Text>
            <Input labelText={'Номер телефона'} value={phone} setValue={setPhone} inputType={'phone'} error={errors.phone} />
            <Input labelText={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} error={errors.pass} />
            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => { navigation.navigate('ForgotPassScreen'); clearData() }}>
                <Text style={[Styles.darkRegular15, { textDecorationLine: 'underline' }]}>Забыли пароль?</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 45 }}>
                {error && <Text style={[Styles.darkRegular12, { color: AppColors.RED_COLOR, marginBottom: 10, textAlign: 'center' }]}>Неверный ввод данных. Повторите попытку.</Text>}
                <Button text={'Войти'} onPress={onPressLogin} margin loading={loading} />
                <Text style={[Styles.darkMedium14, { textAlign: 'center', marginTop: 10 }]}>Нет аккаунта? <Text onPress={() => { navigation.navigate('RegisterScreen'); clearData() }} style={{ color: AppColors.STEEL_BLUE_COLOR }}> Зарегистрироваться </Text> </Text>
            </View>
        </ScrollView>
    </Container>

}