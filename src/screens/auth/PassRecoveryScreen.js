import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { postRequest } from "../../api/RequestHelpers";
import { AppColors } from "../../styles/AppColors";

export default function PassRecoveryScreen({ navigation, route }) {
    const [code, setCode] = useState()
    const [codeError, setCodeError] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const [loading, setLoading] = useState(false)
    const { phone } = route.params

    const [resendMinutes, setResendMinutes] = useState(null)
    const [resendSeconds, setResendSeconds] = useState(null)
    const [disableSendCode, setDisableSendCode] = useState(true)

    const [tryLater, setTryLater] = useState(false)

    function verify() {
        setLoading(true)
        setTryLater(false)
        if (!code) {
            setCodeError(true);
            setShowErrorMsg(false)
            setLoading(false)
        } else if (code.length < 4) {
            setCodeError(true);
            setShowErrorMsg(
                'Код безопасности должен содержать не менее 4 символов.',
            );
            setLoading(false)
        } else {
            setCodeError(false);
            setShowErrorMsg(false);

            postRequest('verify_forgot_password_code', {
                phone: phone,
                code: code,
            }).then(([status, body]) => {
                console.log(body);
                if (status === 200) {
                    navigation.navigate('NewPassScreen', { phone: phone, code: code })
                } else if (status === 422) {
                    setCodeError(true);
                    setShowErrorMsg('Неверный код');
                }
                setLoading(false)
            });
        }
    }

    useEffect(() => {
        resendTimer(0, 59)
    }, [])

    function resendTimer(min, sec) {
        setResendMinutes(min)
        setResendSeconds(sec)
        let seconds = sec
        let minutes = min
        const interval = setInterval(() => {
            if (seconds === 0) {
                console.log('resendSeconds === 0');
                if (minutes === 0) {
                    console.log('resendMinutes === 0');
                    clearInterval(interval)
                    setDisableSendCode(false)
                    return;
                }
                seconds = 60;
                minutes = minutes - 1
                setResendMinutes(minutes)
            }
            seconds = seconds - 1
            setResendSeconds(seconds);
        }, 1000);
        // Sorry, an error occurred with Green SMS.
        return interval
    }

    function resendCode() {
        setDisableSendCode(true)
        postRequest('forgot_password', {
            phone: phone
        }).then(([status, body]) => {
            console.log(body);
            if (status === 200) {
                resendTimer(0, 59)
            } else if (body.message == 'Your Phone Blocked 10 minutes') {
                resendTimer(9, 59)
            } else if (body.message == 'Your Phone Blocked 1 minute') {
                resendTimer(0, 59)
            } else setTryLater(true)

            setLoading(false)
        })
    }

    return <Container goBack>
        <View style={Styles.whiteContainer}>
            <View style={{ marginVertical: 25 }}>
                <Text style={Styles.blackSemiBold28}>Востоновление пароля</Text>
                <Text style={[Styles.darkRegular15, { marginTop: 15 }]}>Укажите 4-значный код отпрвленный на ваш номер</Text>
            </View>
            <Input labelText={'Код подтверждения'} value={code} setValue={setCode} inputType={'code'} error={codeError} />
            {showErrorMsg && <Text style={Styles.redRegular12}>{showErrorMsg}</Text>}
            <View style={{ marginVertical: 45 }}>
                {tryLater && (
                    <Text style={[Styles.redRegular12, { textAlign: 'center' }]}>Попробуйте немного позже</Text>
                )}
                <TouchableOpacity style={[Styles.flexRow, { marginBottom: 15, alignSelf: 'center' }]} disabled={disableSendCode} onPress={resendCode}>
                    <Text style={[Styles.blueSemiBold14, { textAlign: 'center' }]}>Отправить код повторно</Text>
                    {(resendMinutes == 0 && resendSeconds == 0) ? null : (disableSendCode && <Text style={{ color: AppColors.STEEL_BLUE_COLOR, fontSize: 14, fontWeight: '500' }}>:  {resendMinutes < 10 ? '0' + resendMinutes : resendMinutes} : {resendSeconds < 10 ? '0' + resendSeconds : resendSeconds}</Text>)}
                </TouchableOpacity>
                <Button text={'Подтвердить'} onPress={verify} margin loading={loading} />
            </View>
        </View>
    </Container >
}