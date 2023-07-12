import {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CheckBox, Checked} from '../../assets/svgs/ProfileSvgs';
import Container from '../../components/Container';
import {Styles} from '../../styles/Styles';

export const ChangeTemaScreen = () => {
  const [checked, setChecked] = useState(0);
  const [data, setData] = useState([
    {text: 'Индиго'},
    {text: 'Индиго теёмная'},
    {text: 'Прозрачная'},
    {text: 'Светлая '},
    {text: 'Темная'},
    {text: 'Розовая'},
    {text: 'Оранжевая'},
    {text: 'Метал'},
    {text: 'Кофе'},
  ]);
  return (
    <Container headerTitle={'Тема оформления'} goBack>
      <View
        style={[Styles.whiteContainer, {marginTop: 30, paddingVertical: 20}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((elm, i) => (
            <TouchableOpacity onPress={()=>setChecked(i)} key={i} style={[Styles.flexRowJustifyBetween,{marginBottom:15}]}>
              <Text style={Styles.blueMedium16}>{elm.text}</Text>
              {checked === i ?<Checked />:<CheckBox />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Container>
  );
};
