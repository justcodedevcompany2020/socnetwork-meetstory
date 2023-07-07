import {View,Image,Text,StyleSheet} from 'react-native'
import Button from '../../components/Button'
import Container from "../../components/Container"
import { Styles } from "../../styles/Styles"

export const BalanceCongratsBlock = ({text,text2,img,color,btnText,margin = 30,close}) =>{
    return  <Container>
        <View style={[Styles.whiteContainer,styles.block]}>
            <Text style = {color?Styles.bitterSweetSemiBold28:Styles.blackSemiBold28}>{text}</Text>
            <Text style = {[Styles.darkSemiBold16,{marginTop:10}]}>{text2}</Text>
            <View style = {{alignItems:'center',marginVertical:margin}}>
                <Image style = {styles.img} source={img}/>
            </View>
            <View style = {{marginVertical:10}}>
                <Button margin={20} text={btnText}/>
            </View>
            {close &&
                <Button backgroundColor={'#F36A6A'} margin={20} text={close}/>
            }
        </View>
    </Container>        
}
const styles = StyleSheet.create({
    block:{
        paddingVertical:20,
        marginTop:20,
    },
    img:{
        width:250,
        height:250,
    }
})