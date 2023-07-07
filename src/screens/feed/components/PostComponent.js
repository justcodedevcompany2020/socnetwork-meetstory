import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import InfoAboutPostBlock from "./InfoAboutPostBlock";

const { width } = Dimensions.get('screen')

export default function PostComponent({ postInfo, navigation }) {
    return <View style={styles.container}>
        <Image source={postInfo.img} style={styles.postImg} />
        <InfoAboutPostBlock postInfo={postInfo} onPressComment={() => navigation.navigate('CommentsScreen', { postInfo })}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
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