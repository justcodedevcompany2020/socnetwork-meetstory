import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";


export default function MyFeedScreen({navigation}) {
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 20, }}>
            <Button text={'Добавить публикацию'} height={40} onPress={() => navigation.navigate('AddPostScreen')}/>
        </ScrollView>
    </View>
}