import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import MyGiftBlock from "../../components/MyGiftBlock";


export default function MyGiftsScreen() {
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <MyGiftBlock />
            <MyGiftBlock />
            <MyGiftBlock />
            <MyGiftBlock />
            <MyGiftBlock />
            <MyGiftBlock />
 
            <Button text={'Купить подарок'} height={40} />
        </ScrollView>
    </View>
}