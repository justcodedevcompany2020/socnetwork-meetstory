import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { MessageSvg } from "../assets/svgs/UserSvgs"
import { AppColors } from "../styles/AppColors"
import { Styles } from "../styles/Styles"
import { MoneyIcon } from "../assets/svgs/ProfileSvgs"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { getRequestAuth, imgUrl } from "../api/RequestHelpers"
import { useEffect, useState } from "react"

export const UserNameBlock = ({ userInfo, myProfile }) => {
    const navigation = useNavigation()
    const { token } = useSelector(state => state.auth)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserInfo()
    }, [])
    
    function getUserInfo() {
        getRequestAuth('get_auth_user_info', token).then(res => {
            console.log(res);
            if (res.status == true) {
                setUser(res.data)
            }
        })
    }


    return <View style={[Styles.flexRowJustifyBetween, { width: '90%', marginTop: 30 }]}>
        <View style={Styles.flexRow}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={user ? { uri: `${imgUrl}${user.avatar}` } : require('../assets/pngs/ProfileDefault.png')} />
            </View>
            {myProfile ?
                <View>
                    <Text style={Styles.whiteSemiBold18}>{user?.name} {user?.surname}</Text>
                    <Text style={Styles.whiteRegular13}>@{user?.nik_name}</Text>
                </View>
                :
                <View>
                    <Text style={Styles.whiteSemiBold18}>Harper Anderson</Text>
                    <Text style={Styles.whiteRegular13}>Мосвка, Россия </Text>
                    <Text style={Styles.whiteRegular13}>ID: 45778899</Text>
                </View>}
        </View>
        {myProfile ?
            <TouchableOpacity onPress={() => navigation.navigate('BalanceScreen')}>
                <MoneyIcon />
            </TouchableOpacity>
            : <TouchableOpacity >
                <MessageSvg />
            </TouchableOpacity>}
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