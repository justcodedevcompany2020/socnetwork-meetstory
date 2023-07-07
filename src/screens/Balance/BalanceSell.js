import {Text, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Styles} from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export default function BalanceSell({navigation}) {
  return (
    <BalanceBlock title = {'Баланс'} goBack headerTitle="Баланс">
      <Text style={Styles.DarkSemiBold20}>На сколько вы хотите купить авторитета?</Text>
      <Input placeholder={'Введите сумму'} />
      <View style={{marginTop: 20}}>
        <Button onPress={()=>navigation.navigate('PaymentMetod')} text={'Купить'} margin={20} />
      </View>
    </BalanceBlock>
  );
}
