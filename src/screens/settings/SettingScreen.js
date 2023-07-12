import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AboutAsSvg, LockSvg, MoonSvg, NotSvg, UserSvg } from '../../assets/svgs/SettingsSvg'
import Container from '../../components/Container'
import HorizontalBlock from '../../components/HorizontalBlock'
import { Styles } from '../../styles/Styles'
export const SettingScreen = ({ navigation }) => {
    return <Container headerTitle='Настройки' goBack>
        <View style={[Styles.whiteContainer, { marginTop: 30 }]}>
            <ScrollView style={{ marginVertical: 25 }}>
                <HorizontalBlock
                    onPress={() => navigation.navigate('AccountAndSecurityScreen')}
                    text={'Аккаунт и безопастность'}
                    Icon={UserSvg}
                    backImagePath={require('../../assets/pngs/BlockBack23.png')}
                    height={90}
                />
                <HorizontalBlock
                    onPress={() => navigation.navigate('NotificationScreen')}
                    text={'Уведомления'}
                    Icon={NotSvg}
                    backImagePath={require('../../assets/pngs/BlockBack9.png')}
                    height={90}
                />
                <HorizontalBlock
                    onPress={() => navigation.navigate('PrivacyScreen')}
                    text={'Конфиденциальность'}
                    Icon={LockSvg}
                    backImagePath={require('../../assets/pngs/BlockBack10.png')}
                    height={90}
                />
                <View style={Styles.flexRowJustifyBetween}>
                    <HorizontalBlock
                        onPress={() => navigation.navigate('ChangeTemaScreen')}
                        text={'Сменить тему'}
                        Icon={MoonSvg}
                        backImagePath={require('../../assets/pngs/BlockBack11.png')}
                        width={'49%'}
                        height={90}
                    />
                    <HorizontalBlock
                        onPress={() => navigation.navigate('AboutAs')}
                        text={'О нас'}
                        Icon={AboutAsSvg}
                        backImagePath={require('../../assets/pngs/BlockBack12.png')}
                        width={'49%'}
                        height={90}
                    />
                </View>
            </ScrollView>
        </View>
    </Container>
}