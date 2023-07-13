import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { getRequestAuth, postRequestAuth } from "../../api/RequestHelpers";

export default function PreferencesScreen() {

    const [loading, setLoading] = useState(true)
    const [btnLoading, setBtnLoading] = useState(false)
    const { token } = useSelector(state => state.auth)
    const [showSuccess, setShowSuccess] = useState(false)
    const [getAcquainted, setGetAcquainted] = useState('')
    const [purpose, setPurpose] = useState()
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)


    function updateProfile() {
        setBtnLoading(true)
        inputRef1.current.blur()
        inputRef2.current.blur()

        postRequestAuth('update_profile', token, {
            get_acquainted: getAcquainted ?? null,
            purpose_of_dating: purpose ?? null
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setBtnLoading(false)
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                }, 3000);
            }
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])


    function getUserInfo() {
        getRequestAuth('get_auth_user_info', token).then(res => {
            console.log(res);
            if (res.status == true) {
                setGetAcquainted(res.data.get_acquainted)
                setPurpose(res.data.purpose_of_dating)
                setLoading(false)
            }
        })
    }


    return <Container goBack headerTitle={'Предпочтения'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            {loading ? <Loading /> : <ScrollView>
                <Text style={Styles.darkMedium15}>Познакомлюсь</Text>
                <TextInput ref={inputRef1} multiline style={[Styles.input, { height: 125, marginBottom: 15 }]} value={getAcquainted} onChangeText={setGetAcquainted} numberOfLines={10} placeholder="С женщиной в возрасте 31 - 39 лет в районе Ашхабад, Туркменистан"  />
                <Text style={Styles.darkMedium15}>Цель знакомства</Text>
                <TextInput ref={inputRef2} multiline style={[Styles.input, { height: 125 }]} value={purpose} onChangeText={setPurpose} numberOfLines={10} placeholder="Дружба, любовь, брак, встреча"  />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin loading={btnLoading} onPress={updateProfile} />
            </ScrollView>}
        </View>
    </Container>
}