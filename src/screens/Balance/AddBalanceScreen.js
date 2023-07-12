import {Text, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Styles} from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export default function AddBalanceScreen({navigation}) {
  return (
    <BalanceBlock goBack title="Пополнить баланс">
      <Text style={[Styles.DarkSemiBold20, {marginBottom: 20}]}>Сколько вы хотите пополнить?</Text>
      <Input placeholder={'Введите сумму'} inputType={'num'} />
      <View style={{marginTop: 20}}>
        <Button onPress={()=>navigation.navigate('PaymentMetod')} text={'Далее'} margin={20} />
      </View>
    </BalanceBlock>
  );
}
