import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import { Shadow } from 'react-native-shadow-2';
import { BlueCommentIcon, BlueHeart14, BrokenHeart14 } from "../assets/svgs/HomeSvgs";
import { MoreIcon } from "../assets/svgs/AuthSvgs";
import Popup from "./Popup";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { imgUrl } from "../api/RequestHelpers";

export default function ({ userInfo, authorityMode, activityStatus, chatIcon, selected, rating, moveEnd, moreIcon, onPress, lastActionInfo, friend }) {
    const [openPopUp, setOpenPopUp] = useState(false)
    const [showDeletePopup, setShowDeletePopup] = useState(false)
    const navigation = useNavigation()

    return <Shadow distance={3} containerStyle={{ marginBottom: 10, marginHorizontal: 5, marginTop: 3 }} style={{ width: '100%', borderRadius: 6 }}>
        <TouchableOpacity onPress={onPress} style={[styles.container, Styles.flexRowJustifyBetween, selected && { borderWidth: 2, borderColor: AppColors.GOLD_COLOR, backgroundColor: AppColors.LEMON_COLOR }]}>
            <View style={[Styles.flexRowJustifyBetween, { width: '100%', alignItems: 'flex-start' }]}>
                <View style={[Styles.flexRow]}>
                    <Image source={userInfo ? { uri: `${imgUrl}${userInfo.avatar}` } : require('../assets/pngs/ProfileDefault.png')} style={{ width: 60, height: 60, borderRadius: 4 }} resizeMode='stretch' />
                    <View style={{ marginLeft: 15, height: 50, justifyContent: 'space-between', flexShrink: 1, }}>
                        <Text style={[Styles.darkMedium15, { lineHeight: 17 }]}>{userInfo?.name} {userInfo?.surname}</Text>
                        {lastActionInfo ?
                            <Text style={Styles.darkRegular10}>Пользователь Lilly отправил запрос на добавления в друзья</Text>
                            :
                            <>
                                <Text style={Styles.darkBlueMedium12}>Мосвка, Россия </Text>
                                <Text style={{ fontSize: 10, color: AppColors.DARK_CHARCOAL_COLOR }}>{moment().diff(userInfo?.date_of_birth, 'years', false)}<Text style={Styles.darkRegular10}> год</Text></Text>
                            </>
                        }
                    </View>
                </View>

                {authorityMode ? <View>
                    <Text style={[Styles.darkMedium12, { textAlign: 'right', marginBottom: 5 }]}>Авторитет</Text>
                    <View style={Styles.flexRow}>
                        <BrokenHeart14 />
                        <BrokenHeart14 />
                        <BrokenHeart14 />
                        <BlueHeart14 />
                        <BlueHeart14 />
                        <BlueHeart14 />
                        <BlueHeart14 />
                    </View>
                </View> : activityStatus ?
                    <View style={[styles.activityBlock, moveEnd && { justifyContent: 'flex-end' }, { position: 'absolute', right: 0 }]}>
                        {chatIcon && <BlueCommentIcon />}
                        {moreIcon && <TouchableOpacity style={{ padding: 5 }} onPress={() => setOpenPopUp(true)}><MoreIcon /></TouchableOpacity>}
                        <Text style={Styles.darkBlueSemiBold10}>Cегодня в 13:44</Text>
                    </View> : rating ?
                        <Text style={Styles.darkBlueSemiBold10}>
                            Рейтинг: 100500+
                        </Text>
                        : null}
            </View>
        </TouchableOpacity>
        <Popup setShowModal={setOpenPopUp} title={'Выберите действие'} showModal={openPopUp} >
            <Button margin marginBottom={10} onPress={() => { navigation.navigate('UserScreen'); setOpenPopUp(false) }} backgroundColor={AppColors.LOCHMARA_COLOR} text={'Открыть профиль'} />
            <Button marginBottom={10} margin onPress={() => { navigation.navigate('ChatScreen', { username: 'sdsdsd', img: require('../assets/pngs/ProfileDefault.png') }); setOpenPopUp(false) }} text={'Отправить сообщение'} />
            {friend
                ? <Button backgroundColor={AppColors.BITTERSWEET_COLOR} text={'Удалить из друзей'} marginBottom={30} margin onPress={() => { setShowDeletePopup(true); setOpenPopUp(false) }} />
                : <Button backgroundColor={AppColors.SKY_BLUE_COLOR} text={'Добавить в друзья'} marginBottom={30} margin />}
        </Popup>
        <Popup title={'Вы действительно хотите удалить John Smith из друзей?'} showModal={showDeletePopup} setShowModal={setShowDeletePopup}>
            <Button text={'Да'} backgroundColor={AppColors.BITTERSWEET_COLOR} margin marginBottom={10} onPress={() => setShowDeletePopup(false)} />
            <Button outLineColor={AppColors.BITTERSWEET_COLOR} text={'Нет'} backgroundColor={AppColors.WHITE_COLOR} margin onPress={() => setShowDeletePopup(false)} marginBottom={20} />
        </Popup>
    </Shadow>
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    activityBlock: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 60,
    },
})