import React, { useState } from "react";
import Container from "../../components/Container";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InfoContainer from "../../components/InfoContainer";
import { postRequestAuth } from "../../api/RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/saveUser";

export default function PersonalInformation({ navigation }) {
    const { token, user } = useSelector(state => state.auth)
    const [btnLoading, setBtnLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const dispatch = useDispatch()

    const familyStatuses = [
        { id: 0, value: 'Женат' },
        { id: 1, value: 'Замужем' },
        { id: 2, value: 'Разведен' },
        { id: 3, value: 'Не женат' },
        { id: 4, value: 'Не замужем' },
    ]
    const [selectedFamilyStatus, setSelectedFamilyStatus] = useState(familyStatuses.findIndex(el => el.value == user.family_status))
    const children = [
        { id: 0, value: 'Да' },
        { id: 1, value: 'Нет' },
    ]
    const [hasChildren, setHasChildren] = useState(children.findIndex(el => el.value == user.children))

    const [education, setEducation] = useState(user.education)
    const [specialization, setSpecialization] = useState(user.specialization)
    const [nickname, setNickname] = useState(user.nickname)

    function updateProfile() {
        setBtnLoading(true)
        postRequestAuth('update_personal_data', token, {
            family_status: familyStatuses[selectedFamilyStatus]?.value,
            children: children[hasChildren]?.value,
            education: education,
            specialization: specialization,
            nickname: nickname
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setBtnLoading(false)
                setShowSuccess(true)
                dispatch(saveUser({
                    ...user,
                    family_status: familyStatuses[selectedFamilyStatus]?.value,
                    children: children[hasChildren]?.value,
                    education: education,
                    specialization: specialization,
                    nickname: nickname
                }))
                setTimeout(() => {
                    setShowSuccess(false)
                }, 2000);
            }
        })
    }

    return <Container goBack headerTitle={'Личные данные'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 20 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 10, alignItems: 'center', justifyContent: 'center', }} onPress={() => navigation.navigate('AddProfilePhoto')}>
                    <Image source={{ uri: user.avatar }} style={{ width: 120, height: 120, borderRadius: 10 }} resizeMode="cover" />
                </TouchableOpacity>
                <InfoContainer labelText={'Имя'} value={user.name + ' ' + user.surname} />
                <InfoContainer labelText={'Пол'} value={user.gender} />
                <InfoContainer labelText={'Дата рождения'} value={user.date_of_birth} />
                <InfoContainer labelText={'Место жительства'} value={user.city.name + ', ' + user.country.name} />
                <Input labelText={'Имя пользователя'} value={nickname} setValue={setNickname} />
                <Input labelText={'Семейное положение'} value={selectedFamilyStatus} setValue={setSelectedFamilyStatus} data={familyStatuses} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Дети'} value={hasChildren} setValue={setHasChildren} data={children} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Образование'} value={education} setValue={setEducation} />
                <Input labelText={'Специализация'} value={specialization} setValue={setSpecialization} />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin onPress={updateProfile} loading={btnLoading} />
            </ScrollView>
        </View>
    </Container >
}
