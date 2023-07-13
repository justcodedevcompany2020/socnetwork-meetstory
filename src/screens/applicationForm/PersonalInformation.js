import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InfoContainer from "../../components/InfoContainer";
import { getRequestAuth, postRequestAuth } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";

export default function PersonalInformation() {
    const { token } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(true)
    const [btnLoading, setBtnLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const [userInfo, setUserInfo] = useState({
        name: 'John',
        gender: 'Женский',
        birthDate: '01.01.1985',
        location: 'Armenia, Yerevan'
    })

    const [selectedFamilyStatus, setSelectedFamilyStatus] = useState(null)
    const familyStatuses = [
        { id: 0, value: 'Женат' },
        { id: 1, value: 'Замужем' },
        { id: 2, value: 'Разведен' },
        { id: 3, value: 'Не женат' },
        { id: 4, value: 'Не замужем' },
    ]

    const [hasChildren, setHasChildren] = useState(null)
    const children = [
        { id: 0, value: 'Да' },
        { id: 1, value: 'Нет' },
    ]

    const [education, setEducation] = useState('')
    const [specialization, setSpecialization] = useState('')

    useEffect(() => {
        getUserInfo()
    }, [])

    function updateProfile() {
        setBtnLoading(true)
        postRequestAuth('update_profile', token, {
            family_status: familyStatuses[selectedFamilyStatus]?.value ?? null,
            children: children[hasChildren]?.value ?? null,
            education: education ?? null,
            specialization: specialization ?? null,
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setBtnLoading(false)
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                }, 3000);
            }
        })
    }

    function getUserInfo() {
        getRequestAuth('get_auth_user_info', token).then(res => {
            console.log(res);
            if (res.status == true) {
                setUserInfo({
                    name: res.data.name + ' ' + res.data.surname,
                    gender: res.data.gender,
                    birthDate: res.data.date_of_birth,
                    location: '', //todo    
                })

                const index1 = familyStatuses.findIndex(el => el.value == res.data.family_status)
                const index2 = children.findIndex(el => el.value == res.data.children)
                setSelectedFamilyStatus(index1)
                setHasChildren(index2)
                setEducation(res.data.education)
                setSpecialization(res.data.specialization)

                setLoading(false)
            }
        })
    }


    return <Container goBack headerTitle={'Личные данные'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 20 }]}>
            {loading ? <Loading /> : <ScrollView showsVerticalScrollIndicator={false}>
                <InfoContainer labelText={'Имя'} value={userInfo.name} />
                <InfoContainer labelText={'Пол'} value={userInfo.gender} />
                <InfoContainer labelText={'Дата рождения'} value={userInfo.birthDate} />
                <InfoContainer labelText={'Место жительства'} value={userInfo.location} />
                <Input labelText={'Семейное положение'} value={selectedFamilyStatus} setValue={setSelectedFamilyStatus} data={familyStatuses} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Дети'} value={hasChildren} setValue={setHasChildren} data={children} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Образование'} value={education} setValue={setEducation} />
                <Input labelText={'Специализация'} value={specialization} setValue={setSpecialization} />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin onPress={updateProfile} loading={btnLoading} />
            </ScrollView>}
        </View>
    </Container >
}
