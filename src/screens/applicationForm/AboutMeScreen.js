import React, { useRef, useState } from "react";
import Container from "../../components/Container";
import { Text, TextInput, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { postRequestAuth } from "../../api/RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/saveUser";


export default function AboutMeScreen() {
    const [btnLoading, setBtnLoading] = useState(false)
    const { token, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [showSuccess, setShowSuccess] = useState(false)
    const [aboutMe, setAboutMe] = useState(user.about_me)
    const inputRef = useRef(null)

    function updateProfile() {
        setBtnLoading(true)
        inputRef.current?.blur()
        postRequestAuth('update_about_me', token, {
            about_me: aboutMe
        }).then(([status, body]) => {
            console.log(body);
            if (status == 200) {
                setBtnLoading(false)
                setShowSuccess(true)
                dispatch(saveUser({...user, about_me: aboutMe}))
                setTimeout(() => {
                    setShowSuccess(false)
                }, 3000);
            }
        })
    }

    return <Container goBack headerTitle={'Обо мне'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <Text style={Styles.darkMedium15}>Обо мне</Text>
            <TextInput ref={inputRef} multiline style={Styles.input} numberOfLines={10} value={aboutMe} onChangeText={setAboutMe} placeholder="Нет информации" placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR} />
            {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
            <Button text={'Сохранить'} margin loading={btnLoading} onPress={updateProfile} />
        </View>
    </Container>
}

