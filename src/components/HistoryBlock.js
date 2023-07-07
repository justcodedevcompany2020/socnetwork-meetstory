import { View, StyleSheet, Image, Text } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Styles } from '../styles/Styles';
import { AppColors } from '../styles/AppColors';

export const HistoryBlock = ({ img, title, type, price }) => {
  return (
    <Shadow
      distance={2}
      containerStyle={{ marginTop: 10, marginHorizontal: 2, marginVertical: 10, }}
      style={styles.block}>
      <View style={Styles.flexRow}>
        <Image style={styles.img} source={img} />
        <View style={styles.titleBlocK}>
          <Text style={Styles.darkMedium14}>{title}</Text>
          <Text style={Styles.darkBlueMedium12}>{type}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={[price[0] === '-' ? styles.bittersweetSemiBold12 : styles.darkBlueMedium12]}>{price}</Text>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    padding: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 6,
  },
  img: {
    width: 50,
    height: 50,
  },
  titleBlocK: {
    marginHorizontal: 20,
  },
  bittersweetSemiBold12: {
    color: AppColors.BITTERSWEET_COLOR,
    fontSize: 12
  },
  darkBlueMedium12: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 12,
  }
});
