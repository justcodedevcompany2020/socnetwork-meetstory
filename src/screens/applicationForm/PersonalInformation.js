import React, { useState } from "react";
import Container from "../../components/Container";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InfoContainer from "../../components/InfoContainer";

export default function PersonalInformation() {

    const [userInfo, setUserInfo] = useState({
        name: 'John',
        gender: 'Женский',
        birthDate: '01.01.1985',
        location: 'Armenia, Yerevan'
    })

    const [selectedFamilyStatus, setSelectedFamilyStatus] = useState()
    const familyStatuses = [
        { id: 0, value: 'Женат' },
        { id: 1, value: 'Замужем' },
        { id: 2, value: 'Разведен' },
        { id: 3, value: 'Не женат' },
        { id: 4, value: 'Не замужем' },
    ]

    const [hasChildren, setHasChildren] = useState()
    const children = [
        { id: 0, value: 'Да' },
        { id: 1, value: 'Нет' },
    ]

    const [education, setEducation] = useState('')
    const [specialization, setSpecialization] = useState('')


    return <Container goBack headerTitle={'Личные данные'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 20 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InfoContainer labelText={'Имя'} value={userInfo.name} />
                <InfoContainer labelText={'Пол'} value={userInfo.gender} />
                <InfoContainer labelText={'Дата рождения'} value={userInfo.birthDate} />
                <InfoContainer labelText={'Имя'} value={userInfo.location} />
                <Input labelText={'Семейное положение'} value={selectedFamilyStatus} setValue={setSelectedFamilyStatus} data={familyStatuses} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Дети'} value={hasChildren} setValue={setHasChildren} data={children} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Образование'} value={education} setValue={setEducation} />
                <Input labelText={'Специализация'} value={specialization} setValue={setSpecialization} />
                <Button text={'Сохранить'} margin />
            </ScrollView>
        </View>
    </Container>
}
