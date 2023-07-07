import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Styles } from "../../../styles/Styles";
import InfoAboutPostBlock from "./InfoAboutPostBlock";
import { TextPostComponent } from "./TextPostComponent";

const { width } = Dimensions.get('screen')

export default function PostComponent({ postInfo, navigation }) {
    return <View style={styles.container}>
        {postInfo.img ?
            <Image source={postInfo.img} style={styles.postImg} /> :
            postInfo.text && <TextPostComponent text={postInfo.text} />
        }
        <InfoAboutPostBlock postInfo={postInfo} onPressComment={() => navigation.navigate('CommentsScreen', { postInfo })} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center',
    },
    postImg: {
        width: '100%',
        height: width - 40,
        borderRadius: 6,
        marginBottom: 10
    },
    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 80,
        marginRight: 8
    },

    numbers: {
        ...Styles.darkRegular12,
        marginBottom: 5,
    }
})