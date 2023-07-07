import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../styles/Styles";
import { WhiteArrowRight } from "../assets/svgs/HomeSvgs";


export default function HorizontalBlock({ Icon, text, backImagePath, onPress, thin, width }) {
    return <TouchableOpacity onPress={onPress} style={width && { width: width }}>
        <ImageBackground source={backImagePath} style={[Styles.flexRowJustifyBetween, thin ? styles.thinBlockContainer : styles.blockContainer,]} borderRadius={15}>
            <View style={thin ? Styles.flexRow : { alignSelf: 'center' }}>
                {Icon && <Icon />}
                <Text style={[Styles.whiteSemiBold15, thin && { marginLeft: 10 }, {marginBottom: 5}]}>{text}</Text>
            </View>
            <WhiteArrowRight />
        </ImageBackground>
    </TouchableOpacity>

}


const styles = StyleSheet.create({
    blockContainer: {
        marginBottom: 5,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        paddingTop: 5,
        height: 78,
        // minWidth:'38.5%',
    },
    thinBlockContainer: {
        alignItems: 'center',
        height: 55,
        marginBottom: 5,
        paddingHorizontal: 15
    }
})