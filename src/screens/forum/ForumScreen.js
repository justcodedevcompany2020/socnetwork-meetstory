import React from "react";
import { View, ScrollView } from "react-native";
import { Styles } from "../../styles/Styles";
import HorizontalBlock from "../../components/HorizontalBlock";
import { BallIcon, CalendarIcon, ComputerIcon, FilmIcon, GameIcon, MusicIcon, NewsIcon, PhoneIcon, UserIcon, WhiteFireIcon } from "../../assets/svgs/HomeSvgs";


export default function ForumScreen({ navigation }) {
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 10 }}>
            <HorizontalBlock text={'Самые популярные темы'} backImagePath={require('../../assets/pngs/BlockBack8.png')} Icon={WhiteFireIcon} onPress={() => navigation.navigate('PopularTopics')} />
            <HorizontalBlock text={'Новости'} backImagePath={require('../../assets/pngs/BlockBack9.png')} Icon={NewsIcon} />
            <HorizontalBlock text={'События и проишествия'} backImagePath={require('../../assets/pngs/BlockBack10.png')} Icon={UserIcon} />
            <View style={Styles.flexRowJustifyBetween}>
                <HorizontalBlock text={'Обо всём'} backImagePath={require('../../assets/pngs/BlockBack11.png')} Icon={CalendarIcon} width={'49%'} />
                <HorizontalBlock text={'Спорт'} backImagePath={require('../../assets/pngs/BlockBack12.png')} Icon={BallIcon} width={'49%'} />
            </View>
            <HorizontalBlock text={'Всё о кино'} backImagePath={require('../../assets/pngs/BlockBack13.png')} Icon={FilmIcon} />
            <HorizontalBlock text={'Всё о играх'} backImagePath={require('../../assets/pngs/BlockBack14.png')} Icon={GameIcon} />
            <HorizontalBlock text={'Компьютеры и техника'} backImagePath={require('../../assets/pngs/BlockBack15.png')} Icon={ComputerIcon} />
            <View style={Styles.flexRowJustifyBetween}>
                <HorizontalBlock text={'Музыка'} backImagePath={require('../../assets/pngs/BlockBack16.png')} Icon={MusicIcon} width={'49%'} />
                <HorizontalBlock text={'Телефоны'} backImagePath={require('../../assets/pngs/BlockBack17.png')} Icon={PhoneIcon} width={'49%'} />
            </View>
        </ScrollView>
    </View>
}