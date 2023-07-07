
import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { BackIcon } from '../assets/svgs/AuthSvgs';
import { PlusIcon } from '../assets/svgs/NavigationMenuSvgs';
import { AppColors } from '../styles/AppColors';
import { Styles } from '../styles/Styles';
//icon
export default function HeaderTitle({ title, navigation, plusIcon, hideArrow, hideBackText }) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={[title && { width: windowWidth - 30 }, Styles.flexRow, { justifyContent: 'center', marginTop: 15 }]}>
            {!hideArrow && <TouchableOpacity onPress={() => navigation.goBack()} style={[{ position: 'absolute', left: 15 }, Styles.flexRow]}>
                <BackIcon />
                {!hideBackText && <Text style={{ fontSize: 15, color: AppColors.CRIMSON_COLOR, fontFamily: 'Inter-Medium', marginLeft: 5 }}>Назад</Text>}
            </TouchableOpacity>}
            {title &&
                <Text style={{
                    textAlign: 'center',
                    fontFamily: 'Inter-Bold',
                    color: AppColors.BLACK_COLOR,
                    fontSize: 16
                }}>{title}</Text>}
            {plusIcon &&
                <TouchableOpacity style={{ position: 'absolute', right: 0 }} onPress={() => navigation.navigate('AddCardScreen')}>
                    <PlusIcon />
                </TouchableOpacity>}
        </View>
    );
}
