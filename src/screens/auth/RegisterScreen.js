import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, View } from "react-native";
import Input from "../../components/Input";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import AcceptField from "../../components/AcceptField";
import { getRequest, postRequest } from "../../api/RequestHelpers";

export default function RegisterScreen({ navigation }) {
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()

    const [selectedGender, setSelectedGender] = useState()
    const genders = [
        { id: 0, value: 'Мужской' },
        { id: 1, value: 'Женский' }
    ]

    const [selectedCountry, setSelectedCountry] = useState()
    const [countries, setCountries] = useState([])
    const [countriesLoading, setCountriesLoading] = useState(true)

    const [selectedCity, setSelectedCity] = useState()
    const [cities, setCities] = useState([])
    const [citiesLoading, setCitiesLoading] = useState(true)

    const [accepted, setAccepted] = useState(false)

    const dropdownRefCity = useRef({});
    const dropdownRefCountry = useRef({});
    const dropdownRefGender = useRef({});


    const [phoneError, setPhoneError] = useState(false)
    const [errors, setErrors] = useState({
        gender: false,
        country: false,
        city: false,
        phone: false,
        pass: false,
        confirmPass: false,
        confirmPassMsg: false,
        passMsg: false,
        phoneMsg: false,
        accept: false
    });
    const [tryLater, setTryLater] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCountries()
    }, [])

    useEffect(() => {
        setCitiesLoading(true)
        setSelectedCity(null)
        dropdownRefCity.current.reset()
        selectedCountry && getCities()
    }, [selectedCountry])

    function getCountries() {
        getRequest('country_and_city').then(res => {
            console.log(res);
            if (res.status) {
                setCountries(res.data.map(el => ({ value: el.name, id: el.id })))
                setCountriesLoading(false)
            }
        })
    }

    function getCities() {
        getRequest(`country_and_city/${selectedCountry}`).then(res => {
            console.log(res);
            if (res.status) {
                setCities(res.data.map(el => ({ value: el.name, id: el.id })))
                setCitiesLoading(false)
            }
        })
    }

    function onPressAccept() {
        setAccepted(!accepted)
        setErrors({ ...errors, accept: false })
    }

    function register() {
        let myPhone = '+' + phone.replace(/\D/g, '')
        setLoading(true)

        let isValidInfo = validate();
        isValidInfo ?
            postRequest('registration', {
                phone: myPhone,
                password: pass,
                password_confirmation: confirmPass,
                gender: genders[selectedGender].value,
                country_id: selectedCountry,
                city_id: selectedCity
            }).then(([status, data]) => {
                console.log(status, data);
                if (status === 200) {
                    navigation.navigate('VerificationScreen', { phone: myPhone })
                } else if (status === 400 && data.message.phone[0] == 'The phone has already been taken.') {
                    setPhoneError(true)
                } else setTryLater(true)
                setLoading(false)
            }) : setLoading(false)
    }

    function validate() {
        let items = { ...errors };
        let error = false;

        if (typeof selectedGender !== 'number') {
            items.gender = true;
            error = true;
        } else {
            items.gender = false;
        }

        if (!selectedCountry) {
            items.country = true;
            error = true;
        } else {
            items.country = false;
        }

        if (!selectedCity) {
            items.city = true;
            error = true;
        } else {
            items.city = false;
        }

        if (!accepted) {
            items.accept = true;
            error = true;
        } else {
            items.accept = false;
        }

        if (!phone) {
            items.phone = true;
            items.phoneMsg = false;
            error = true;
        } else if (phone.length < 22) {
            items.pass = true
            items.phoneMsg = true
            error = true
        } else {
            items.phone = false;
            items.phoneMsg = false;
        }

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
        setPhoneError(false)
        setErrors(items);
        return !error
    }

    function clearData() {
        //errors
        setErrors({
            gender: false,
            country: false,
            city: false,
            phone: false,
            pass: false,
            confirmPass: false,
            confirmPassMsg: false,
            passMsg: false,
            phoneMsg: false,
            accept: false
        })
        setTryLater(false)
        setPhoneError(false)
        //values
        setPhone('')
        setPass('')
        setConfirmPass('')
        setSelectedCity(null)
        dropdownRefCity.current?.reset()
        setSelectedCountry(null)
        dropdownRefCountry.current?.reset()
        setSelectedGender(null)
        dropdownRefGender.current?.reset()
        setAccepted(false)
    }

    return <Container>
        <ScrollView style={Styles.whiteContainer} showsVerticalScrollIndicator={false}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 30 }]}>Регистрация</Text>
            <Input labelText={'Номер телефона'} value={phone} setValue={setPhone} inputType={'phone'} error={errors.phone} />
            {errors.phoneMsg && (
                <Text style={Styles.redRegular12}>
                    Введите корректный номер телефона.
                </Text>
            )}
            {phoneError && (
                <Text style={Styles.redRegular12}>
                    Этот телефон уже зарегистрирован.
                </Text>
            )}
            <Input labelText={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} minLengthPass error={errors.pass || errors.passMsg} />
            {errors.passMsg && (
                <Text style={Styles.redRegular12}>
                    Пароль должен содержать не менее 8 символов.
                </Text>
            )}
            <Input labelText={'Подтвердите пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} error={errors.confirmPass || errors.confirmPassMsg} />
            {errors.confirmPassMsg && (
                <Text style={Styles.redRegular12}>Пароли не совпадают.</Text>
            )}
            <Input labelText={'Пол'} value={selectedGender} setValue={setSelectedGender} inputType={'dropdown'} data={genders} placeholder={' '} error={errors.gender} />
            <Input labelText={'Страна'} value={selectedCountry} setValue={setSelectedCountry} inputType={'dropdown'} data={countries} placeholder={' '} loading={countriesLoading} error={errors.country} dropdownRef={dropdownRefCountry} />
            <Input labelText={'Город'} value={selectedCity} setValue={setSelectedCity} inputType={'dropdown'} data={cities} placeholder={' '} loading={citiesLoading} error={errors.city} dropdownRef={dropdownRefCity} />
            <AcceptField accepted={accepted} onPressAccept={onPressAccept} text={'Я согласен с политикой'} error={errors.accept} />
            <View style={{ marginVertical: 45 }}>
                {tryLater && (
                    <Text style={[Styles.redRegular12, { textAlign: 'center' }]}>Попробуйте немного позже</Text>
                )}
                <Button text={'Зарегистрироваться'} onPress={register} margin loading={loading} />
                <Text style={[Styles.darkMedium15, { textAlign: 'center', marginTop: 10 }]}>Есть аккаунт? <Text onPress={() => { navigation.navigate('LoginScreen'); clearData() }} style={{ color: AppColors.STEEL_BLUE_COLOR }} suppressHighlighting> Войти </Text> </Text>
            </View>
        </ScrollView>
    </Container>
}