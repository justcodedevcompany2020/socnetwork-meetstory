import React, { useState } from "react";
import Container from "../../components/Container";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import * as ImagePicker from 'react-native-image-picker';
import { postRequestAuthFile } from "../../api/RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/saveUser";

export default function AddProfilePhoto({ navigation }) {
    const { token, user } = useSelector(state => state.auth)
    const [photo, setPhoto] = useState(user.avatar)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    async function getPhoto() {
        await ImagePicker.launchImageLibrary({ mediaType: 'photo', presentationStyle: 'fullScreen' }).then(res => {
            console.log(res.assets[0].uri);
            setPhoto(res.assets[0].uri)
        }).catch(err => console.log(err))
    }

    async function addPhoto() {
        setLoading(true)
        let form = new FormData();
        form.append("photo", {
            uri: photo,
            type: 'image/jpg',
            name: 'photo.jpg',
        });

        postRequestAuthFile('update_user_photo', token, form).then(([status, data]) => {
            console.log(data);
            if (status == 200) {
                dispatch(saveUser({
                    ...user,
                    avatar: photo
                }))
                navigation.navigate('PersonalInformation')
            }
            setLoading(false)
        })
    }

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 25 }]}>Добавте фото профиля</Text>
            <TouchableOpacity style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 40 }} onPress={getPhoto}>
                <Image source={{ uri: photo }} style={{ width: 120, height: 120, borderRadius: 10 }} resizeMode="cover" />
            </TouchableOpacity>
            <Button text={'Сохранить'} onPress={addPhoto} margin loading={loading} />
        </View>
    </Container>
}