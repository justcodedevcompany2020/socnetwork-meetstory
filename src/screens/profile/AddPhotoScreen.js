import React from "react";
import Container from "../../components/Container";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { Styles } from "../../styles/Styles";

export default function AddPhotoScreen(){
   return  <Container  goBack headerTitle={'Добавить фотографию'}>
        <View style={[Styles.whiteContainer, { marginTop: 20, paddingTop: 20 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.darkMedium15}>Добавить фотографию</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/pngs/AddPhoto.png')} style={styles.image} />
                </TouchableOpacity>
                <Button text={'Добавить фотографию'} marginBottom={10} onPress={() => navigation.navigate('MyFeedScreen')} margin/>
                <Button text={'Отмена'} noFill onPress={() => navigation.navigate('MyFeedScreen')} margin />
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