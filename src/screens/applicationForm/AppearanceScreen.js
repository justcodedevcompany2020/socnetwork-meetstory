import React, { useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { postRequestAuth } from "../../api/RequestHelpers";
import { saveUser } from "../../store/actions/saveUser";


export default function AppearanceScreen() {
    const { token, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [btnLoading, setBtnLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const [height, setHeight] = useState(user.height)
    const [weight, setWeight] = useState(user.weight)

    const bodyTypes = [
        { id: 0, value: 'Обычное' },
        { id: 1, value: 'Крупное' },
        { id: 2, value: 'Худощавое' },
    ]
    const [selectedBodyType, setSelectedBodyType] = useState(bodyTypes.findIndex(el => el.value == user.body_type))

    const eyeColors = [
        { id: 0, value: 'Карие' },
        { id: 1, value: 'Зелёные' },
        { id: 2, value: 'Голубые' },
        { id: 3, value: 'Коричневые' },
    ]
    const [selectedEyeColor, setSelectedEyeColor] = useState(eyeColors.findIndex(el => el.value == user.eye_color))

    const hairColors = [
        { id: 0, value: 'Русые' },
        { id: 1, value: 'Блонди' },
        { id: 2, value: 'Брюнет' },
        { id: 3, value: 'Рыжие' },
        { id: 4, value: 'Светлые' },
    ]
    const [selectedHairColor, setSelectedHairColor] = useState(hairColors.findIndex(el => el.value == user.hair_color))

    const tattoo = [
        { id: 0, value: 'Да' },
        { id: 1, value: 'Нет' },
    ]
    const [hasTattoo, setHasTattoo] = useState(tattoo.findIndex(el => el.value == user.tattoos_piercings))

    function updateProfile() {
        setBtnLoading(true)
        postRequestAuth('update_appearance', token, {
            height: height,
            weight: weight,
            body_type: bodyTypes[selectedBodyType]?.value,
            eye_color: eyeColors[selectedEyeColor]?.value,
            hair_color: hairColors[selectedHairColor]?.value,
            tattoos_piercings: tattoo[hasTattoo]?.value,
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setBtnLoading(false)
                setShowSuccess(true)
                dispatch(saveUser({
                    ...user,
                    height: height,
                    weight: weight,
                    body_type: bodyTypes[selectedBodyType]?.value,
                    eye_color: eyeColors[selectedEyeColor]?.value,
                    hair_color: hairColors[selectedHairColor]?.value,
                    tattoos_piercings: tattoo[hasTattoo]?.value,
                }))
                setTimeout(() => {
                    setShowSuccess(false)
                }, 3000);
            }
        })
    }

    return <Container goBack headerTitle={'Внешний вид'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input labelText={'Рост'} value={height} setValue={setHeight} placeholder={'- - -'} inputType={'num'} />
                <Input labelText={'Вес'} value={weight} setValue={setWeight} placeholder={'- - -'} inputType={'num'} />
                <Input labelText={'Телосложение'} value={selectedBodyType} setValue={setSelectedBodyType} data={bodyTypes} inputType={'dropdown'} placeholder={'Выберите страну'} />
                <Input labelText={'Цвет глаз'} value={selectedEyeColor} setValue={setSelectedEyeColor} data={eyeColors} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Цвет волос'} value={selectedHairColor} setValue={setSelectedHairColor} data={hairColors} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Татуировки, пирсинг'} value={hasTattoo} setValue={setHasTattoo} data={tattoo} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin loading={btnLoading} onPress={updateProfile} />
            </ScrollView>
        </View>
    </Container>
}