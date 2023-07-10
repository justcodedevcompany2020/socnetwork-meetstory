import { BlurView } from "@react-native-community/blur";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../styles/AppColors";
import { CrossIcon } from "../assets/svgs/AuthSvgs";
import { Styles } from "../styles/Styles";


export default function Popup({ showModal, setShowModal, title, hidePadding, children }) {
    return <Modal visible={showModal} animationType="fade" transparent={true} >
        <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <View style={[styles.container, hidePadding && {paddingHorizontal: 5}]}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 5 }} onPress={() => setShowModal(false)}>
                    <CrossIcon />
                </TouchableOpacity>
                <Text style={[Styles.DarkSemiBold20, { marginBottom: 30, textAlign: 'center', }]}>{title}</Text>
                {children}
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        alignSelf: 'center',
        backgroundColor: AppColors.WHITE_COLOR,
        width: '90%',
        padding: 15,
        borderRadius: 15
    }
});
