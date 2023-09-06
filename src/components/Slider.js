import React, { useState } from "react";
import { Image, Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { imgUrl } from "../api/RequestHelpers";
import { AppColors } from "../styles/AppColors";

const { width } = Dimensions.get('window')

export default function Slider({ images, productSlider }) {
    const [index, setIndex] = useState(0);

    function handleScroll(event) {
        const slider = Math.ceil(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width,
        );
        setIndex(slider)
    }

    return <>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} pagingEnabled onScroll={handleScroll}>
            {images.map((image, i) => <Image source={{ uri: `${imgUrl}${image.photo}` }} style={styles.image} resizeMode={'cover'} key={i} />)}
        </ScrollView>
        {images.length > 1 ? <View style={[styles.circlesContainer, productSlider && { top: 240 }]}>
            {images.map((item, i) => <View style={[styles.circle, index === i && { opacity: 1 }]} key={i} />)}
        </View> : null}
    </>
}


const styles = StyleSheet.create({
    circlesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        bottom: 120,
        flexDirection: 'row',
    },
    circle: {
        width: 9,
        height: 9,
        borderRadius: 50,
        marginHorizontal: 5,
        backgroundColor: AppColors.WHITE_COLOR,
        opacity: 0.6
    },
    image: {
        width: width - 40,
        height: width - 40,
        borderRadius: 6
    },
    productImage: {
        height: 230,
        width: width - 40,
    },
    container: {
        // marginHorizontal: 20,
        marginBottom: 10,
    },

})