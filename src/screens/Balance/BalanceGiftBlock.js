import { Text,View } from "react-native"
import Button from "../../components/Button"
import { AppColors } from "../../styles/AppColors"
import { Styles } from "../../styles/Styles"
import BalanceBlock from "./BalanceBlock"

export const BalanceGiftBlock = ({price = 100,text ='Подарка' }) =>{
    return <BalanceBlock goBack title="История транзакций" add>
      <Text style={Styles.DarkSemiBold20}>Подтвердите покупку <Text style  = {Styles.darkBlueSemiBold20}>{text}</Text> </Text>
      <Text  style  = {[Styles.darkBlueSemiBold20,{marginVertical:10}]}>Цена:  {price}</Text>
      <View>
        <View style = {{marginTop:50,marginBottom:10}}>
            <Button margin={10} text = {'Купить'} />
        </View>
        <Button margin={10} text = {'Отменит'} backgroundColor = {AppColors.BITTERSWEET_COLOR}/>
      </View>
    </BalanceBlock>
}