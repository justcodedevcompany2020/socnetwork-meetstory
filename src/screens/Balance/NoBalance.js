import {BalanceCongratsBlock} from './BalanceCongratsBlock';

export const NoBalance = ({navigation}) => {
  return (
    <BalanceCongratsBlock
      img={require('../../assets/pngs/NoBalance.png')}
      text={'Не хватает средств!'}
      text2={'Пожалуйста пополните баланс'}
      btnText="Мой баланс"
      margin = {30}
      color
      close = {'Отменить'}
      onPressBtn={() => navigation.navigate('BalanceScreen')}
      onPressClose={() => navigation.goBack()}
    />
  );
};
