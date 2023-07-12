import { Text, View } from "react-native"
import Button from "../../components/Button"
import { AppColors } from "../../styles/AppColors"
import { Styles } from "../../styles/Styles"
import BalanceBlock from "./BalanceBlock"

export const GiftYourself = ({ navigation, price = '100.00', text = 'Подарка' }) => {
    return <BalanceBlock goBack title="Покупка подарка" headerTitle={'Баланс'}>
        <Text style={Styles.DarkSemiBold20}>Подтвердите покупку <Text style={Styles.darkBlueSemiBold20}>{text}</Text> </Text>
        <Text style={[{ marginVertical: 10, color: AppColors.LOCHMARA_COLOR, fontSize: 20 }]}><Text style={Styles.darkBlueSemiBold20}>Цена:</Text>  {price} ₽</Text>
        <View>
            <View style={{ marginTop: 50, marginBottom: 10 }}>
                <Button margin text={'Купить'} onPress={() => navigation.navigate('NoBalance')} />
            </View>
            <Button margin text={'Отменить'} backgroundColor={AppColors.BITTERSWEET_COLOR} />
        </View>
    </BalanceBlock>
}