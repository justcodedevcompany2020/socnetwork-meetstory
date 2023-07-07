import React, { useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { CheckedIcon, UncheckedIcon } from "../../assets/svgs/AuthSvgs";
import AcceptField from "../../components/AcceptField";

export default function RegisterScreen({ navigation }) {
    const [phone, setPhone] = useState()
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const [selectedGender, setSelectedGender] = useState()
    const genders = ['Мужской', 'Женский']
    const [selectedCountry, setSelectedCountry] = useState()
    const countries = ['Armenia', 'France', 'Russia', 'asdasdasd', 'asdasdasd', 'dffedfvsa', 'jikfsdjfs']
    const [accepted, setAccepted] = useState()

    return <Container>
        <ScrollView style={Styles.whiteContainer} showsVerticalScrollIndicator={false}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 30 }]}>Регистрация</Text>
            <Input labelText={'Номер телефона'} value={phone} setValue={setPhone} inputType={'phone'} />
            <Input labelText={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} minLengthPass />
            <Input labelText={'Подтвердите пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} />
            <Input labelText={'Пол'} value={selectedGender} setValue={setSelectedGender} inputType={'dropdown'} data={genders} />
            <Input labelText={'Страна'} value={selectedCountry} setValue={setSelectedCountry} inputType={'dropdown'} data={countries} />
            <AcceptField accepted={accepted} setAccepted={setAccepted} text={'Я согласен с политикой'} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Зарегистрироваться'} onPress={() => navigation.navigate('VerificationScreen')} margin/>
                <Text style={[Styles.darkMedium15, { textAlign: 'center', marginTop: 10 }]}>Есть аккаунт? <Text onPress={() => navigation.navigate('LoginScreen')} style={{ color: AppColors.STEEL_BLUE_COLOR }} suppressHighlighting> Войти </Text> </Text>
            </View>
        </ScrollView>
    </Container>
}