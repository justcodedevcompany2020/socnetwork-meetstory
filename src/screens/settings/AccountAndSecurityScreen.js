import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import BlueInput from "../../components/BlueInput"
import Container from "../../components/Container"
import { Styles } from "../../styles/Styles"

export const AccountAndSecurityScreen = ({navigation}) =>{
    const [data,setData] = useState([
        {value:'@jane',label:'Имя пользователя',type:'text',onPress:()=>{}},
        {value:'joe@me.com',label:'Эл. почта',type:'button',onPress:()=>{}},
        {value:'+1 392-394-2013',label:'Номер телефона',type:'button',onPress:()=>{}},
        {value:'Изменить пароль',label:'Пароль',type:'button',onPress:()=>{navigation.navigate('ChnagePasswordScreen')}},

    ])
    return <Container headerTitle = {'Аккаунт и безопастность'} goBack>
        <View style = {[Styles.whiteContainer,{marginTop:30,paddingVertical:20}]}>
            <ScrollView showsVerticalScrollIndicator = {false}>
            {data.map((elm,i)=>(
                <BlueInput onPress = {elm?.onPress} type={elm.type} key={i} labelText = {elm.label} value = {elm.value}/>
            ))}
            </ScrollView>
        </View>
    </Container>
}

const style =StyleSheet.create({

})