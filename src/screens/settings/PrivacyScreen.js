import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Container from "../../components/Container"
import Input from '../../components/Input'
import { Styles } from '../../styles/Styles'
import { Arrow } from '../../assets/svgs/SettingsSvg';
import CustomSwitch from '../../components/CustomSwitch'
import { getRequestAuth, postRequestAuth } from '../../api/RequestHelpers'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'

export const PrivacyScreen = () => {
    const { token } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(true)
    const [statusVisibility, setStatusVisibility] = useState(null)
    const [feedVisibility, setFeedVisibility] = useState(null)
    const [whoCanMessage, setWhoCanMessage] = useState()
    const [active, setactive] = useState(false)


    const options = [
        { id: 0, value: 'Только я' },
        { id: 1, value: 'Друзья' },
        { id: 2, value: 'Все' },
    ]
    useEffect(() => {
        getUserInfo()
    }, [])

    function getUserInfo() {
        getRequestAuth('get_auth_user_info', token).then(res => {
            console.log(res);
            if (res.status == true) {
                const index1 = options.findIndex(el => el.value == res.data.who_can_see_me_online_all)
                const index2 = options.findIndex(el => el.value == res.data.who_can_see_my_wall_all)
                const index3 = options.findIndex(el => el.value == res.data.who_can_write_to_me_all)
                setStatusVisibility(index1)
                setFeedVisibility(index2)
                setWhoCanMessage(index3)

                setLoading(false)
            }
        })
    }

    function changeStatusVisibility(value) {
        setStatusVisibility(value)
        postRequestAuth('update_profile', token, {
            who_can_see_me_online_all: options[value].value
        }).then(([status, body]) => {
            console.log(body);
        })
    }
    
    function changeWhoCanMessage(value) {
        setWhoCanMessage(value)
        postRequestAuth('update_profile', token, {
            who_can_write_to_me_all: options[value].value
        }).then(([status, body]) => {
            console.log(body);
        })
    }

    function changeFeedVisibility(value) {
        setFeedVisibility(value)
        postRequestAuth('update_profile', token, {
            who_can_see_my_wall_all: options[value].value
        }).then(([status, body]) => {
            console.log(body);
        })
    }


    return <Container headerTitle='Конфиденциальность' goBack >
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            {loading ? <Loading /> : <ScrollView>
                <View style={[Styles.flexRowJustifyBetween]}>
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
            </ScrollView>}
        </View>
    </Container>
}