import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";


export default function InfoContainer({ labelText, value }) {
    return <View style={styles.container}>
        <View style={Styles.flexRowJustifyBetween}>
            <Text style={Styles.darkMedium15}>{labelText}</Text>
        </View>

        <View style={[Styles.flexRow, styles.inputContainer]}>
            <Text style={styles.input}>{value}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    inputContainer: {
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        marginTop: 10,
        height: 50,
        borderRadius: 6,
    },
    input: {
        width: '100%',
        paddingHorizontal: 15,
        height: 50,
        color: AppColors.DARK_CHARCOAL_COLOR,
        textAlignVertical: 'center'
    },
})