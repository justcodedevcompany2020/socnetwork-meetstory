import React from "react";
import Container from "../../components/Container";
import { UserNameBlock } from "../../components/UserNameBlock";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import HorizontalBlock from "../../components/HorizontalBlock";
import { MessageIcon, MyFeedIcon, MyFriendsIcon, PhotoIcon, SettingsIcon, UserIcon } from "../../assets/svgs/ProfileSvgs";
import { GiftIcon } from "../../assets/svgs/HomeSvgs";
import Button from "../../components/Button";
import { WallSvg } from "../../assets/svgs/UserSvgs";


export default function MyProfileScreen({ navigation }) {
    return <Container headerTitle={'Мой профиль'} settingsIcon >
        <UserNameBlock myProfile />
        <View style={{ width: '100%', paddingLeft: 20, marginVertical: 20 }}>
            <Text style={Styles.whiteMedium13}>Просмотров за день 6</Text>
            <Text style={Styles.whiteMedium13}>Просмотров за месяц 234</Text>
        </View>
        <View style={Styles.whiteContainer}>
            <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
                <HorizontalBlock
                    onPress={() => navigation.navigate('AddBalanceScreen')}
                    text={'Анкета'}
                    Icon={UserIcon}
                    backImagePath={require('../../assets/pngs/BlockBack18.png')}
                />
                <HorizontalBlock text={'Моя стена'} backImagePath={require('../../assets/pngs/BlockBack23.png')} Icon={WallSvg} onPress={() => navigation.navigate('MyFeedScreen')} />
                <View style={Styles.flexRowJustifyBetween}>
                    <HorizontalBlock text={'Сообщения'} backImagePath={require('../../assets/pngs/BlockBack11.png')} Icon={MessageIcon} width={'49%'} />
                    <HorizontalBlock text={'Мои друзья'} backImagePath={require('../../assets/pngs/BlockBack12.png')} Icon={MyFriendsIcon} width={'49%'} onPress={() => navigation.navigate('MyFriendsScreen')} />
                </View>
                <HorizontalBlock text={'Мои фотографии'} backImagePath={require('../../assets/pngs/BlockBack9.png')} Icon={PhotoIcon} onPress={() => navigation.navigate('MyPhotosScreen')}/>
                <View style={Styles.flexRowJustifyBetween}>
                    <HorizontalBlock text={'Мои подарки'} backImagePath={require('../../assets/pngs/BlockBack11.png')} Icon={GiftIcon} width={'49%'} onPress={() => navigation.navigate('MyGiftsScreen')}/>
                    <HorizontalBlock text={'Настройки'} backImagePath={require('../../assets/pngs/BlockBack12.png')} Icon={SettingsIcon} width={'49%'} />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Button text={'Выйти'} margin noFill />
                </View>
            </ScrollView>
        </View>
    </Container>
}