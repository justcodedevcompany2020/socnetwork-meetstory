import { useState } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Container from "../../components/Container"
import Input from '../../components/Input'
import CustomSwitch from 'react-native-custom-switch';
import { Styles } from '../../styles/Styles'
import { Arrow } from '../../assets/svgs/SettingsSvg';
export const PrivacyScreen = () =>{
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const [oldPass, setOldPass] = useState()
    const [active,Setactive] = useState(false)

    return <Container headerTitle = 'Конфиденциальность' goBack >
    <View style = {[Styles.whiteContainer,{marginTop:30}]}>
        <View style = {[Styles.flexRowJustifyBetween,{marginVertical:25}]}>
            <Text style = {Styles.darkMedium15}>Невидимка (VIP Статус)</Text>
            <CustomSwitch
                    onSwitch={() => Setactive(true)}
                    onSwitchReverse = {()=>Setactive(false)}
                    buttonWidth={25}
                    switchWidth={45}
                    buttonColor={'#fff'}
                    switchBackgroundColor={"#F36A6A"}
                    onSwitchBackgroundColor={'#91B5D7'}
                    buttonPadding={2}
                />
        </View>
        <Input labelText={'Кто может видеть меня онлайн'} inputType={'dropdown'} placeholder={'Все'} />
        <Input labelText={'Кто может писать мне'} inputType={'dropdown'} placeholder={'Все'} />
        <Input labelText={'Кто может видеть мою стену'} inputType={'dropdown'} placeholder={'Все'} />
        <TouchableOpacity style = {[Styles.flexRowJustifyBetween,{marginTop:15}]}>
            <Text style = {Styles.darkMedium15}>Черный Список</Text>
            <Arrow />
        </TouchableOpacity>
    </View>
</Container>
}