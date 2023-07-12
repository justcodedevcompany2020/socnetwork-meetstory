import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Container from "../../components/Container"
import Input from '../../components/Input'
import { Styles } from '../../styles/Styles'
import Button from '../../components/Button'
export const ChnagePasswordScreen = () => {
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const [oldPass, setOldPass] = useState()

    return <Container goBack >
        <ScrollView style={[Styles.whiteContainer, { marginTop: 30 }]}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Изменение пароля</Text>
                <Text style={[Styles.darkRegular15, { marginTop: 15 }]}>Введите новый пароль для вашего аккаунта</Text>
            </View>
            <Input labelText={'Старый пароль'} value={pass} setValue={setPass} inputType={'pass'} />
            <Input labelText={'Новый пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} minLengthPass />
            <Input labelText={'Подтвердите пароль'} value={oldPass} setValue={setOldPass} inputType={'pass'} />
            <View style={{marginTop: 20}}>
                <Button text={'Сохранить'} margin />
            </View>
        </ScrollView>
    </Container>
}