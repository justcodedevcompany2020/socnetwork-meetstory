import React from "react";
import Container from "../../components/Container";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";


export default function AddPostScreen({ navigation }) {
    return <Container goBack headerTitle={'Добавить публикацию'}>
        <View style={[Styles.whiteContainer, { marginTop: 20, paddingTop: 20 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.darkMedium15}>Добавить фотографию</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/pngs/AddPhoto.png')} style={styles.image} />
                </TouchableOpacity>
                <Text style={Styles.darkMedium15}>Описание</Text>
                <TextInput multiline style={Styles.input} numberOfLines={10} placeholder="Текст вашей публикации" placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR } />
                <Button text={'Добавить публикацию'} marginBottom={10} onPress={() => navigation.navigate('MyFeedScreen')} margin/>
                <Button text={'Отмена'} noFill onPress={() => navigation.navigate('MyFeedScreen')} margin/>
            </ScrollView>
        </View> 
    </Container>
}


const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        marginTop: 10,
        marginBottom: 25
    },

})