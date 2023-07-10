import React, { useState } from "react";
import Container from "../../components/Container";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";



export default function AppearanceScreen() {

    return <Container goBack headerTitle={'Внешний вид'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input labelText={'Рост'} placeholder={'- - -'} />
                <Input labelText={'Вес'} placeholder={'- - -'} />
                <Input labelText={'Телосложение'} inputType={'dropdown'} placeholder={'Выберите страну'} />
                <Input labelText={'Цвет глаз'} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Цвет волос'} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Input labelText={'Татуировки, пирсинг'} inputType={'dropdown'} placeholder={'Выбрать вариант'} />
                <Button text={'Сохранить'} margin />
            </ScrollView>
        </View>
    </Container>
}