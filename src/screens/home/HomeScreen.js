import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import { ChatIcon, FeedIcon, FireIcon, ForumIcon, GiftIcon, HelpIcon, NewFacesIcon, SortIcon, StarIcon } from "../../assets/svgs/HomeSvgs";
import UserBlock from "../../components/UserBlock";
import Button from "../../components/Button";
import HorizontalBlock from "../../components/HorizontalBlock";
import { getRequestAuth } from "../../api/RequestHelpers";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";


export default function HomeScreen({ navigation }) {
    const [newFaces, setNewFaces] = useState([])
    const [newFacesLoading, setNewFacesLoading] = useState(true)
    const { token } = useSelector(state => state.auth)
    const scrollRef = useRef()

    useEffect(() => {
        if (token) {
            getNewFaces()
            scrollRef.current?.scrollTo({ x: 0, y: 0 })
        }
    }, [token])

    function getNewFaces() {
        getRequestAuth('new_registered_users/3', token).then(res => {
            setNewFaces(res.data.data)
            setNewFacesLoading(false);
        })
    }

    return <View style={{ flex: 1, backgroundColor: AppColors.WHITE_COLOR, paddingTop: 45 }}>
        <View style={[Styles.flexRowJustifyBetween, { padding: 20, }]}>
            <Image source={require('../../assets/pngs/BlueLogo.png')} style={{ width: 138, height: 30 }} />
            <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
                <ChatIcon />
            </TouchableOpacity>
        </View>
        <ScrollView ref={scrollRef} >
            <View style={Styles.blockContainer}>
                <TitleBlock text={'Авторитет города'} Icon={FireIcon} />
                <UserBlock authorityMode />
                <Button height={40} text={'Стать авторитетом'} onPress={() => navigation.navigate('BecomeAnAuthority')} />
            </View>

            {newFacesLoading ? <Loading marginTop={20} /> : <View style={Styles.blockContainer}>
                <TitleBlock text={'Новые лица'} Icon={NewFacesIcon} />
                {newFaces.map((item, i) => <UserBlock userInfo={item} key={i} activityStatus />)}
                <Button height={40} text={'Смотреть больше'} onPress={() => navigation.navigate('NewFacesScreen')} />
            </View>}

            <View style={Styles.blockContainer}>
                <HorizontalBlock Icon={FeedIcon} text={'Лента'} backImagePath={require('../../assets/pngs/BlockBack1.png')} thin onPress={() => navigation.navigate('FeedScreen')} />
                <HorizontalBlock Icon={ForumIcon} text={'Форум'} backImagePath={require('../../assets/pngs/BlockBack2.png')} thin onPress={() => navigation.navigate('ForumScreen')} />
            </View>

            <View style={Styles.blockContainer}>
                <HorizontalBlock Icon={SortIcon} text={'Поднять анкету наверх'} backImagePath={require('../../assets/pngs/BlockBack3.png')} thin onPress={() => navigation.navigate('RaisingProfile')} />
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

