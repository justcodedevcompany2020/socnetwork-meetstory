import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { PlusIconWhite } from '../../assets/svgs/AuthSvgs';
import Container from '../../components/Container';
import { Styles } from '../../styles/Styles';
import { AppColors } from '../../styles/AppColors';
import { useNavigation } from '@react-navigation/native';

export default function BalanceBlock({ children, title, goBack, add, headerTitle }) {
  const navigation =       useNavigation()
  return (
    <Container goBack={goBack} headerTitle={title}>
      <View style={styles.balance}>
        {headerTitle && <Text style={Styles.whiteMedium20}>{headerTitle}</Text>}
        <Text style={Styles.balanceText}>₽5,432<View><Text style={{ fontSize: 18, color: AppColors.WHITE_COLOR, marginBottom: 5, }}>.43</Text></View></Text>
        {add &&
          <TouchableOpacity onPress={() => navigation.navigate('AddBalanceScreen')}>
            <PlusIconWhite />
          </TouchableOpacity>
        }
      </View>
      <View style={Styles.whiteContainer}>
        <View style={{ marginTop: 20 }}>{children}</View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 25,
    paddingHorizontal: 20,
  },
});
