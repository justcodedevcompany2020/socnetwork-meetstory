import { StyleSheet } from 'react-native';
import { AppColors } from './AppColors';

export const Styles = StyleSheet.create({
  whiteContainer: {
    backgroundColor: AppColors.WHITE_COLOR,
    flex: 1,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  containerTopPadding: {
    paddingTop: 105,
    flex: 1,
    backgroundColor: AppColors.WHITE_COLOR
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blackSemiBold28: {
    fontSize: 28,
    fontFamily: 'Raleway-SemiBold',
    color: AppColors.BLACK_COLOR,
  },
  bitterSweetSemiBold28: {
    fontSize: 28,
    fontFamily: 'Raleway-SemiBold',
    color: AppColors.BITTERSWEET_COLOR,
  },
  darkMedium14: {
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkMedium15: {
    fontSize: 15,
    fontFamily: 'Raleway-Medium',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkMedium20: {
    fontSize: 20,
    fontFamily: 'Raleway-Medium',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkSemiBold16: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkSemiBold14: {
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkSemiBold12: {
    fontSize: 12,
    fontFamily: 'Raleway-SemiBold',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkMedium12: {
    fontSize: 12,
    fontFamily: 'Raleway-Medium',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkMedium13: {
    fontSize: 13,
    fontFamily: 'Raleway-Medium',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkRegular15: {
    fontSize: 15,
    fontFamily: 'Raleway-Regular',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkRegular10: {
    fontSize: 10,
    fontFamily: 'Raleway-Regular',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  darkRegular12: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: AppColors.DARK_CHARCOAL_COLOR
  },
  redRegular12: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: AppColors.RED_COLOR,
    marginBottom: 10
  },
  whiteSemiBold18: {
    color: AppColors.WHITE_COLOR,
    fontSize: 18,
    fontFamily: 'Raleway-SemiBold'
  },
  blackMedium18: {
    color: AppColors.BLACK_COLOR,
    fontSize: 18,
    fontFamily: 'Raleway-Medium'
  },
  blackMedium12: {
    color: AppColors.BLACK_COLOR,
    fontSize: 12,
    fontFamily: 'Raleway-Medium'
  },
  blueSemiBold12: {
    color: AppColors.STEEL_BLUE_COLOR,
    fontSize: 12,
    fontFamily: 'Raleway-SemiBold'
  },
  whiteSemiBold16: {
    color: AppColors.WHITE_COLOR,
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold'
  },
  whiteRegular12: {
    color: AppColors.WHITE_COLOR,
    fontSize: 12,
    fontFamily: 'Raleway-Regular'
  },
  whiteRegular13: {
    color: AppColors.WHITE_COLOR,
    fontSize: 13,
    fontFamily: 'Raleway-Regular'
  },
  whiteSemiBold13: {
    color: AppColors.WHITE_COLOR,
    fontSize: 13,
    fontFamily: 'Raleway-SemiBold'
  },
  blueSemiBold15: {
    color: AppColors.STEEL_BLUE_COLOR,
    fontSize: 15,
    fontFamily: 'Raleway-SemiBold'
  },
  blueSemiBold20: {
    color: AppColors.STEEL_BLUE_COLOR,
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold'
  },
  blueSemiBold14: {
    color: AppColors.STEEL_BLUE_COLOR,
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold'
  },
  darkBlueMedium12: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 12,
    fontFamily: 'Raleway-Medium'
  },
  darkBlueMedium16: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 16,
    fontFamily: 'Raleway-Medium'
  },
  darkBlueSemiBold14: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold'
  },
  darkBlueSemiBold10: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 10,
    fontFamily: 'Raleway-SemiBold'
  },
  darkBlueSemiBold12: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 12,
    fontFamily: 'Raleway-SemiBold'
  },
  darkBlueSemiBold16: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold'
  },
  darkBlueSemiBold20: {
    color: AppColors.LOCHMARA_COLOR,
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold'
  },
  blueMedium16: {
    color: AppColors.STEEL_BLUE_COLOR,
    fontSize: 16,
    fontFamily: 'Raleway-Medium'
  },
  whiteSemiBold15: {
    color: AppColors.WHITE_COLOR,
    fontSize: 15,
    fontFamily: 'Raleway-SemiBold'
  },
  whiteMedium15: {
    color: AppColors.WHITE_COLOR,
    fontSize: 15,
    fontFamily: 'Raleway-Medium'
  },
  whiteMedium13: {
    color: AppColors.WHITE_COLOR,
    fontSize: 13,
    fontFamily: 'Raleway-Medium'
  },
  whiteSemiBold20: {
    color: AppColors.WHITE_COLOR,
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold'
  },
  whiteMedium20: {
    color: AppColors.WHITE_COLOR,
    fontSize: 20,
    // fontWeight:500,
  },
  DarkSemiBold20: {
    color: AppColors.DARK_CHARCOAL_COLOR,
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold'
  },
  blockContainer: {
    borderBottomWidth: 1,
    padding: 20,
    borderColor: AppColors.SOLITUDE_COLOR
  },
  blackRegular12: {
    color: AppColors.BLACK_COLOR,
    fontSize: 12,
    fontFamily: 'Raleway-Regular'
  },
  blackRegular14: {
    color: AppColors.BLACK_COLOR,
    fontSize: 14,
    fontFamily: 'Raleway-Regular'
  },
  blackRegular15: {
    color: AppColors.BLACK_COLOR,
    fontSize: 15,
    fontFamily: 'Raleway-Regular'
  },
  whiteSemiBold10: {
    color: AppColors.WHITE_COLOR,
    fontSize: 10,
    fontFamily: 'Raleway-SemiBold'
  },
  balanceText: {
    color: AppColors.WHITE_COLOR,
    fontSize: 30,
  },
  input: {
    backgroundColor: AppColors.FIRST_SNOW_COLOR,
    marginBottom: 50,
    borderRadius: 6,
    marginTop: 10,
    height: 150,
    paddingHorizontal: 15,
    textAlignVertical: "top",
  }
});
