import React, { useState } from "react";
import Container from "../../components/Container";
import { UserNameBlock } from "../../components/UserNameBlock";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import HorizontalBlock from "../../components/HorizontalBlock";
import { MessageIcon, MyFriendsIcon, PhotoIcon, SettingsIcon, UserIcon } from "../../assets/svgs/ProfileSvgs";
import { GiftIcon } from "../../assets/svgs/HomeSvgs";
import Button from "../../components/Button";
import { WallSvg } from "../../assets/svgs/UserSvgs";
import Popup from "../../components/Popup";
import { AppColors } from "../../styles/AppColors";
import { deleteToken } from "../../store/actions/saveToken";
import { useDispatch, useSelector } from "react-redux";


export default function MyProfileScreen({ navigation }) {
    const [showPopup, setShowPopup] = useState(false)
    const dispatch = useDispatch()
    

    function logout() {
        dispatch(deleteToken())
        setShowPopup(false)
        navigation.navigate('LoginScreen')
    }

    return <Container headerTitle={'Мой профиль'} settingsIcon>
        <UserNameBlock myProfile />
        <View style={Styles.whiteContainer}>
            <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
                <HorizontalBlock text={'Анкета'} backImagePath={require('../../assets/pngs/BlockBack18.png')} Icon={UserIcon} onPress={() => navigation.navigate('ApplicationFormScreen')} />
                <HorizontalBlock text={'Моя стена'} backImagePath={require('../../assets/pngs/BlockBack23.png')} Icon={WallSvg} onPress={() => navigation.navigate('MyFeedScreen')} />
                <View style={Styles.flexRowJustifyBetween}>
                    <HorizontalBlock text={'Сообщения'} backImagePath={require('../../assets/pngs/BlockBack11.png')} Icon={MessageIcon} width={'49%'} />
                    <HorizontalBlock text={'Мои друзья'} backImagePath={require('../../assets/pngs/BlockBack12.png')} Icon={MyFriendsIcon} width={'49%'} onPress={() => navigation.navigate('MyFriendsScreen')} />
                </View>
                <HorizontalBlock text={'Мои фотографии'} backImagePath={require('../../assets/pngs/BlockBack9.png')} Icon={PhotoIcon} onPress={() => navigation.navigate('MyPhotosScreen')} />
                <View style={Styles.flexRowJustifyBetween}>
                    <HorizontalBlock text={'Мои подарки'} backImagePath={require('../../assets/pngs/BlockBack11.png')} Icon={GiftIcon} width={'49%'} onPress={() => navigation.navigate('MyGiftsScreen')} />
                    <HorizontalBlock text={'Настройки'} backImagePath={require('../../assets/pngs/BlockBack12.png')} Icon={SettingsIcon} width={'49%'} onPress={() => navigation.navigate('SettingScreen')} />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Button text={'Выйти'} margin noFill onPress={() => setShowPopup(true)} />
                </View>
            </ScrollView>
            <Popup showModal={showPopup} setShowModal={setShowPopup} title={'Вы действительно хотите выйти из аккаунта?'}>
                <Button text={'Да'} margin marginBottom={8} onPress={logout} />
                <Button text={'Нет'} margin marginBottom={30} backgroundColor={AppColors.BITTERSWEET_COLOR} onPress={() => setShowPopup(false)} />
            </Popup>
        </View>
    </Container>
}