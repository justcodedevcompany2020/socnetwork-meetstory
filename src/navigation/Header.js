import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { BlackBackIcon, BlueBackIcon, PlusIcon } from "../assets/svgs/AuthSvgs";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";

export default function Header({ title, chatHeader, navigation, backIcon, plusIcon, blackBackIcon, onPressPlus }) {
    return <View style={styles.container}>

        { chatHeader ? 
            <View style={[Styles.flexRow, {backgroundColor: 'red', alignSelf: 'center', justifyContent: 'center'}]}> 
                <Image source={chatHeader.img} style={{width: 25, height: 25, borderRadius: 50}}/>
                <Text style={[Styles.darkMedium20, styles.title]} numberOfLines={1}>{chatHeader.username}</Text>      
            </View>
        : <Text style={[Styles.blueSemiBold20, styles.title]} numberOfLines={1}>{title}</Text>}
        {backIcon && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <BlueBackIcon />
        </TouchableOpacity>}
        {blackBackIcon && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <BlackBackIcon />
        </TouchableOpacity>}
        {plusIcon && <TouchableOpacity style={styles.plusIcon} onPress={onPressPlus}>
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