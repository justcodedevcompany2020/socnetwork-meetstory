import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlackBackIcon, BlueBackIcon, PlusIcon } from "../assets/svgs/AuthSvgs";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";

export default function Header({ title, navigation, backIcon, plusIcon, blackBackIcon }) {
    return <View style={styles.container}>
        <Text style={[Styles.blueSemiBold20, styles.title]} numberOfLines={1}>{title}</Text>
        {backIcon && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <BlueBackIcon />
        </TouchableOpacity>}
        {blackBackIcon && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <BlackBackIcon />
        </TouchableOpacity>}
        {plusIcon && <TouchableOpacity style={styles.plusIcon}>
            <PlusIcon />
        </TouchableOpacity>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.WHITE_COLOR,
        height: 80,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backIcon: {
        position: 'absolute',
        height: 80,
        paddingLeft: 20,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusIcon: {
        position: 'absolute',
        height: 80,
        paddingRight: 20,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlignVertical: 'center',
        width: '58%',
        height: 80,
        alignSelf: 'center',
        textAlign: 'center',
        // marginBottom: 3
        // backgroundColor: 'red',
        lineHeight: 20
        
    },

})