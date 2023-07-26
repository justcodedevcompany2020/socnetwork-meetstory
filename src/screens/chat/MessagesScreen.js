import React from 'react';
import Container from '../../components/Container';
import SearchBlock from '../../components/SearchBlock';
import {Styles} from '../../styles/Styles';
import UserBlock from '../../components/UserBlock';
import {ScrollView, View} from 'react-native';

export default function MessagesScreen({navigation}) {
  return (
    <Container goBack headerTitle={'Сообщения'}>
      <SearchBlock />
      <View style={[Styles.whiteContainer, {paddingTop: 20}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <UserBlock activityStatus lastActionInfo selected/>
          <UserBlock activityStatus lastActionInfo />
          <UserBlock activityStatus lastActionInfo />
          <UserBlock activityStatus lastActionInfo />
          <UserBlock activityStatus lastActionInfo />
          <UserBlock activityStatus lastActionInfo />
        </ScrollView>
      </View>
    </Container>
  );
}
