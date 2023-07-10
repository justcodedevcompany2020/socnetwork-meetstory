import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import { TitleBlock } from "./HomeScreen";
import { AppColors } from "../../styles/AppColors";
import { DiamondIcon75 } from "../../assets/svgs/HomeSvgs";
import { Shadow } from "react-native-shadow-2";
import Button from "../../components/Button";
import Popup from "../../components/Popup";
import Input from "../../components/Input";
import UserBlock from "../../components/UserBlock";

const { width } = Dimensions.get('window');
const windowWidth = width;

const gap = 12;
const itemPerRow = 4;

const totalGapSize = (itemPerRow - 1) * gap;

const childWidth = (windowWidth - totalGapSize - 50) / itemPerRow;

export default function GiftsScreen({ navigation }) {

    const [selectedGift, setSelectedGift] = useState(null)
    const items = [
        { id: 0, },
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
        { id: 5, },
        { id: 6, },
        { id: 7, },
        { id: 8, },
        { id: 9, },
        { id: 10, },
        { id: 11, },
    ];
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)


    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Text style={[Styles.darkSemiBold16, { marginBottom: 20, }]}>
                Подарить подарок- любому пользователю можно преподнести подарок, который обойдётся в 1 – 2$. Говоря о подарках необходимо упомянуть, что подарить можно ещё и VIP статус.
            </Text>
            <TitleBlock text={'Список подарков'} />
            <View style={[styles.itemsWrap, { paddingHorizontal: 5, marginBottom: 50, }]}>
                {items.map((item, i) => <GiftBlock key={i} item={item} selectedGift={selectedGift} onPress={() => setSelectedGift(item.id)} />)}
            </View>
            <Button text={'Подарить себе'} marginBottom={15} backgroundColor={AppColors.LOCHMARA_COLOR} onPress={() => navigation.navigate('GiftYourself')} />
            <Button text={'Подарить пользователю'} onPress={() => setShowModal1(true)} />
        </ScrollView>
        <Popup showModal={showModal1} setShowModal={setShowModal1} title={'Подарить пользователю'}>
            <Input labelText={'ID пользователя'} />
            <Button text={'Подарить'} margin marginBottom={10} onPress={() => { setShowModal2(true); setShowModal1(false) }} />
            <Button text={'Выбрать из друзей'} noFill margin marginBottom={30} onPress={() => navigation.navigate('ChooseFriendScreen')} />
        </Popup>
        <Popup showModal={showModal2} setShowModal={setShowModal2} title={'Вы действительно хотите сделать подарок для John Smith?'} hidePadding>
            <View style={{marginBottom: 15}}>
                <UserBlock activityStatus /> 
            </View>
            <Button text={'Да'} margin marginBottom={8 }  onPress={() => navigation.navigate('GiftYourself')} />
            <Button text={'Нет'} margin marginBottom={30} backgroundColor={AppColors.BITTERSWEET_COLOR} onPress={() => setShowModal2(false)} />
        </Popup>
    </View>
}

export function GiftBlock({ item, selectedGift, onPress }) {
    return <Shadow distance={3} containerStyle={[styles.singleItem,]} style={{}}>
        <TouchableOpacity style={[styles.container, selectedGift == item.id && { borderWidth: 2, borderColor: AppColors.STEEL_BLUE_COLOR }]} onPress={onPress}>
            <DiamondIcon75 />
        </TouchableOpacity>
    </Shadow>
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: 'white',
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: -(gap / 2),
        marginHorizontal: -(gap / 2),
    },
    singleItem: {
        minWidth: childWidth,
        maxWidth: childWidth,
        alignSelf: 'center',
        marginHorizontal: gap / 2,
        marginBottom: gap,
    },
})