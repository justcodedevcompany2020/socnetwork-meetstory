import React, { useRef, useState } from "react";
import Container from "../../components/Container";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { postRequestAuth } from "../../api/RequestHelpers";
import { saveUser } from "../../store/actions/saveUser";

export default function PreferencesScreen() {
    const [btnLoading, setBtnLoading] = useState(false)
    const { token, user } = useSelector(state => state.auth)
    const [showSuccess, setShowSuccess] = useState(false)
    const dispatch = useDispatch()

    const [getAcquainted, setGetAcquainted] = useState(user.get_acquainted)
    const [purpose, setPurpose] = useState(user.purpose_of_dating)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)


    function updateProfile() {
        setBtnLoading(true)
        inputRef1.current?.blur()
        inputRef2.current?.blur()

        postRequestAuth('update_profile', token, { //todo
            get_acquainted: getAcquainted,
            purpose_of_dating: purpose
        }).then(([status, body]) => {
            console.log(body, 'body');
            if (status == 200) {
                setBtnLoading(false)
                setShowSuccess(true)
                dispatch(saveUser({
                    ...user,
                    get_acquainted: getAcquainted,
                    purpose_of_dating: purpose
                }))
                setTimeout(() => {
                    setShowSuccess(false)
                }, 3000);
            }
        })
    }



    return <Container goBack headerTitle={'Предпочтения'}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
            <ScrollView>
                <Text style={Styles.darkMedium15}>Познакомлюсь</Text>
                <TextInput ref={inputRef1} multiline style={[Styles.input, { height: 125, marginBottom: 15 }]} value={getAcquainted} onChangeText={setGetAcquainted} numberOfLines={10} placeholder="С женщиной в возрасте 31 - 39 лет в районе Ашхабад, Туркменистан" />
                <Text style={Styles.darkMedium15}>Цель знакомства</Text>
                <TextInput ref={inputRef2} multiline style={[Styles.input, { height: 125 }]} value={purpose} onChangeText={setPurpose} numberOfLines={10} placeholder="Дружба, любовь, брак, встреча" />
                {showSuccess && <Text style={[Styles.blueSemiBold14, { textAlign: 'center', marginBottom: 15 }]}>Изменения успешно сохранены</Text>}
                <Button text={'Сохранить'} margin loading={btnLoading} onPress={updateProfile} />
            </ScrollView>
        </View>
    </Container>
}