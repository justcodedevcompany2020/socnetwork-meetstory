import {View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AboutAsSvg, LockSvg, MoonSvg, NotSvg, UserSvg } from '../../assets/svgs/SettingsSvg'
import Container from '../../components/Container'
import HorizontalBlock from '../../components/HorizontalBlock'
import { Styles } from '../../styles/Styles'
export const SettingScreen = ({navigation}) =>{
    return <Container headerTitle = 'Настройки' goBack>
        <View style = {[Styles.whiteContainer,{marginTop:30}]}>
        <ScrollView style = {{marginVertical:25}}>
            <HorizontalBlock
                text={'Аккаунт и безопастность'}
                Icon={UserSvg}
                backImagePath={require('../../assets/pngs/BlockBack23.png')}
            />
            <HorizontalBlock
                onPress={() => navigation.navigate('NotificationScreen')}
                text={'Уведомления'}
                Icon={NotSvg}
                backImagePath={require('../../assets/pngs/BlockBack9.png')}
            />
            <HorizontalBlock
                onPress={() => navigation.navigate('PrivacyScreen')}
                text={'Конфиденциальность'}
                Icon={LockSvg}
                backImagePath={require('../../assets/pngs/BlockBack10.png')}
            />
            <View style = {Styles.flexRowJustifyBetween}>
                <HorizontalBlock
                    text={'Сменить тему'}
                    Icon={MoonSvg}
                    backImagePath={require('../../assets/pngs/BlockBack11.png')}
                    width = {'49%'}
                />
                <HorizontalBlock
                    onPress={() => navigation.navigate('AboutAs')}
                    text={'О нас'}
                    Icon={AboutAsSvg}
                    backImagePath={require('../../assets/pngs/BlockBack12.png')}
                    width = {'49%'}
                />
            </View>
        </ScrollView>
        </View>
    </Container>
}