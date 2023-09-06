import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import ImagePicker from 'react-native-image-crop-picker';
import { CrossIconBlue } from "../../assets/svgs/AuthSvgs";
import { postRequestAuthFile } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";


export default function AddPostScreen({ navigation }) {
    const [photos, setPhotos] = useState([])
    const [description, setDescription] = useState()
    const { token } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('add post screen');
    }, [])

    function getPhotos() {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            mediaType: "photo",
            multiple: true,
            // cropping: true,
            maxFiles: 10
            // compressImageQuality: true
        }).then(res => {
            const allowableQuantity = 10 - photos.length
            console.log(allowableQuantity);
            const images = res.map(el => el.path).slice(0, allowableQuantity)
            setPhotos([...images, ...photos])
        }).catch(err => null)
    }

    function cropImage(el, index) {
        console.log(el, index);
        ImagePicker.openCropper({
            path: el,
            width: 300,
            height: 300,
            cropperToolbarColor: AppColors.STEEL_BLUE_COLOR,
            cropperActiveWidgetColor: AppColors.STEEL_BLUE_COLOR,
            cropperStatusBarColor: AppColors.STEEL_BLUE_COLOR,
            cropperToolbarWidgetColor: 'white',
            cropperToolbarTitle: 'Редактировать фото'
        }).then(image => {
            console.log(image.path);
            setPhotos(photos.map((el, i) => {
                if (i == index) return image.path
                return el
            }))
        }).catch(res => null)
    }

    function addPost() {
        if (!photos.length && !description) return
        setLoading(true)
        let form = new FormData();
        photos.length && photos.forEach(el => form.append("photos[]", {
            uri: el,
            type: 'image/jpg',
            name: 'photo.jpg',
        }))
        description && form.append("description", description);
        postRequestAuthFile('create_new_post', token, form).then(([status, body]) => {
            console.log(body)
            if (status == 200) {
                navigation.navigate('MyFeedScreen', { refresh: true })
                setLoading(false)
            }
        })
    }

    function removePhoto(i) {
        setPhotos(photos.filter((photo, index) => {
            return index !== i
        }))
    }

    return <Container goBack headerTitle={'Добавить публикацию'} >
        <View style={[Styles.whiteContainer, { marginTop: 20, paddingTop: 20 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.darkMedium15}>Добавить фотографию</Text>
                <ScrollView horizontal style={{ marginBottom: 20 }} showsHorizontalScrollIndicator={false}>
                    {photos.length < 10 && <TouchableOpacity onPress={getPhotos} style={styles.imageContainer}>
                        <Image source={require('../../assets/pngs/AddPhoto.png')} style={styles.image} />
                    </TouchableOpacity>}
                    {photos.map((el, i) => <TouchableOpacity style={styles.imageContainer} key={i} onPress={() => cropImage(el, i)}>
                        <Image source={{ uri: el }} style={styles.image} />
                        <TouchableOpacity style={styles.cross} onPress={() => removePhoto(i)}>
                            <CrossIconBlue />
                        </TouchableOpacity>
                    </TouchableOpacity>)}
                </ScrollView>
                <Text style={Styles.darkMedium15}>Описание</Text>
                <TextInput multiline value={description} onChangeText={setDescription} style={Styles.input} numberOfLines={10} placeholder="Текст вашей публикации" placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR} />
                <Button text={'Добавить публикацию'} marginBottom={10} onPress={addPost} margin loading={loading} />
                <Button text={'Отмена'} noFill onPress={() => navigation.navigate('MyFeedScreen', { refresh: true })} margin />
            </ScrollView>
        </View>
    </Container>
}


const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        marginTop: 10,
        borderRadius: 10
    },
    cross: {
        position: 'absolute',
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        padding: 5,
        borderRadius: 50,
        right: -15
    },
    imageContainer: {
        alignSelf: 'flex-start',
        marginTop: 15,
        marginRight: 20
    }
})