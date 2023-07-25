import { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Container from "../../components/Container"
import Input from '../../components/Input'
import { Styles } from '../../styles/Styles'
import { Arrow } from '../../assets/svgs/SettingsSvg';
import CustomSwitch from '../../components/CustomSwitch'
import { postRequestAuth } from '../../api/RequestHelpers'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../../store/actions/saveUser'

export const PrivacyScreen = () => {
    const { token, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [active, setactive] = useState(false)
    const options = [
        { id: 0, value: 'Только я' },
        { id: 1, value: 'Друзья' },
        { id: 2, value: 'Все' },
    ]

    const [statusVisibility, setStatusVisibility] = useState(options.findIndex(el => el.id == user.activity_status))
    const [feedVisibility, setFeedVisibility] = useState(options.findIndex(el => el.id == user.my_feed))
    const [whoCanMessage, setWhoCanMessage] = useState(options.findIndex(el => el.id == user.message_me))

    function changeStatusVisibility(value) {
        setStatusVisibility(value)
        postRequestAuth('update_privacy', token, {
            activity_status: value
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                dispatch(saveUser({
                    ...user,
                    activity_status: value
                }))
            }
        })
    }

    function changeWhoCanMessage(value) {
        setWhoCanMessage(value)
        postRequestAuth('update_privacy', token, {
            message_me: value
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                dispatch(saveUser({
                    ...user,
                    message_me: value
                }))
            }
        })
    }

    function changeFeedVisibility(value) {
        setFeedVisibility(value)
        postRequestAuth('update_privacy', token, {
            my_feed: value
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                dispatch(saveUser({
                    ...user,
                    my_feed: value
                }))
            }
        })
    }


    return <Container headerTitle='Конфиденциальность' goBack >
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView>
                <View style={[Styles.flexRowJustifyBetween, { marginBottom: 20 }]}>
                    <Text style={Styles.darkMedium15}>Невидимка (VIP Статус)</Text>
                    <CustomSwitch
                        onSwitch={() => setactive(true)}
                        onSwitchReverse={() => setactive(false)}
                        buttonWidth={25}
                        switchWidth={45}
                        buttonColor={'#fff'}
                        switchBackgroundColor={"#F36A6A"}
                        onSwitchBackgroundColor={'#91B5D7'}
                        buttonPadding={2}
                    />
                </View>
                <Input labelText={'Кто может видеть меня онлайн'} value={statusVisibility} setValue={changeStatusVisibility} inputType={'dropdown'} data={options} placeholder={' '} />
                <Input labelText={'Кто может писать мне'} value={whoCanMessage} setValue={changeWhoCanMessage} inputType={'dropdown'} data={options} placeholder={' '} />
                <Input labelText={'Кто может видеть мою стену'} value={feedVisibility} setValue={changeFeedVisibility} inputType={'dropdown'} data={options} placeholder={' '} />
                <TouchableOpacity style={[Styles.flexRowJustifyBetween, { marginTop: 15 }]}>
                    <Text style={Styles.darkMedium15}>Черный Список</Text>
                    <Arrow />
                </TouchableOpacity>
            </ScrollView>
        </View>
    </Container>
}