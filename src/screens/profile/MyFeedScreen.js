import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import ForumBlock from "../forum/ForumBlock";
import PostComponent from "../feed/components/PostComponent";


export default function MyFeedScreen({ navigation }) {

    const data = [
        {
          img: require('../../assets/pngs/post1.png'),
          profileImg: require('../../assets/pngs/ProfileDefault.png'),
          name: 'Harper Anderson',
          username: '@harper',
          likes: 4322,
          comments: 142,
          shares: 23,
        },
        {
          profileImg: require('../../assets/pngs/ProfileDefault.png'),
          name: 'Harper Anderson',
          username: '@harper',
          likes: 4322,
          comments: 142,
          shares: 23,
          text: 'Как принято считать, диаграммы связей будут объективно рассмотрены соответствующими инстанциями. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Есть над чем задуматься: акционеры крупнейших компаний ограничены исключительно образом мышления.',
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
          type:'forum',
          image:require('../../assets/pngs/Forum1.png'),
          name:'Harper Anderson',
          username:'@harper',
          profileImg:require('../../assets/pngs/ProfileDefault.png'),
          likes:4322,
          comments:142,
          shares:23,
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
            <Button text={'Добавить публикацию'} height={40} onPress={() => navigation.navigate('AddPostScreen')} marginBottom={20}/>
            {data.map((elm, i) => {
                if (elm.type === 'forum') {
                    return <ForumBlock moveDown forumInfo={elm} key={i} />
                }
                return <PostComponent key={i} postInfo={elm} navigation={navigation} />
            })}
        </ScrollView>
    </View>
}