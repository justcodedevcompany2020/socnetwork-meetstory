import React, { useEffect, useReducer, useRef, useState } from "react";
import Container from "../../components/Container";
import { Text, TextInput, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { getRequestAuth, postRequestAuth } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";


export default function AboutMeScreen() {
    const [loading, setLoading] = useState(true)
    const [btnLoading, setBtnLoading] = useState(false)
    const { token } = useSelector(state => state.auth)
    const [showSuccess, setShowSuccess] = useState(false)
    const [aboutMe, setAboutMe] = useState('')

    function updateProfile() {
        setBtnLoading(true)
        postRequestAuth('update_profile', token, {
            about_me: aboutMe ?? null
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
                setAboutMe(res.data.about_me)
                setLoading(false)
            }
        })
    }

    return <Container goBack headerTitle={'Обо мне'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            {loading ? <Loading /> : <>
                <Text style={Styles.darkMedium15}>Обо мне</Text>
                <TextInput ref={inputRef} multiline style={Styles.input} numberOfLines={10} value={aboutMe} onChangeText={setAboutMe} placeholder="Нет информации" placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR} />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin loading={btnLoading} onPress={updateProfile} />
            </>}
        </View>
    </Container>
}

