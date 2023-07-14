import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import BlueInput from "../../components/BlueInput"
import Button from "../../components/Button"
import Container from "../../components/Container"
import { Styles } from "../../styles/Styles"
import { AppColors } from '../../styles/AppColors'
import Popup from "../../components/Popup"

export const AccountAndSecurityScreen = ({ navigation }) => {
    const [data, setData] = useState([
        { value: '@jane', label: 'Имя пользователя', type: 'text', onPress: () => { } },
        { value: 'joe@me.com', label: 'Эл. почта', type: 'button', onPress: () => { } },
        { value: '+1 392-394-2013', label: 'Номер телефона', type: 'button', onPress: () => { } },
        { value: 'Изменить пароль', label: 'Пароль', type: 'button', onPress: () => { navigation.navigate('ChangePasswordScreen') } },

    ])
    const [openPopup, setOpenPopUp] = useState(false)
    return <Container headerTitle={'Аккаунт и безопастность'} goBack>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((elm, i) => (
                    <BlueInput onPress={elm?.onPress} type={elm.type} key={i} labelText={elm.label} value={elm.value} />
                ))}
                <View style={{ marginTop: 40 }}>
                    <Button onPress={() => setOpenPopUp(true)} backgroundColor={AppColors.BITTERSWEET_COLOR} text='Удалить аккаунт' margin />
                </View>
            </ScrollView>
        </View>
        <Popup title={'Вы действительно хотите удалить аккаунт?'} showModal={openPopup} setShowModal={setOpenPopUp}>
            <Button text={'Да'} backgroundColor={AppColors.BITTERSWEET_COLOR} margin marginBottom={10} />
            <Button outLineColor={AppColors.BITTERSWEET_COLOR} text={'Нет'} backgroundColor={AppColors.WHITE_COLOR} margin onPress={() => setOpenPopUp(false)} marginBottom={20} />
        </Popup>
    </Container>
}

const style = StyleSheet.create({

})