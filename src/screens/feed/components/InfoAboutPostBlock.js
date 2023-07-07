import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Styles } from "../../../styles/Styles";
import { CommentIcon, LikedIcon, ShareIcon, UnlikedIcon } from "../../../assets/svgs/FeedSvgs";
import { AppColors } from "../../../styles/AppColors";


export default function InfoAboutPostBlock({ postInfo, onPressComment }) {
    return <View style={[Styles.flexRowJustifyBetween, {width: '100%'}]}>
        <View style={[Styles.flexRow, { width: '40%' }]}>
            <Image source={postInfo.profileImg} style={styles.profileImg} />
            <View style={{ flexShrink: 1 }}>
                <Text style={Styles.darkSemiBold14} numberOfLines={1}>{postInfo.name}</Text>
                <Text style={Styles.darkRegular12}>{postInfo.username}</Text>
            </View>
        </View>
        <View style={Styles.flexRow}>
            {postInfo.liked ? <TouchableOpacity>
                <LikedIcon />
            </TouchableOpacity> : <TouchableOpacity>
                <UnlikedIcon />
            </TouchableOpacity>}
            <Text style={styles.numbers}>{postInfo.likes}</Text>
            <TouchableOpacity onPress={onPressComment}>
                <CommentIcon />
            </TouchableOpacity>
            <Text style={styles.numbers}>{postInfo.comments}</Text>
            <TouchableOpacity>
                <ShareIcon />
            </TouchableOpacity>
            <Text style={styles.numbers}>{postInfo.shares}</Text>
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