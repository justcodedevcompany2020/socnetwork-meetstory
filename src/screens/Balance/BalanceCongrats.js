import { BalanceCongratsBlock } from "./BalanceCongratsBlock"

export const BalanceCongrats = ({navigation}) => {
    return <BalanceCongratsBlock img={require('../../assets/pngs/c1.png')} text={'Поздравляем!'} text2={'Покупка совершена'} btnText='Мой профиль' onPressBtn={() => navigation.navigate('Profile', {screen: 'MyProfileScreen'})}/>
}