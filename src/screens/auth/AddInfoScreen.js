import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { postRequest, postRequestAuth } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";


export default function AddInfoScreen({ navigation }) {
    const { token } = useSelector(state => state.auth)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [loading, setLoading] = useState(false)

    const [errors, setErrors] = useState({
        name: false,
        birthDate: false
    })

    function addInfo() {
        setLoading(true)

        setErrors({
            name: false,
            birthDate: false
        })
        let myErrors = { ...errors }
        myErrors.name = !name
        myErrors.birthDate = !birthDate
        console.log(myErrors);

        if (!name || !birthDate) {
            setErrors(myErrors)
            setLoading(false)
            return
        }

        postRequestAuth('add_user_info', token, {
            name: name,
            surname: surname,
            date_of_birth: birthDate
        }).then(([status, data]) => {
            if(status == 200){
                navigation.navigate('AddProfilePhoto')
            }
            console.log(data);
            setLoading(false)
        })
    }


    return <Container>
        <View style={Styles.whiteContainer}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 25 }]}>Добавьте информацию о себе</Text>
            <Input labelText={'Имя'} value={name} setValue={setName} error={errors.name}/>
            <Input labelText={'Фамилия (опционально)'} value={surname} setValue={setSurname} />
            <Input labelText={'Дата рождения'} value={birthDate} setValue={setBirthDate} inputType={'date'} error={errors.birthDate} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Продолжить'} onPress={addInfo} margin loading={loading}/>
            </View>
        </View>
    </Container>
}