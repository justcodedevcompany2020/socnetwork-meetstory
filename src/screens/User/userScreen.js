import {View,Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { WallSvg } from '../../assets/svgs/UserSvgs'
import Container from '../../components/Container'
import HorizontalBlock from '../../components/HorizontalBlock'
import { UserNameBlock } from '../../components/UserNameBlock'
import { Styles } from '../../styles/Styles'
export const UserScreen = () =>{
    return <ScrollView >
    <Container headerTitle = 'Профиль пользователя' goBack>
        <UserNameBlock />
        <View style = {styles.textBlock}>
            <Text style = {Styles.whiteRegular13}><Text style = {Styles.whiteSemiBold13}>Дата регистрации:</Text> 24 апреля 2022 </Text>
            <Text style = {Styles.whiteRegular13}><Text style = {Styles.whiteSemiBold13}>Забыйтый</Text> персонаж из твоей сказки</Text>
        </View>
        <View style = {[Styles.whiteContainer,{paddingVertical:15}]}>
            <HorizontalBlock
                backImagePath={require('../../assets/pngs/BlockBack18.png')}
                Icon={WallSvg}
                text={'Стена'}
                // onPress = {()=>navigation.navigate('BalanceCongrats1')}
            />
            <HorizontalBlock
                backImagePath={require('../../assets/pngs/BlockBack9.png')}
                Icon={WallSvg}
                text={'Стена'}
                // onPress = {()=>navigation.navigate('BalanceCongrats1')}
            />
            <View style = {Styles.flexRowJustifyBetween}>
                <HorizontalBlock
                    backImagePath={require('../../assets/pngs/BlockBack11.png')}
                    Icon={WallSvg}
                    text={'Стена'}
                    width = {'49%'}
                    // onPress = {()=>navigation.navigate('BalanceCongrats1')}
                />
                <HorizontalBlock
                    backImagePath={require('../../assets/pngs/BlockBack12.png')}
                    Icon={WallSvg}
                    text={'Стена'}
                    width = {'49%'}
                    // onPress = {()=>navigation.navigate('BalanceCongrats1')}
                />
            </View>
            <HorizontalBlock
                backImagePath={require('../../assets/pngs/BlockBack14.png')}
                Icon={WallSvg}
                text={'Стена'}
                // onPress = {()=>navigation.navigate('BalanceCongrats1')}
            />
            <HorizontalBlock
                backImagePath={require('../../assets/pngs/BlockBack14.png')}
                Icon={WallSvg}
                text={'Стена'}
                // onPress = {()=>navigation.navigate('BalanceCongrats1')}
            />
        </View>
    </Container>
    </ScrollView>
}

const styles = StyleSheet.create({
    textBlock:{
        marginVertical:15,
        width:'90%',
    }
})