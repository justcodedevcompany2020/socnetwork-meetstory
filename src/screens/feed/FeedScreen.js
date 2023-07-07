import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import PostComponent from "./components/PostComponent";


export default function FeedScreen({navigation}) {
    const postsInfo = [
        {
            id: 12323123,
            img: require('../../assets/pngs/post1.png'),
            name: 'John Smith',
            username: '@jsmith1',
            profileImg: require('../../assets/pngs/postUser1.png'),
            likes: 4322,
            comments: 142,
            shares: 23,
            liked: false
        },
        {
            id: 2345243543,
            img: require('../../assets/pngs/post2.png'),
            name: 'Lily Parker',
            username: '@floraldreams',
            profileImg: require('../../assets/pngs/postUser2.png'),
            likes: 4322,
            comments: 142,
            shares: 23,
            liked: true 
        },
        {
            id: 23423464624,
            img: require('../../assets/pngs/post3.png'),
            name: 'Harper Anderson',
            username: '@songbird',
            profileImg: require('../../assets/pngs/postUser3.png'),
            likes: 4322,
            comments: 142,
            shares: 23,
            liked: false
        },
        {
            id: 576452354,
            img: require('../../assets/pngs/post4.png'),
            name: 'John Smith',
            username: '@jsmith1',
            profileImg: require('../../assets/pngs/postUser3.png'),
            likes: 4322,
            comments: 142,
            shares: 23,
            liked: false
        }
    ]

    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            {postsInfo.map((item, i) => <PostComponent key={i} postInfo={item} navigation={navigation}/>)}
        </ScrollView>
    </View>
}