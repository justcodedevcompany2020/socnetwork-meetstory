import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../components/Button";
import { Styles } from "../../styles/Styles";
import PostComponent from "../feed/components/PostComponent";


export default function MyPhotosScreen({ navigation }) {

    const data = [
        {
            img: require('../../assets/pngs/2.png'),
            profileImg: require('../../assets/pngs/ProfileDefault.png'),
            name: 'Harper Anderson',
            username: '@harper',
            likes: 4322,
            comments: 142,
            shares: 23,
        },
        {
            img: require('../../assets/pngs/2.png'),
            profileImg: require('../../assets/pngs/ProfileDefault.png'),
            name: 'Harper Anderson',
            username: '@harper',
            likes: 4322,
            comments: 142,
            shares: 23,
        },
        {
            img: require('../../assets/pngs/2.png'),
            profileImg: require('../../assets/pngs/ProfileDefault.png'),
            name: 'Harper Anderson',
            username: '@harper',
            likes: 4322,
            comments: 142,
            shares: 23,
        },
        {
            img: require('../../assets/pngs/2.png'),
            profileImg: require('../../assets/pngs/ProfileDefault.png'),
            name: 'Harper Anderson',
            username: '@harper',
            likes: 4322,
            comments: 142,
            shares: 23,
        },
        {
            img: require('../../assets/pngs/2.png'),
            profileImg: require('../../assets/pngs/ProfileDefault.png'),
            name: 'Harper Anderson',
            username: '@harper',
            likes: 4322,
            comments: 142,
            shares: 23,
        },
    ];
    return <View style={Styles.containerTopPadding}>
        <ScrollView style={{ paddingHorizontal: 20, }}>
            <Button text={'Добавить фото'} height={40} onPress={() => navigation.navigate('AddPhotoScreen')} marginBottom={20}/>

            {data.map((elm, i) => {
                return <PostComponent key={i} postInfo={elm} navigation={navigation} />
            })}
        </ScrollView>
    </View>
}