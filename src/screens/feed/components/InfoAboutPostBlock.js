import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import { CommentIcon, LikedIcon, UnlikedIcon } from "../../../assets/svgs/FeedSvgs";
import { AppColors } from "../../../styles/AppColors";
import { imgUrl } from "../../../api/RequestHelpers";
import { useNavigation } from "@react-navigation/native";


export default function InfoAboutPostBlock({ postInfo, onPressComment, myAccount }) {
    const navigation = useNavigation()
    return <View style={[Styles.flexRowJustifyBetween, { width: '100%', marginVertical: 10 }]}>
        <TouchableOpacity style={[Styles.flexRow, { width: '40%' }]} onPress={() => myAccount ? navigation.navigate('Profile', { screen: 'MyProfileScreen' }) : navigation.navigate('UserScreen', { userId: postInfo.user_id })}>
            <Image source={{ uri: `${imgUrl}${postInfo?.user.avatar}` }} style={styles.profileImg} />
            <View style={{ flexShrink: 1 }}>
                <Text style={Styles.darkSemiBold14} numberOfLines={1}>{postInfo?.user.name} {postInfo?.user.surname}</Text>
                <Text style={Styles.darkRegular12}>@{postInfo.user.nickname}</Text>
            </View>
        </TouchableOpacity>
        <View style={Styles.flexRow}>
            {postInfo?.like_auth_user.length ? <TouchableOpacity>
                <LikedIcon />
            </TouchableOpacity> : <TouchableOpacity>
                <UnlikedIcon />
            </TouchableOpacity>}
            <Text style={styles.numbers}>{postInfo?.like_count}</Text>
            <TouchableOpacity onPress={onPressComment}>
                <CommentIcon />
            </TouchableOpacity>
            <Text style={styles.numbers}>{postInfo?.comment_count}</Text>
        </View>
    </View>
}


const styles = StyleSheet.create({
    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 80,
        marginRight: 8
    },
    numbers: {
        color: AppColors.DARK_CHARCOAL_COLOR,
        fontSize: 12,
        textAlignVertical: 'center'
    },

})