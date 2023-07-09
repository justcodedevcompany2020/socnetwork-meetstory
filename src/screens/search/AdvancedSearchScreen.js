import React, {useState} from 'react';
import Container from '../../components/Container';
import {View, ScrollView} from 'react-native';
import {Styles} from '../../styles/Styles';
import Input from '../../components/Input';
import AcceptField from '../../components/AcceptField';

export default function AdvancedSearchScreen() {
  const [name, setName] = useState();
  const [selectedCountry, setSelectedCountry] = useState()
  const countries = ['Armenia', 'Russia', 'France']
  const [isOnline, setIsOnline] = useState(true)
  const [withPhoto, setWithPhoto] = useState(true)
  const [dontShowOlds, setDontShowOlds] = useState()

  return (
    <Container goBack headerTitle={'Расширенный поиск'}>
      <View style={[Styles.whiteContainer, {marginTop: 30, paddingTop: 30}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input labelText={'Найти'} value={name} setValue={setName} placeholder={'Имя'}/>
          <Input labelText={'Возраст'} value={name} setValue={setName} placeholder={'От'} inputType={'age'}/>
          <Input value={name} setValue={setName} placeholder={'До'} inputType={'age'}/>
          <Input labelText={'Выберите страну'} value={selectedCountry} setValue={setSelectedCountry} inputType={'dropdown'} data={countries} placeholder={'Выберите страну'} />
          <Input labelText={'Выберите область'} value={selectedCountry} setValue={setSelectedCountry} inputType={'dropdown'} data={countries} placeholder={'Выберите область'} />
          <AcceptField text={'Сейчас онлайн'} accepted={isOnline} setAccepted={setIsOnline}/>
          <AcceptField text={'Только с фотографией'} accepted={withPhoto} setAccepted={setWithPhoto}/>
          <AcceptField text={'Не показывать старые'} accepted={dontShowOlds} setAccepted={setDontShowOlds}/>
        </ScrollView>
      </View>
    </Container>
  );
}
