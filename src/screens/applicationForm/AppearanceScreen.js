import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import { getRequestAuth, postRequestAuth } from "../../api/RequestHelpers";


export default function AppearanceScreen() {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const [selectedBodyType, setSelectedBodyType] = useState()
    const bodyTypes = [
        { id: 0, value: 'Обычное' },
        { id: 1, value: 'Крупное' },
        { id: 2, value: 'Худощавое' },
    ]

    const [selectedEyeColor, setSelectedEyeColor] = useState()
    const eyeColors = [
        { id: 0, value: 'Карие' },
        { id: 1, value: 'Зелёные' },
        { id: 2, value: 'Голубые' },
        { id: 3, value: 'Коричневые' },
    ]
    const [selectedHairColor, setSelectedHairColor] = useState()
    const hairColors = [
        { id: 0, value: 'Русые' },
        { id: 1, value: 'Блонди' },
        { id: 2, value: 'Брюнет' },
        { id: 3, value: 'Рыжие' },
        { id: 4, value: 'Светлые' },
    ]

    const [hasTattoo, setHasTattoo] = useState()
    const tattoo = [
        { id: 0, value: 'Да' },
        { id: 1, value: 'Нет' },
    ]


    const { token } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(true)
    const [btnLoading, setBtnLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        getUserInfo()
    }, [])

    function updateProfile() {
        setBtnLoading(true)
        postRequestAuth('update_profile', token, {
            height: height ?? null,
            weight: weight ?? null,
            body_type: bodyTypes[selectedBodyType]?.value ?? null,
            eye_color: eyeColors[selectedEyeColor]?.value ?? null,
            hair_color: hairColors[selectedHairColor]?.value ?? null,
            tattoos_piercings: tattoo[hasTattoo]?.value ?? null,
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

                setHeight(res.data.height)
                setWeight(res.data.weight)

                const index1 = bodyTypes.findIndex(el => el.value == res.data.body_type)
                const index2 = eyeColors.findIndex(el => el.value == res.data.eye_color)
                const index3 = hairColors.findIndex(el => el.value == res.data.hair_color)
                const index4 = tattoo.findIndex(el => el.value == res.data.tattoos_piercings)
                setSelectedBodyType(index1)
                setSelectedEyeColor(index2)
                setSelectedHairColor(index3)
                setHasTattoo(index4)
                setLoading(false)
            }
        })
    }


    return <Container goBack headerTitle={'Внешний вид'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            {loading ? <Loading /> : <ScrollView showsVerticalScrollIndicator={false}>
                <Input labelText={'Рост'} value={height} setValue={setHeight} placeholder={'- - -'} inputType={'num'} />
                <Input labelText={'Вес'} value={weight} setValue={setWeight} placeholder={'- - -'} inputType={'num'} />
                <Input labelText={'Телосложение'} value={selectedBodyType} setValue={setSelectedBodyType} data={bodyTypes} inputType={'dropdown'} placeholder={'Выберите страну'} />
                <Input labelText={'Цвет глаз'} value={selectedEyeColor} setValue={setSelectedEyeColor} data={eyeColors} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Цвет волос'} value={selectedHairColor} setValue={setSelectedHairColor} data={hairColors} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Татуировки, пирсинг'} value={hasTattoo} setValue={setHasTattoo} data={tattoo} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin loading={btnLoading} onPress={updateProfile} />
            </ScrollView>}
        </View>
    </Container>
}