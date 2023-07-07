import {BalanceCongratsBlock} from './BalanceCongratsBlock';

export const BalanceCongrats1 = () => {
  return (
    <BalanceCongratsBlock
      img={require('../../assets/pngs/c2.png')}
      text={'Поздравляем!'}
      text2={'Ваш балланс успешно пополнен'}
      btnText="Мой баланс"
    />
  );
};
