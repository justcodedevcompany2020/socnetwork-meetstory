import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import HorizontalBlock from "../../components/HorizontalBlock";

export default function Top100Screen({navigation}) {
    return <View style={[Styles.containerTopPadding, {paddingHorizontal: 10}]}>
        <Text style={[Styles.darkRegular15, {marginBottom: 20}]}>
            <Text style={Styles.darkSemiBold16}>
                Топ 100 
            </Text>
            – в данном разделе  расположены анкеты парней которые были наибольше оценены пользователями.
        </Text>
        <HorizontalBlock text={'Топ фото парни'} backImagePath={require('../../assets/pngs/BlockBack3.png')} thin onPress={() => navigation.navigate('Top100OfSmth', {title: 'Топ 100 Парни'})}/>
        <HorizontalBlock text={'Топ фото девушки'} backImagePath={require('../../assets/pngs/BlockBack1.png')} thin onPress={() => navigation.navigate('Top100OfSmth', {title: 'Топ фото девушки'})}/>
        <HorizontalBlock text={'Топ по фото'} backImagePath={require('../../assets/pngs/BlockBack7.png')} thin onPress={() => navigation.navigate('Top100OfSmth', {title: 'Топ по фото'})}/>
    </View>
}