import React, { useEffect, useRef, useState } from 'react';
import Container from '../../components/Container';
import { View, ScrollView, Modal } from 'react-native';
import { Styles } from '../../styles/Styles';
import Input from '../../components/Input';
import AcceptField from '../../components/AcceptField';
import Button from '../../components/Button';
import { getRequest } from '../../api/RequestHelpers';

export default function FilterSearchPopup({ modalVisible, setModalVisible, setFilterData, onSearch }) {
  const [isOnline, setIsOnline] = useState(false)
  const [withPhoto, setWithPhoto] = useState(false)
  const [dontShowOlds, setDontShowOlds] = useState(false)

  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [countriesLoading, setCountriesLoading] = useState(true)

  const [selectedCity, setSelectedCity] = useState(null)
  const [cities, setCities] = useState([])
  const [citiesLoading, setCitiesLoading] = useState(true)

  const dropdownRefCity = useRef();
  const dropdownRefCountry = useRef();

  const [selectedAgeRange, setSelectedAgeRange] = useState(null)
  const ageRanges = [
    { value: '16-21', id: 0, start: 16, end: 21 },
    { value: '22-27', id: 1, start: 22, end: 27 },
    { value: '28-33', id: 2, start: 28, end: 33 },
    { value: '34-39', id: 3, start: 34, end: 39 },
    { value: '40-45', id: 4, start: 40, end: 45 },
    { value: '46-50', id: 5, start: 46, end: 50 },
    { value: 'от 51', id: 6, start: 51, end: null },
  ]


  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    setCitiesLoading(true)
    setSelectedCity(null)
    dropdownRefCity.current?.reset()
    selectedCountry && getCities()
  }, [selectedCountry])

  function getCountries() {
    getRequest('country_and_city').then(res => {
      if (res.status) {
        setCountries(res.data.map((el, i) => ({ value: el.name, country_id: el.id, id: i })))
        setCountriesLoading(false)
      }
    })
  }

  function getCities() {
    getRequest(`country_and_city/${selectedCountry}`).then(res => {
      if (res.status) {
        setCities(res.data.map((el, i) => ({ value: el.name, city_id: el.id, id: i })))
        setCitiesLoading(false)
      }
    })
  }

  function onPressSearch() {
    const filterData = {
      online: isOnline,
      old: dontShowOlds,
      photo: withPhoto,
      start_date: ageRanges[selectedAgeRange]?.start ?? null,
      end_date: ageRanges[selectedAgeRange]?.end ?? null,
      country_id: countries[selectedCountry]?.country_id ?? null,
      city_id: cities[selectedCity]?.city_id ?? null
    }
    setFilterData(filterData)
    onSearch(filterData)
    setModalVisible(false)
  }

  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <Container goBack headerTitle={'Расширенный поиск'} onPressBack={() => setModalVisible(false)}>
        <View style={[Styles.whiteContainer, { marginTop: 30, paddingTop: 30 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input labelText={'Возраст'} value={selectedAgeRange} setValue={setSelectedAgeRange} inputType={'dropdown'} data={ageRanges} placeholder={' '} />
            <Input labelText={'Выберите страну'} value={selectedCountry} setValue={setSelectedCountry} inputType={'dropdown'} data={countries} placeholder={'Выберите страну'} loading={countriesLoading} dropdownRef={dropdownRefCountry} />
            <Input labelText={'Выберите город'} value={selectedCity} setValue={setSelectedCity} inputType={'dropdown'} data={cities} placeholder={'Выберите город'} loading={citiesLoading} dropdownRef={dropdownRefCity} />
            <AcceptField text={'Сейчас онлайн'} accepted={isOnline} setAccepted={setIsOnline} />
            <AcceptField text={'Только с фотографией'} accepted={withPhoto} setAccepted={setWithPhoto} />
            <AcceptField text={'Не показывать старые'} accepted={dontShowOlds} setAccepted={setDontShowOlds} />
            <View style={{ marginTop: 30 }}>
              <Button text={'Поиск'} margin onPress={onPressSearch} marginBottom={40} />
            </View>
          </ScrollView>
        </View>
      </Container>
    </Modal>
  );
}
