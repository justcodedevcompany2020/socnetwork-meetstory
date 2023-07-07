import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import ForumBlock from "./ForumBlock";

export default function PopularTopics({navigation}) {

    const forumsInfo = [
        {
            name: 'John Smith',
            username: '@jsmith1',
            likes: 4322,
            comments: 142,
            shares: 23,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
            image: require('../../assets/pngs/Forum1.png'),
            profileImg: require('../../assets/pngs/postUser1.png')
        },
        {
            name: 'John Smith',
            username: '@jsmith1',
            likes: 4322,
            comments: 142,
            shares: 23,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
            image: require('../../assets/pngs/Forum1.png'),
            profileImg: require('../../assets/pngs/postUser1.png')
        },
        {
            name: 'John Smith',
            username: '@jsmith1',
            likes: 4322,
            comments: 142,
            shares: 23,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
            image: require('../../assets/pngs/Forum1.png'),
            profileImg: require('../../assets/pngs/postUser1.png')
        },
        {
            name: 'John Smith',
            username: '@jsmith1',
            likes: 4322,
            comments: 142,
            shares: 23,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционны',
            image: require('../../assets/pngs/Forum1.png'),
            profileImg: require('../../assets/pngs/postUser1.png')
        }
    ]
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            {forumsInfo.map((item, i) => <ForumBlock forumInfo={item} key={i} onPressForum={() => navigation.navigate('ForumSingle', {forumInfo: item})}/>)}
        </ScrollView>
    </View>
}