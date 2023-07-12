import React, { useState } from "react";
import Container from "../../components/Container";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";



export default function AppearanceScreen() {
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


    return <Container goBack headerTitle={'Внешний вид'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input labelText={'Рост'} placeholder={'- - -'} inputType={'num'} />
                <Input labelText={'Вес'} placeholder={'- - -'} inputType={'num'} />
                <Input labelText={'Телосложение'} value={selectedBodyType} setValue={setSelectedBodyType} data={bodyTypes} inputType={'dropdown'} placeholder={'Выберите страну'} />
                <Input labelText={'Цвет глаз'} value={selectedEyeColor} setValue={setSelectedEyeColor} data={eyeColors} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Цвет волос'} value={selectedHairColor} setValue={setSelectedHairColor} data={hairColors} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Татуировки, пирсинг'} value={hasTattoo} setValue={setHasTattoo} data={tattoo} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Button text={'Сохранить'} margin />
            </ScrollView>
        </View>
    </Container>
}