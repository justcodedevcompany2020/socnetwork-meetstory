import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../components/Button";
import { Styles } from "../../styles/Styles";


export default function MyPhotosScreen({navigation}){
    return <View style={Styles.containerTopPadding}>
    <ScrollView style={{ paddingHorizontal: 20, }}>
        <Button text={'Добавить фото'} height={40} onPress={() => navigation.navigate('AddPhotoScreen')}/>
    </ScrollView>
</View>
}