import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Popup from '../../components/Popup';
import { AppColors } from '../../styles/AppColors';
import { Styles } from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export default function BuyingAuthority({ navigation }) {
  const [openPopUp, setOpenPopUp] = useState(false)
  return (
    <BalanceBlock title={'Покупка авторитета'} goBack headerTitle="Баланс">
      <Text style={[Styles.DarkSemiBold20, { marginBottom: 20 }]}>На сколько вы хотите купить авторитета?</Text>
      <Input placeholder={'Введите сумму'} inputType={'num'} />
      <View style={{ marginTop: 20 }}>
        <Button text={'Купить'} margin={20} onPress={() => setOpenPopUp(true)} />
      </View>
      <Popup setShowModal={setOpenPopUp} showModal={openPopUp} title={'Вы действительно хотите купить авторитет?'}>
        <Button margin marginBottom={10} text='Да' onPress={() => navigation.navigate('BalanceCongrats')}></Button>
        <Button margin marginBottom={20} text='Нет' onPress={() => setOpenPopUp(false)} backgroundColor={AppColors.BITTERSWEET_COLOR}></Button>
      </Popup>
    </BalanceBlock>
  );
}
