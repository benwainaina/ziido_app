import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../../../../shared/constants/theme.colors';
import { itemScalerUtility } from '../../../../utilities/itemScaler.utility';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';

export const AccountTypeSignupComponentStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME_COLORS.whiteOne,
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: itemScalerUtility()().h(27),
    paddingRight: itemScalerUtility()().w(25),
  },
  body: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    rowGap: itemScalerUtility()().h(58),
    zIndex: 100,
  },
  body__section_one: {
    marginTop: itemScalerUtility()().h(48),
    width: '100%',
    paddingHorizontal: itemScalerUtility()().w(30),
    rowGap: itemScalerUtility()().h(21),
  },
  body__section_one__instruction: {
    display: 'flex',
    rowGap: itemScalerUtility()().h(31),
    position: 'relative',
    width: '100%',
    marginBottom: itemScalerUtility()().h(51),
  },
  body__section_one__instruction__title: {
    fontSize: fontScaleUtility(28),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  body__section_one__instruction__sub_title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: itemScalerUtility()().w(13),
  },
  body__section_one__instruction__sub_title__icon: {
    marginTop: itemScalerUtility()().h(4),
  },
  body__section_one__instruction__sub_title__text: {
    fontSize: fontScaleUtility(15),
  },
  body__section_one__account_types: {
    display: 'flex',
    rowGap: itemScalerUtility()().h(31),
    width: '100%',
  },
  body__section_one__account_types__account: {
    display: 'flex',
    rowGap: itemScalerUtility()().h(17),
    elevation: 4,
    paddingVertical: itemScalerUtility()().h(18),
    paddingHorizontal: itemScalerUtility()().h(26),
    shadowColor: THEME_COLORS.blackOne,
    shadowRadius: itemScalerUtility()().w(6),
    borderRadius: itemScalerUtility()().w(6),
    shadowOpacity: 2,
    backgroundColor: THEME_COLORS.whiteOne,
    width: 'auto',
  },
  body__section_one__account_types__account__header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body__section_one__account_types__account__header__title: {
    fontSize: fontScaleUtility(24),
    fontWeight: 'bold',
  },
  body__section_one__account_types__account__body: {
    fontSize: fontScaleUtility(16),
  },
  body__decoration: {
    position: 'absolute',
    bottom: 0,
  },
  body__action_button: {
    alignSelf: 'center',
    backgroundColor: THEME_COLORS.purpleOne,
    paddingVertical: itemScalerUtility()().h(17),
    paddingHorizontal: itemScalerUtility()().w(68),
    borderRadius: itemScalerUtility()().w(200),
  },
});
