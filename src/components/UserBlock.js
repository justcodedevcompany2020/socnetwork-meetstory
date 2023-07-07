import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import { Shadow } from 'react-native-shadow-2';
import { BlueCommentIcon, BlueHeart14, BrokenHeart14 } from "../assets/svgs/HomeSvgs";

export default function UserBlock({ authorityMode, activityStatus, chatIcon, selected, rating, moveEnd }) {
    return <Shadow distance={3} containerStyle={{ marginBottom: 10, marginHorizontal: 5, marginTop: 3 }} style={{ width: '100%' }}>
        <TouchableOpacity style={[styles.container, Styles.flexRowJustifyBetween, selected && { borderWidth: 2, borderColor: AppColors.GOLD_COLOR, backgroundColor: AppColors.LEMON_COLOR }]}>
            <View style={[Styles.flexRowJustifyBetween, { width: '100%', alignItems: 'flex-start' }]}>
                <View style={[Styles.flexRow]}>
                    <Image source={require('../assets/pngs/ProfileDefault.png')} style={{ width: 50, height: 50}} resizeMode='stretch' />
                    <View style={{ marginLeft: 15,  height: 50, justifyContent: 'space-between',}}>
                        <Text style={[Styles.darkMedium15, {lineHeight: 17}]}>John Smith</Text>
                        <Text style={Styles.darkBlueMedium12}>Мосвка, Россия </Text>
                        <Text style={{fontSize: 10, color: AppColors.DARK_CHARCOAL_COLOR}}>31<Text style={Styles.darkRegular10}> год</Text></Text>
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
                    <View style={[styles.activityBlock, moveEnd && { justifyContent: 'flex-end' }]}>
                        {chatIcon && <BlueCommentIcon />}
                        <Text style={Styles.darkBlueSemiBold10}>Cегодня в 13:44</Text>
                    </View> : rating ?
                        <Text style={Styles.darkBlueSemiBold10}>
                            Рейтинг: 100500+
                        </Text>
                        : null}
            </View>
        </TouchableOpacity>
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
        height: 50,
    },
})