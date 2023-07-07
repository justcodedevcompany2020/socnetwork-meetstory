import {Text, View,StyleSheet} from 'react-native';
import {Parking, PM, QIWi} from '../../assets/svgs/BalanceSvg';
import HorizontalBlock from '../../components/HorizontalBlock';
import {Styles} from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export default function PaymentMetod({navigation}) {
  return (
    <BalanceBlock goBack title="Пополнить баланс">
      <Text style={[Styles.DarkSemiBold20,{marginBottom:20}]}>Выберите удобный для вас метод</Text>
      <HorizontalBlock
        backImagePath={require('../../assets/pngs/BlockBack19.png')}
        Icon={Parking}
        text={'Payeer'}
        onPress = {()=>navigation.navigate('BalanceCongrats1')}
      />
      <View style = {styles.paymentBlock}>
        <HorizontalBlock
            backImagePath={require('../../assets/pngs/BlockBack20.png')}
            Icon={QIWi}
            text={'QIWI'}
        />
        <HorizontalBlock
            backImagePath={require('../../assets/pngs/BlockBack21.png')}
            Icon={PM}
            text={'Perfect Money'}
        />
      </View>
    </BalanceBlock>
  );
}
const styles = StyleSheet.create({
    paymentBlock:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        width:'100%'
    }
})
