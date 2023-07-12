import React from "react";
import Container from "../../components/Container";
import { Text, TextInput, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";


export default function AboutMeScreen() {
    return <Container goBack headerTitle={'Обо мне'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <Text style={Styles.darkMedium15}>Обо мне</Text>
            <TextInput multiline style={Styles.input} numberOfLines={10} placeholder="Нет информации" placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR} />
            <Button text={'Сохранить'} margin/>
        </View>

    </Container>
}

