import React from "react";
import { ScrollView, View, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import { Styles } from "../../styles/Styles";
import { AppColors } from "../../styles/AppColors";
import InfoAboutPostBlock from "../feed/components/InfoAboutPostBlock";
import { Shadow } from "react-native-shadow-2";
import CommentsBlock from "../feed/components/CommentsBlock";
import AddCommentBlock from "../../components/AddCommentBlock";


export default function ForumSingle({ route }) {

    const { forumInfo } = route.params

    return <View style={Styles.containerTopPadding}>
        <ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={[Styles.flexRow, { alignItems: 'flex-start' }]}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/pngs/ForumSingle.png')}
                    />
                    <Text style={[Styles.blackRegular14, { flexShrink: 1 }]}>А ещё непосредственные участники технического прогресса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, </Text>
                </View>
                <Text style={Styles.blackRegular14}>
                    Предварительные выводы неутешительны: современная методология разработки напрямую зависит от существующих финансовых и административных условий. Наше дело не так однозначно, как может показаться: синтетическое тестирование требует определения и уточнения существующих финансовых и административных условий. Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов не даёт нам иного выбора, кроме определения укрепления моральных ценностей.
                </Text>
            </View>
            <Shadow style={styles.shadow} distance={3} sides={{ bottom: true, top: false }} >
                <InfoAboutPostBlock postInfo={forumInfo} />
            </Shadow>
            <CommentsBlock />
        </ScrollView>
        <AddCommentBlock />
    </View >
}

const styles = StyleSheet.create({
    img: {
        height: 105,
        width: 105,
        borderWidth: 1,
        borderColor: AppColors.LAVENDER_COLOR,
        borderRadius: 4,
        marginRight: 10,
        marginBottom: 10
    },
    shadow: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    }


})