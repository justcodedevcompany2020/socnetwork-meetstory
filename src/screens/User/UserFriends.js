import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import UserBlock from '../../components/UserBlock';
import { Styles } from '../../styles/Styles';
import { AppColors } from '../../styles/AppColors';
export const UserFriends = ({ navigation }) => {
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
      <Text style={styles.whiteText}><Text style={Styles.whiteMedium15}> Друзей: </Text> 67 </Text>
      <View style={Styles.whiteContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 20 }}>
          {data.map((elm, i) => (
            <UserBlock moreIcon activityStatus key={i} />
          ))}
        </ScrollView>
      </View>
    </Container >
  );
};


const styles = StyleSheet.create({
  whiteText: {
    color: AppColors.WHITE_COLOR,
    fontSize: 15,
    width: '100%',
    paddingLeft: 20,
    marginVertical: 20
  }
})