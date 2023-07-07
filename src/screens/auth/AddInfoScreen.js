import React, { useState } from "react";
import Container from "../../components/Container";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";


export default function AddInfoScreen({ navigation }) {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [birthDate, setBirthDate] = useState()

    return <Container>
        <View style={Styles.whiteContainer}>
            <Text style={[Styles.blackSemiBold28, { marginVertical: 25 }]}>Добавьте информацию о себе</Text>
            <Input labelText={'Имя'} value={name} setValue={setName} />
            <Input labelText={'Фамилия (опционально)'} value={surname} setValue={setSurname} />
            <Input labelText={'Дата рождения'} value={birthDate} setValue={setBirthDate} inputType={'date'} />
            <View style={{ marginVertical: 45 }}>
                <Button text={'Продолжить'} onPress={() => navigation.navigate('AddProfilePhoto')} margin />
            </View>
        </View>
    </Container>
}