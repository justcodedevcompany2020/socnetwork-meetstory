import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { MessageSvg } from "../assets/svgs/UserSvgs"
import { AppColors } from "../styles/AppColors"
import { Styles } from "../styles/Styles"
import { MoneyIcon } from "../assets/svgs/ProfileSvgs"
import { useNavigation } from "@react-navigation/native"
import Loading from "./Loading"
import { useSelector } from "react-redux"
import { imgUrl } from "../api/RequestHelpers"
import moment from "moment"
import 'moment/locale/ru'

export const UserNameBlock = ({ myProfile, loading, userInfo }) => {
    const navigation = useNavigation()
    const { user } = useSelector(state => state.auth)

    return <View style={{ width: '90%', marginTop: 30 }}>
        <View style={Styles.flexRowJustifyBetween}>
            {loading ? <Loading white /> : <View style={Styles.flexRow}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={myProfile ? { uri: user.avatar } : { uri: `${imgUrl}${userInfo.user.avatar}` }} />
                </View>
                {myProfile ?
                    <View>
                        <Text style={Styles.whiteSemiBold18}>{user?.name} {user?.surname}</Text>
                        <Text style={Styles.whiteRegular13}>@{user?.nickname}</Text>

                    </View>
                    :
                    <View>
                        <Text style={Styles.whiteSemiBold18}>{userInfo?.user.name} {userInfo?.user.surname}</Text>
                        <Text style={Styles.whiteRegular13}>{userInfo?.user.city.name}, {userInfo?.user.country.name} </Text>
                        <Text style={Styles.whiteRegular13}>@{userInfo?.user.nickname}</Text>
                    </View>}
            </View>}
            {myProfile ?
                <TouchableOpacity onPress={() => navigation.navigate('BalanceScreen')}>
                    <MoneyIcon />
                </TouchableOpacity>
                : <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { img: userInfo?.user.avatar, username: `${userInfo?.user.name} ${userInfo?.user.surname}`, id: userInfo?.user.id })}>
                    <MessageSvg />
                </TouchableOpacity>}
        </View>
        {myProfile ? <View style={{ marginVertical: 20 }}>
            <View style={Styles.flexRow}>
                <Text style={Styles.whiteMedium15}>Просмотров за день  </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ViewsPerDay')}>
                    <Text style={{ fontSize: 15, color: AppColors.WHITE_COLOR, textDecorationLine: 'underline' }}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.flexRow}>
                <Text style={Styles.whiteMedium15}>Просмотров за месяц  </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: AppColors.WHITE_COLOR, textDecorationLine: 'underline' }}>234</Text>
                </TouchableOpacity>
            </View>
        </View> :
            <View style={{ marginVertical: 20 }}>
                {!loading && <Text style={{ fontSize: 13, color: AppColors.WHITE_COLOR }}><Text style={Styles.whiteSemiBold13}>Дата регистрации:</Text>  {moment(userInfo?.user.created_at).locale('ru').format('D MMMM YYYY')} </Text>}
                {userInfo?.user.about_me && <Text style={Styles.whiteRegular13}><Text style={Styles.whiteSemiBold13}>Статус:</Text>  {userInfo?.user.about_me}</Text>}
            </View>
        }
    </View>
}

const styles = StyleSheet.create({
    imgContainer: {
        marginRight: 15,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: AppColors.CORNFLOWER_COLOR
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50
    }
})