import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import { ChatIcon, FeedIcon, FireIcon, ForumIcon, GiftIcon, HelpIcon, NewFacesIcon, SortIcon, StarIcon } from "../../assets/svgs/HomeSvgs";
import UserBlock from "../../components/UserBlock";
import Button from "../../components/Button";
import HorizontalBlock from "../../components/HorizontalBlock";


export default function HomeScreen({ navigation }) {
    return <View style={{ flex: 1, backgroundColor: AppColors.WHITE_COLOR, paddingTop: 45 }}>
        <View style={[Styles.flexRowJustifyBetween, { padding: 20, }]}>
            <Image source={require('../../assets/pngs/BlueLogo.png')} style={{ width: 138, height: 30 }} />
            <TouchableOpacity>
                <ChatIcon />
            </TouchableOpacity>
        </View>
        <ScrollView>
            <View style={Styles.blockContainer}>
                <TitleBlock text={'Авторитет города'} Icon={FireIcon} />
                <UserBlock authorityMode />
                <Button height={40} text={'Стать авторитетом'} onPress={() => navigation.navigate('BecomeAnAuthority')} />
            </View>

            <View style={Styles.blockContainer}>
                <TitleBlock text={'Новые лица'} Icon={NewFacesIcon} />
                <UserBlock activityStatus />
                <UserBlock activityStatus />
                <UserBlock activityStatus />
                <Button height={40} text={'Смотреть больше'} onPress={() => navigation.navigate('NewFacesScreen')} />
            </View>

            <View style={Styles.blockContainer}>
                <HorizontalBlock Icon={FeedIcon} text={'Лента'} backImagePath={require('../../assets/pngs/BlockBack1.png')} thin onPress={() => navigation.navigate('FeedScreen')} />
                <HorizontalBlock Icon={ForumIcon} text={'Форум'} backImagePath={require('../../assets/pngs/BlockBack2.png')} thin onPress={() => navigation.navigate('ForumScreen')} />
            </View>

            <View style={Styles.blockContainer}>
                <HorizontalBlock Icon={SortIcon} text={'Поднять анкету наверх'} backImagePath={require('../../assets/pngs/BlockBack3.png')} thin />
                <HorizontalBlock Icon={GiftIcon} text={'Подарки'} backImagePath={require('../../assets/pngs/BlockBack4.png')} onPress={() => navigation.navigate('GiftsScreen')} thin />
                <HorizontalBlock Icon={StarIcon} text={'ТОП 100'} backImagePath={require('../../assets/pngs/BlockBack5.png')} onPress={() => navigation.navigate('Top100Screen')} thin />
            </View>
            <View style={Styles.blockContainer}>
                <HorizontalBlock Icon={HelpIcon} text={'Помощь'} backImagePath={require('../../assets/pngs/BlockBack6.png')} onPress={() => navigation.navigate('HelpScreen')} thin />
                <View style={{ alignItems: 'center' }}>
                    <View style={Styles.flexRow}>
                        <Text style={Styles.darkRegular15}>Всего пользователей:  </Text>
                        <Text style={{ color: AppColors.STEEL_BLUE_COLOR, fontWeight: '500' }}>8756884</Text>
                    </View>
                    <View style={Styles.flexRow}>
                        <Text style={Styles.darkRegular15}> Сейчас онлайн: </Text>
                        <Text style={{ color: AppColors.STEEL_BLUE_COLOR, fontWeight: '500' }}>5679</Text>
                    </View>
                </View>
            </View>
        </ScrollView >
    </View >
}


export function TitleBlock({ text, Icon }) {
    return <View style={[Styles.flexRow, { marginBottom: 20 }]}>
        {Icon && <Icon />}
        <Text style={[Styles.blueMedium16, Icon && { marginLeft: 5 }]}>{text}</Text>
    </View>
}

