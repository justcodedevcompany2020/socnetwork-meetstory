import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Container from "../../components/Container"
import Input from '../../components/Input'
import { Styles } from '../../styles/Styles'
import Button from '../../components/Button'
import { postRequestAuth } from '../../api/RequestHelpers'
import { useSelector } from 'react-redux'

export const ChangePasswordScreen = ({navigation}) => {
    const { token } = useSelector(state => state.auth)
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const [oldPass, setOldPass] = useState()
    const [errors, setErrors] = useState({
        oldpass: false,
        pass: false,
        confirmPass: false,
        oldPassMsg: false,
        passMsg: false,
        confirmPassMsg: false,
    });

    const [tryLater, setTryLater] = useState(false)
    const [loading, setLoading] = useState(false)

    function changePassword() {
        setLoading(true)

        let isValidInfo = validate();
        isValidInfo ? postRequestAuth('user_update_profile_password', token, {
            old_password: oldPass,
            password: pass,
            password_confirmation: confirmPass
        }).then(([status, data]) => {
            if(status == 200){
                navigation.goBack()
            } else if(status == 400){
                let items = { ...errors };
                items.oldPassMsg = true
                setErrors(items)
            } else setTryLater(true)
            setLoading(false)
            console.log(data);
        }) : setLoading(false)
    }

    function validate() {
        let items = { ...errors };
        let error = false;

        if (!oldPass) {
            items.oldpass = true;
            items.oldPassMsg = false;
            error = true;
        } else if (oldPass.length < 8) {
            items.oldpass = true;
            items.oldPassMsg = true;
            error = true;
        } else {
            items.oldpass = false;
            items.oldPassMsg = false;
        }

        if (!pass) {
            items.pass = true;
            items.passMsg = false;
            error = true;
        } else if (pass.length < 8) {
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

    return <Container goBack >
        <ScrollView style={[Styles.whiteContainer, { marginTop: 30 }]}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Изменение пароля</Text>
                <Text style={[Styles.darkRegular15, { marginTop: 15 }]}>Введите новый пароль для вашего аккаунта</Text>
            </View>
            <Input labelText={'Старый пароль'} value={oldPass} setValue={setOldPass} inputType={'pass'} error={errors.oldpass || errors.oldPassMsg}/>
            {errors.oldPassMsg && (
                <Text style={Styles.redRegular12}>
                    Неверный пароль.
                </Text>
            )}
            <Input labelText={'Новый пароль'} value={pass} setValue={setPass} inputType={'pass'} minLengthPass error={errors.pass || errors.passMsg} />
            {errors.passMsg && (
                <Text style={Styles.redRegular12}>
                    Пароль должен содержать не менее 8 символов.
                </Text>
            )}
            <Input labelText={'Подтвердите пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} error={errors.confirmPass || errors.confirmPassMsg} />
            {errors.confirmPassMsg && (
                <Text style={Styles.redRegular12}>Пароли не совпадают.</Text>
            )}
            <View style={{ marginTop: 20 }}>
                {tryLater && (
                    <Text style={[Styles.redRegular12, { textAlign: 'center' }]}>Попробуйте немного позже</Text>
                )}
                <Button text={'Сохранить'} margin onPress={changePassword} loading={loading} marginBottom={30} />
            </View>
        </ScrollView>
    </Container>
}