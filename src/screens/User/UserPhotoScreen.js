import {ScrollView,View} from 'react-native';
import {Styles} from '../../styles/Styles';
import PostComponent from '../feed/components/PostComponent';
export const UserPhotoScreen = ({navigation}) => {
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
  return (
    <View style = {[Styles.containerTopPadding,{paddingHorizontal: 20,}]}>
      <ScrollView  showsVerticalScrollIndicator = {false}>
          {data.map((elm, i) => {
            return <PostComponent key={i} postInfo={elm} navigation={navigation} />
          })}
      </ScrollView>
    </View>
  );
};