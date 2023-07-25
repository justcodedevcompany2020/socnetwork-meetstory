import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text, ActivityIndicator } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Styles } from "../../styles/Styles";
import { AppColors } from "../../styles/AppColors";
import { imgUrl, postRequestAuth } from "../../api/RequestHelpers";
import moment from "moment";
import 'moment/locale/ru'
import { useSelector } from "react-redux";

export default function FriendRequestBlock({ requestInfo }) {
    const { token } = useSelector(state => state.auth)
    const [requestState, setRequestState] = useState('active')
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [rejectLoading, setRejectLoading] = useState(false)

    function dateFormat() {
        const currentDate = moment();
        const myDate = moment(requestInfo.created_at)

        const TODAY = currentDate.clone().startOf('day');
        const YESTERDAY = currentDate.clone().subtract(1, 'days').startOf('day');
        const A_WEEK_OLD = currentDate.clone().subtract(7, 'days').startOf('day');

        if (myDate.isSame(TODAY, 'd')) {
            return 'Сегодня в ' + moment(myDate).format("HH:mm ")
        }
        else if (myDate.isSame(YESTERDAY, 'd')) {
            return 'Вчера в ' + moment(myDate).format("HH:mm ")
        }
        else if (myDate.isAfter(A_WEEK_OLD)) {
            return moment(myDate).format("dddd, в HH:mm ").replace(/\b[a-z]/, match => match.toUpperCase())
        }
        else {
            return moment(myDate).format("MMMM D, в HH:mm ")
        }

    }

    function confirm() {
        setConfirmLoading(true)
        
        postRequestAuth('confirm_friend_request', token, {
            user_id: requestInfo.sender_id.id
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setRequestState('confirmed')
                setConfirmLoading(false)
            }
        })
    }

    function reject() {
        setRejectLoading(true)
        postRequestAuth('reject_friend_request', token, {
            user_id: requestInfo.sender_id.id
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setRequestState('rejected')
                setRejectLoading(false)
            }
        })
    }


    return <Shadow distance={3} containerStyle={{ marginBottom: 15, marginHorizontal: 5, marginTop: 3 }} style={{ width: '100%' }}>
        <TouchableOpacity style={styles.container}>
            <View style={[Styles.flexRow, { width: '100%', alignItems: 'flex-start' }]}>
                <Image source={{ uri: `${imgUrl}${requestInfo.sender_id.avatar}` }} style={styles.image} />
                <View style={{ flexShrink: 1 }}>
                    <Text style={[Styles.darkMedium12, { marginBottom: 4 }]}>Пользователь {requestInfo.sender_id.name} отправил запрос на добавления в друзья</Text>
                    <View style={Styles.flexRowJustifyBetween}>
                        <Text style={{ color: AppColors.LOCHMARA_COLOR, fontSize: 10, }}>{dateFormat()} </Text>
                        {requestState == 'confirmed' && <Text style={[Styles.darkBlueMedium12, { textAlign: 'right' }]}>Запрос принят</Text>}
                        {requestState == 'rejected' && <Text style={[Styles.darkBlueMedium12, { textAlign: 'right' }]}>Запрос отклонен</Text>}
                    </View>
                </View>
            </View>
            {requestState == 'active' && <View style={[Styles.flexRowJustifyBetween, { marginTop: 15 }]}>
                <TouchableOpacity style={[styles.button, { backgroundColor: AppColors.STEEL_BLUE_COLOR }]} onPress={confirmLoading ? null : confirm}>
                    {confirmLoading ? <ActivityIndicator size={"small"} color={AppColors.WHITE_COLOR} /> : <Text style={[Styles.whiteSemiBold10, { marginBottom: 3 }]}>Принять</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: AppColors.BITTERSWEET_COLOR }]} onPress={rejectLoading ? null : reject}>
                    {rejectLoading ? <ActivityIndicator size={"small"} color={AppColors.WHITE_COLOR} /> : <Text style={[Styles.whiteSemiBold10, { marginBottom: 3 }]}>Отказаться</Text>}
                </TouchableOpacity>
            </View>}
        </TouchableOpacity>
    </Shadow>
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 4,
        marginRight: 15
    },
    button: {
        height: 25,
        borderRadius: 4,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})