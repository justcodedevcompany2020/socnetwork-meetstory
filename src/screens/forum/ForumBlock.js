import React from "react";
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import { Styles } from "../../styles/Styles";
import InfoAboutPostBlock from "../feed/components/InfoAboutPostBlock";
import { Shadow } from "react-native-shadow-2";
import { AppColors } from "../../styles/AppColors";

const { width } = Dimensions.get('screen')

export default function ForumBlock({ forumInfo, onPressForum }) {
    return <View style={{ marginBottom: 25 }}>
        <InfoAboutPostBlock postInfo={forumInfo} />

        <TouchableOpacity onPress={onPressForum}>
            <Shadow distance={3} containerStyle={[, { marginHorizontal: 3, marginTop: 10, }]} style={[{ width: '100%', padding: 10, borderRadius: 6 }, Styles.flexRow,]} >
                <Image source={forumInfo.image} style={styles.img} />
                <Text style={[{ flexShrink: 1, marginLeft: 10 }, Styles.blackRegular12]}>Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны</Text>
            </Shadow>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    img: {
        height: 55,
        width: 55,
        borderWidth: 1,
        borderColor: AppColors.LAVENDER_COLOR,
        borderRadius: 4
    }
})