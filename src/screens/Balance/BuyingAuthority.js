import {Text, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Styles} from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export default function BuyingAuthority({navigation}) {
  return (
    <BalanceBlock title = {'Покупка авторитета'} goBack headerTitle="Баланс">
      <Text style={Styles.DarkSemiBold20}>На сколько вы хотите купить авторитета?</Text>
      <Input placeholder={'Введите сумму'} /> 
      <View style={{marginTop: 20}}>
        <Button text={'Купить'} margin={20} onPress={() => navigation.navigate('BalanceCongrats')}/>
      </View>
    </BalanceBlock>
  );
}
