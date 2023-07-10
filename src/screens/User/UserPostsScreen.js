import {ScrollView,View} from 'react-native';
import {Styles} from '../../styles/Styles';
import PostComponent from '../feed/components/PostComponent';
import ForumBlock from '../forum/ForumBlock';
export const UserPostsScreen = ({navigation}) => {
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
      // img: require('../../assets/pngs/2.png'),
      profileImg: require('../../assets/pngs/ProfileDefault.png'),
      name: 'Harper Anderson',
      username: '@harper',
      likes: 4322,
      comments: 142,
      shares: 23,
      text: 'Оставил запись на вашей стене',
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
  return (
    <View style = {[Styles.containerTopPadding,{paddingHorizontal: 20,}]}>
      <ScrollView  showsVerticalScrollIndicator = {false}>
          {data.map((elm, i) => {
            if(elm.type === 'forum'){ 
              return <ForumBlock moveDown forumInfo={elm} key={i}/>
            }
            return <PostComponent key={i} postInfo={elm} navigation={navigation} />
          })}
      </ScrollView>
    </View>
  );
};
