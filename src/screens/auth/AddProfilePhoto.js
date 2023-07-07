import React from "react";
import Container from "../../components/Container";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";

export default function AddProfilePhoto({ navigation }) {
    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 25 }]}>Добавте фото профиля</Text>
            <TouchableOpacity style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 50 }}>
                <Image source={require('../../assets/pngs/ProfileDefault.png')} style={{ width: 120, height: 120 }} />
            </TouchableOpacity>
            <Button text={'Продолжить'} onPress={() => navigation.navigate('CongratulationsScreen')} margin/>
        </View>
    </Container>
}