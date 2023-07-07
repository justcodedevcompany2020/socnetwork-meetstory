import { Text, View } from "react-native"
import Button from "../../components/Button"
import { AppColors } from "../../styles/AppColors"
import { Styles } from "../../styles/Styles"
import BalanceBlock from "./BalanceBlock"

export const RaisingProfile = ({ navigation, price = '9.99', text = 'Поднятие анкеты' }) => {
  return <BalanceBlock goBack title="Покупка подарка" headerTitle={'Баланс'}>
    <Text style={Styles.DarkSemiBold20}>Подтвердите покупку <Text style={Styles.darkBlueSemiBold20}>{text}</Text> </Text>
    <Text style={[Styles.darkBlueSemiBold20, { marginVertical: 10 }]}>Цена:  {price} ₽</Text>
    <View>
      <View style={{ marginTop: 50, marginBottom: 10 }}>
        <Button margin={10} text={'Купить'} onPress={() => navigation.navigate('BalanceCongrats')}/>
      </View>
      <Button margin={10} text={'Отменить'} backgroundColor={AppColors.BITTERSWEET_COLOR} />
    </View>
  </BalanceBlock>
}