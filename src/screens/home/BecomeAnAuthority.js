import React from "react";
import { ScrollView, Text, View } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { TitleBlock } from "./HomeScreen";
import { BlueHeart18, BrokenHeart18, DiamondIcon18, FireIcon, GemStoneIcon, YellowStarIcon } from "../../assets/svgs/HomeSvgs";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";
import Button from "../../components/Button";

export default function BecomeAnAuthority({navigation}) {
    return <View style={Styles.containerTopPadding}>
        <ScrollView>
            <View style={Styles.blockContainer}>
                <View style={[Styles.flexRow, { marginBottom: 20 }]}>
                    <FireIcon />
                    <Text style={{ marginLeft: 5, fontSize: 16, color: AppColors.STEEL_BLUE_COLOR }}>
                        ТОП 5
                        <Text style={[Styles.blueMedium16]}> авторитетов</Text>
                    </Text>
                </View>
                <UserBlock authorityMode />
                <UserBlock authorityMode />
                <UserBlock authorityMode />
            </View>
            <View style={Styles.blockContainer}>
                <TitleBlock text={'Купить сердца авторитета'} />
                <View style={Styles.flexRow}>
                    <BrokenHeart18 />
                    <Text style={[Styles.darkMedium14, { paddingBottom: 5 }]}> - 1 шт.</Text>
                </View>
                <View style={Styles.flexRow}>
                    <BrokenHeart18 />
                    <Text style={[Styles.darkMedium14, { paddingBottom: 5 }]}> - 1 шт.</Text>
                </View>
                <View style={Styles.flexRow}>
                    <BrokenHeart18 />
                    <Text style={[Styles.darkMedium14, { paddingBottom: 5 }]}> - 1 шт.</Text>
                </View>
                <View style={Styles.flexRow}>
                    <BrokenHeart18 />
                    <Text style={[Styles.darkMedium14, { paddingBottom: 5 }]}> - 1 шт.</Text>
                </View>
                <View style={Styles.flexRow}>
                    <BrokenHeart18 />
                    <Text style={[Styles.darkMedium14, { paddingBottom: 5 }]}> - 1 шт.</Text>
                </View>
            </View>
            <View style={Styles.blockContainer}>
                <TitleBlock text={'Система авторитета'} />
                <View style={[Styles.flexRow, { marginBottom: 10 }]}>
                    <BrokenHeart18 />
                    <BrokenHeart18 />
                    <BrokenHeart18 />
                    <BrokenHeart18 />
                    <BrokenHeart18 />
                    <Text style={Styles.darkMedium14}>- </Text>
                    <BlueHeart18 />
                </View>
                <View style={[Styles.flexRow, { marginBottom: 10 }]}>
                    <BlueHeart18 />
                    <BlueHeart18 />
                    <BlueHeart18 />
                    <BlueHeart18 />
                    <BlueHeart18 />
                    <Text style={Styles.darkMedium14}>- </Text>
                    <DiamondIcon18 />
                </View>
                <View style={[Styles.flexRow, { marginBottom: 10 }]}>
                    <DiamondIcon18 />
                    <DiamondIcon18 />
                    <DiamondIcon18 />
                    <DiamondIcon18 />
                    <DiamondIcon18 />
                    <Text style={Styles.darkMedium14}>- </Text>
                    <GemStoneIcon />
                </View>
                <View style={[Styles.flexRow, { marginBottom: 40 }]}>
                    <GemStoneIcon />
                    <GemStoneIcon />
                    <GemStoneIcon />
                    <GemStoneIcon />
                    <GemStoneIcon />
                    <Text style={Styles.darkMedium14}>- </Text>
                    <YellowStarIcon />
                </View>
                <Button text={'Купить авторитет'} height={40} onPress={() => navigation.navigate('BuyingAuthority')}/>
            </View>

        </ScrollView>
    </View>
}