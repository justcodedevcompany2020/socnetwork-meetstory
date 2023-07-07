import { Image, StyleSheet, TouchableOpacity, View,Text } from "react-native"
import { MessageSvg } from "../assets/svgs/UserSvgs"
import { AppColors } from "../styles/AppColors"
import { Styles } from "../styles/Styles"

export const UserNameBlock = ({userInfo}) =>{
    return <View style = {[Styles.flexRowJustifyBetween, {width: '90%', marginTop: 30 }]}>
        <View style = {Styles.flexRow}>
            <View style = {styles.imgContainer}>
                <Image style = {styles.img} source={require('../assets/pngs/ProfileDefault.png')}/>
            </View>
            <View>
                <Text style = {Styles.whiteSemiBold16}>Harper Anderson</Text>
                <Text style = {Styles.whiteRegular12}>Мосвка, Россия </Text>
                <Text style = {Styles.whiteRegular12}>ID: 45778899</Text>
            </View>
        </View>
        <TouchableOpacity >
                <MessageSvg />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    imgContainer:{
        marginRight: 15,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: AppColors.CORNFLOWER_COLOR
    },
    img:{
        width:50,
        height:50,
        borderRadius: 50
    }
})