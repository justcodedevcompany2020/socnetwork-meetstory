import React, { useState } from "react";
import Container from "../../components/Container";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import * as ImagePicker from 'react-native-image-picker';

export default function AddProfilePhoto({ navigation }) {
    const [photo, setPhoto] = useState()

    async function getPhoto() {
        await ImagePicker.launchImageLibrary({ mediaType: 'photo', presentationStyle: 'fullScreen' }).then(res => {
            console.log(res.assets[0].uri);
            setPhoto(res.assets[0].uri)
        }).catch(err => console.log(err))

    }

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 25 }]}>Добавте фото профиля</Text>
            <TouchableOpacity style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 50 }} onPress={getPhoto}>
                <Image source={photo ? { uri: photo } : require('../../assets/pngs/ProfileDefault.png')} style={{ width: 120, height: 120, borderRadius: 10}} resizeMode="cover" />
            </TouchableOpacity>
            <Button text={'Продолжить'} onPress={() => navigation.navigate('CongratulationsScreen')} margin />
        </View>
    </Container>
}