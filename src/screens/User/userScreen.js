import {View,Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Shadow } from 'react-native-shadow-2'
import { BlueHeart18, BrokenHeart18 } from '../../assets/svgs/HomeSvgs'
import { WallSvg } from '../../assets/svgs/UserSvgs'
import Container from '../../components/Container'
import HorizontalBlock from '../../components/HorizontalBlock'
import { UserNameBlock } from '../../components/UserNameBlock'
import { AppColors } from '../../styles/AppColors'
import { Styles } from '../../styles/Styles'
import { GiftBlock } from '../home/GiftsScreen'
export const UserScreen = ({navigation}) =>{
    const items = [
        { id: 0, },
        { id: 1, },
        { id: 2, },
        { id: 3, },
    ];
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
                onPress = {()=>navigation.navigate('UserPostsScreen',{username:'Harper Anderson'})}
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
    <View style = {styles.block}>
        <View style = {[styles.diamond,{paddingHorizontal:20}]}>
            <Text style = {[Styles.darkBlueMedium16,{marginVertical:15}]}>Подарки пользователя</Text>
            <View style = {Styles.flexRow}>
                {items.map((elm,i)=>(
                    <GiftBlock key={i} item = {elm} />
                ))}
            </View>
        </View>
        <View style = {styles.heart}>
            <Text style = {[Styles.darkBlueMedium16,{marginVertical:15}]}>Авторитет пользователя</Text>
            <View style = {{flexDirection:'row'}}>
                <BrokenHeart18 />
                <BrokenHeart18 />
                <BrokenHeart18 />
                <BlueHeart18 />
                <BlueHeart18 />
                <BlueHeart18 />
                <BlueHeart18 />
            </View>
        </View>
        <View style = {{paddingHorizontal:20,marginVertical:20}}>
            <Text style = {[Styles.darkBlueMedium16,{marginVertical:15}]}>Знакомства</Text>
            <Shadow distance={3}  style={styles.shadow}>
                <View style = {{marginVertical:5}}>
                    <Text style = {Styles.darkBlueMedium16}>Познакомлюсь с:</Text>
                    <Text style = {Styles.blackRegular14}>Девушкой</Text>
                </View>
                <View style = {{marginVertical:5}}>
                    <Text style = {Styles.darkBlueMedium16}>Познакомлюсь с:</Text>
                    <Text style = {Styles.blackRegular14}>34-40</Text>
                    <Text style = {Styles.blackRegular14}>40-45</Text>
                    <Text style = {Styles.blackRegular14}>45-50</Text>
                </View>
                <View style = {{marginVertical:5}}>
                    <Text style = {Styles.darkBlueMedium16}>Цель знакомтва: </Text>
                    <Text style = {Styles.blackRegular14}>Дружба и общение</Text>
                    <Text style = {Styles.blackRegular14}>Флирт смс переписка</Text>
                </View>
            </Shadow>
        </View>
    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    textBlock:{
        marginVertical:15,
        width:'90%',
    },
    diamond:{
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingBottom:10,
        justifyContent:'center',
        borderColor:'#E6EFF7'
    },
    block:{
        backgroundColor: AppColors.WHITE_COLOR,
    },
    shadow:{
        width:'100%',
        borderRadius:6,
        padding:6,
    },
    heart:{
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderColor:'#E6EFF7',
        paddingBottom:15,
    }
})