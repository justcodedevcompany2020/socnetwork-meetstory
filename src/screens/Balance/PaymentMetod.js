import { Text, View } from 'react-native';
import { Parking, PM, QIWi } from '../../assets/svgs/BalanceSvg';
import HorizontalBlock from '../../components/HorizontalBlock';
import { Styles } from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export default function PaymentMetod({ navigation }) {
  return (
    <BalanceBlock goBack title="Пополнить баланс">
      <Text style={[Styles.DarkSemiBold20, { marginBottom: 20 }]}>Выберите удобный для вас метод</Text>
      <HorizontalBlock
        backImagePath={require('../../assets/pngs/BlockBack19.png')}
        Icon={Parking}
        text={'Payeer'}
        onPress={() => navigation.navigate('BalanceCongrats1')}
      />
      <View style={[Styles.flexRowJustifyBetween]}>
        <HorizontalBlock
          backImagePath={require('../../assets/pngs/BlockBack20.png')}
          Icon={QIWi}
          text={'QIWI'}
          width={'49%'}
        />
        <HorizontalBlock
          backImagePath={require('../../assets/pngs/BlockBack21.png')}
          Icon={PM}
          width={'49%'}
          text={'Perfect Money'}
        />
      </View>
    </BalanceBlock>
  );
}

