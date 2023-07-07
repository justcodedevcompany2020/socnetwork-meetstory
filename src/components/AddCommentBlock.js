import React from "react";
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SendIcon } from "../assets/svgs/HomeSvgs";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";


export default function AddCommentBlock() {
    return <View style={[styles.container]}>
        <View style={[Styles.flexRowJustifyBetween, {width: '80%', alignSelf: 'center'}]}>
            <TextInput
                style={styles.input}
                placeholder="Добавить комментарий"
            />
            <TouchableOpacity>
                <SendIcon />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingTop: 20,
        backgroundColor: AppColors.WHITE_COLOR
    },
    input: {
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        width: '85%',
        borderRadius: 10,
        paddingHorizontal: 15,
        ...Styles.darkMedium14,
        height: 40,
    }
})