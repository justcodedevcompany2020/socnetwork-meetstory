import { useState } from 'react';
import {View ,StyleSheet ,Text} from 'react-native'
import Container from "../../components/Container"
import { Styles } from '../../styles/Styles'
import { SoundSvg,VibrateSvg,MailSvg } from '../../assets/svgs/SettingsSvg';
import CustomSwitch from '../../components/CustomSwitch';

export const NotificationScreen = () =>{
    const [active,Setactive] = useState(false)

    return <Container headerTitle = 'Уведомления' goBack>
        <View style = {[Styles.whiteContainer,{marginTop:30}]}>
            <View style = {[Styles.flexRowJustifyBetween,{marginVertical:20}]}>
                <View style = {Styles.flexRow}>
                    <SoundSvg />
                    <Text style = {[styles.darkMedium15,{marginHorizontal:10}]}>Звук</Text>
                </View>
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
            <View style = {[Styles.flexRowJustifyBetween,{marginVertical:20}]}>
                <View style = {Styles.flexRow}>
                    <VibrateSvg />
                    <Text style = {[styles.darkMedium15,{marginHorizontal:10}]}>Вибрация</Text>
                </View>
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
            <View style = {[Styles.flexRowJustifyBetween,{marginVertical:20}]}>
                <View style = {Styles.flexRow}>
                    <MailSvg />
                    <Text style = {[styles.darkMedium15,{marginHorizontal:10}]}>Показ сообщения в шторке</Text>
                </View>
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
        </View>
    </Container>
}
const styles = StyleSheet.create({
    block:{
        
    }
})