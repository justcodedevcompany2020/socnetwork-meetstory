import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import InfoAboutPostBlock from "./InfoAboutPostBlock";
import { TextPostComponent } from "./TextPostComponent";
import Slider from "../../../components/Slider";

const { width } = Dimensions.get('screen')

export default function PostComponent({ postInfo, navigation, myAccount }) {
    return <View style={styles.container}>
        {postInfo?.photo.length ? <Slider images={postInfo?.photo} postId={postInfo.id} /> : null}
        {postInfo?.description ? <TextPostComponent text={postInfo?.description} postId={postInfo.id} /> : null}
        <InfoAboutPostBlock postInfo={postInfo} onPressComment={() => navigation.navigate('PostSinglePage', { postInfo })} myAccount={myAccount} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        alignItems: 'center',
    },
    postImg: {
        width: '100%',
        height: width - 40,
        borderRadius: 6,
        marginBottom: 5
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