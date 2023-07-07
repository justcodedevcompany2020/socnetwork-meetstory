import {StyleSheet} from 'react-native';
import {AddBalance, HistorySvg} from '../../assets/svgs/HomeSvgs';
import HorizontalBlock from '../../components/HorizontalBlock';
import BalanceBlock from './BalanceBlock';

export default function BalanceScreen({navigation}) {
  return (
    <BalanceBlock goBack title="Баланс" add>
      <HorizontalBlock
        onPress={() => navigation.navigate('AddBalanceScreen')}
        text={'Пополнить баланс'}
        Icon={AddBalance}
        backImagePath={require('../../assets/pngs/BlockBack18.png')}
      />
      <HorizontalBlock
        onPress={() => navigation.navigate('BalanceHistory')}
        text={'История транзакций'}
        Icon={HistorySvg} 
        backImagePath={require('../../assets/pngs/BlockBack22.png')}
      />
    </BalanceBlock>
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
