import {View, StyleSheet, Image, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import { Styles } from '../../../styles/Styles';

export const TextPostComponent = ({text}) => {
  return (
    <View style={styles.block}>
      <Shadow
        distance={2}
        containerStyle={{
          marginHorizontal: 2,
        }}
        style={styles.block}>
        <Text style = {[Styles.darkRegular12,{paddingHorizontal:10}]}>{text}</Text>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    borderRadius: 6,
    paddingVertical:10,
    marginBottom:10,
  },
});
