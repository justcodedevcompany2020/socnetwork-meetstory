import React, { useState } from "react";
import Container from "../../components/Container";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function PersonalInformation() {

    const [name, setName] = useState('John')
    const [selectedGender, setSelectedGender] = useState('Мужской')
    const genders = ['Мужской', 'Женский']
    const [birthDate, setBirthDate] = useState('01,01,1985')
    const [selectedCountry, setSelectedCountry] = useState()
    const countries = ['Armenia', 'Russia', 'France',]
    const [familyStatus, setFamilyStatus] = useState('')

    return <Container goBack headerTitle={'Личные данные'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 20 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input labelText={'Имя'} value={name} setValue={setName} />
                <Input labelText={'Пол'} value={selectedGender} setValue={setSelectedGender} inputType={'dropdown'} data={genders} />
                <Input labelText={'Дата рождения'} value={birthDate} setValue={setBirthDate} inputType={'date'} />
                <Input labelText={'Место жительства'} value={selectedCountry} setValue={setSelectedCountry} inputType={'dropdown'} data={countries} placeholder={'Выберите страну'} />
                <Input labelText={'Семейное положение'} value={familyStatus} setValue={setFamilyStatus} />
                <Input labelText={'Дети'} setValue={setSelectedGender} inputType={'dropdown'} data={genders} placeholder={'Выбрать вариант'}/>
                <Input labelText={'Образование'} setValue={setSelectedGender} inputType={'dropdown'} data={genders} placeholder={'Выбрать вариант'}/>
                <Input labelText={'Специализация'} setValue={setSelectedGender} />
                <Input labelText={'Материальное положение'} setValue={setSelectedGender} inputType={'dropdown'} data={genders} placeholder={'Выбрать вариант'}/>
                <Button  text={'Сохранить'} margin/>
            </ScrollView>
        </View>
    </Container>
}