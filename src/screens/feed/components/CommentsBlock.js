import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import { AppColors } from "../../../styles/AppColors";
import { CommentIcon16, CommentSettingsIcon, UnlikedIcon16 } from "../../../assets/svgs/FeedSvgs";
import AddCommentBlock from "../../../components/AddCommentBlock";

const comments = [
    {
        name: 'Lily Parker',
        username: '@floraldreams',
        profileImg: require('../../../assets/pngs/postUser2.png'),
        text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
        date: '2 mins',
        likesCount: 15,
        commentsCount: 6,
        comments: []
    },
    {
        name: 'Lily Parker',
        username: '@floraldreams',
        profileImg: require('../../../assets/pngs/postUser2.png'),
        text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
        date: '2 mins',
        likesCount: 15,
        commentsCount: 6,
        comments: [
            {
                name: 'Lily Parker',
                username: '@floraldreams',
                profileImg: require('../../../assets/pngs/postUser2.png'),
                text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
                date: '2 mins',
                likesCount: 15,
                commentsCount: 6,
                comments: []
            },
            {
                name: 'Lily Parker',
                username: '@floraldreams',
                profileImg: require('../../../assets/pngs/postUser2.png'),
                text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
                date: '2 mins',
                likesCount: 15,
                commentsCount: 6,
                comments: [
                    {
                        name: 'Lily Parker',
                        username: '@floraldreams',
                        profileImg: require('../../../assets/pngs/postUser2.png'),
                        text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
                        date: '2 mins',
                        likesCount: 15,
                        commentsCount: 6,
                        comments: []
                    },
                ]
            },
        ]
    },
    {
        name: 'Lily Parker',
        username: '@floraldreams',
        profileImg: require('../../../assets/pngs/postUser2.png'),
        text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
        date: '2 mins',
        likesCount: 15,
        commentsCount: 6,
        comments: [
            {
                name: 'Lily Parker',
                username: '@floraldreams',
                profileImg: require('../../../assets/pngs/postUser2.png'),
                text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
                date: '2 mins',
                likesCount: 15,
                commentsCount: 6,
                comments: []
            }
        ]
    }
]

export default function CommentsBlock() {
    return <View>
        <ScrollView style={{ paddingHorizontal: 15, marginBottom: 90 }}>
            <View>
                {comments.map((item, i) => <CommentItem key={i} commentInfo={item} />)}
            </View>
        </ScrollView>
       
    </View>
}

export function CommentItem({ commentInfo }) {
    return <View style={{ marginTop: 20 }}>
        <View style={Styles.flexRow}>
            <Image source={commentInfo.profileImg} style={styles.profileImg} />
            <View>
                <Text style={Styles.darkSemiBold14}>{commentInfo.name}</Text>
                <Text style={Styles.darkRegular12}>{commentInfo.username}</Text>
            </View>
        </View>
        <View style={[{ marginLeft: 15, paddingLeft: 23 }, commentInfo.comments.length > 0 && { borderLeftWidth: 1, borderColor: AppColors.FIRST_SNOW_COLOR, marginTop: 5 }]}>
            <View style={styles.comment}>
                <View style={Styles.flexRowJustifyBetween}>
                    <Text style={Styles.darkMedium15}>{commentInfo.date}</Text>
                    <TouchableOpacity>
                        <CommentSettingsIcon />
                    </TouchableOpacity>
                </View>
                <Text style={[Styles.darkRegular15, { marginVertical: 8 }]}>
                    {commentInfo.text}
                </Text>
                <View style={Styles.flexRow}>
                    <TouchableOpacity>
                        <UnlikedIcon16 />
                    </TouchableOpacity>
                    <Text style={styles.numbers}>  {commentInfo.likesCount}</Text>
                    <TouchableOpacity>
                        <CommentIcon16 />
                    </TouchableOpacity>
                    <Text style={styles.numbers}>  {commentInfo.commentsCount}</Text>
                </View>
            </View>
            <View>
                {commentInfo.comments.map((item, i) => <CommentItem commentInfo={item} key={i} />)}
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 80,
        marginRight: 10
    },
    comment: {
        padding: 8,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: AppColors.ALICE_BLUE_COLOR
    },
    numbers: {
        ...Styles.darkMedium12,
        marginBottom: 5,
        marginRight: 15
    },
})