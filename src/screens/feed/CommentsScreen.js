import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { BackIcon } from "../../assets/svgs/AuthSvgs";
import { Shadow } from "react-native-shadow-2";
import InfoAboutPostBlock from "./components/InfoAboutPostBlock";
import CommentsBlock from "./components/CommentsBlock";
import AddCommentBlock from "../../components/AddCommentBlock";

const { width } = Dimensions.get('screen')

export default function CommentsScreen({ navigation, route }) {
    const { postInfo } = route.params

    return <View style={{ flex: 1, backgroundColor: AppColors.WHITE_COLOR }}>
        <ScrollView>
            <Image source={postInfo.img} style={styles.postImg} />
            <TouchableOpacity style={{ position: 'absolute', top: 60, left: 15 }} onPress={() => navigation.goBack()}>
                <BackIcon />
            </TouchableOpacity>
            <Shadow style={[styles.shadow,]} distance={3} sides={{ bottom: true, top: false }} >
                <InfoAboutPostBlock postInfo={postInfo} />
            </Shadow>
            <CommentsBlock />
        </ScrollView>
        <AddCommentBlock />
    </View >
}

const styles = StyleSheet.create({
    postImg: {
        marginTop: 45,
        width: '100%',
        height: width - 40,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    shadow: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    }
})