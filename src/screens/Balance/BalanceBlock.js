import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PlusIconWhite } from '../../assets/svgs/AuthSvgs';
import Container from '../../components/Container';
import { Styles } from '../../styles/Styles';

export default function BalanceBlock({ children, title, goBack, add, headerTitle }) {
  return (
    <Container goBack={goBack} headerTitle={title}>
      <View style={styles.balance}>
        {headerTitle && <Text style={Styles.whiteMedium20}>{headerTitle}</Text>}
        <Text style={Styles.balanceText}>₽5,432.43</Text>
        {add &&
          <TouchableOpacity>
            <PlusIconWhite />
          </TouchableOpacity>
        }
      </View>
      <View style={Styles.whiteContainer}>
        <View style={{ marginVertical: 20 }}>{children}</View>
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
