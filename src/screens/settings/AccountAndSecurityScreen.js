import { useState } from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import BlueInput from "../../components/BlueInput"
import Button from "../../components/Button"
import Container from "../../components/Container"
import { Styles } from "../../styles/Styles"
import { AppColors } from '../../styles/AppColors'
import Popup from "../../components/Popup"
import { useSelector } from "react-redux"

export const AccountAndSecurityScreen = ({ navigation }) => {
    const { user } = useSelector(state => state.auth)
    const [openPopup, setOpenPopUp] = useState(false)

    function formatPhone(value) {
        let x = value
            .replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        let myPhone = !x[2]
            ? '+7 ' + (x[1] != '7' ? x[1] : '')
            : !x[3]
                ? '+7 (' + x[2]
                : '+7 (' +
                x[2] +
                ') ' +
                (x[3] ? x[3] : '') +
                (x[4] ? ' - ' + x[4] : '') +
                (x[5] ? ' - ' + x[5] : '');
        return myPhone
    }

    return <Container headerTitle={'Аккаунт и безопастность'} goBack>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BlueInput labelText={'Номер телефона'} value={formatPhone(user.phone)} />
                <BlueInput arrow labelText={'Эл. почта'} value={user.email ?? 'Добавить эл. почту'} />
                <BlueInput arrow labelText={'Пароль'} value={'Изменить пароль'} onPress={() => navigation.navigate('ChangePasswordScreen')} />

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
