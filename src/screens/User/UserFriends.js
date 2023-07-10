import {ScrollView, View, Text} from 'react-native';
import Container from '../../components/Container';
import UserBlock from '../../components/UserBlock';
import {Styles} from '../../styles/Styles';
export const UserFriends = ({navigation}) => {
  const data = [
   {},
   {},
   {},
   {},
   {},
   {},
   {},
   {},
  ];
  return (
    <Container headerTitle="Друзья пользователя" goBack>
        <Text style = {[Styles.whiteMedium15,{width:'100%',paddingHorizontal:20,marginVertical:20}]}>Друзей: 67</Text>
        <View style = {Styles.whiteContainer}>
            <ScrollView showsVerticalScrollIndicator = {false} style = {{marginVertical:20}}>
                {data.map((elm,i)=>(
                    <UserBlock  moreIcon activityStatus  onPress = {()=>console.log(599)} key={i}/>
                ))}
            </ScrollView>
        </View>
    </Container>
  );
};
