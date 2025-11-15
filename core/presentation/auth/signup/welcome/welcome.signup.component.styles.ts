import { StyleSheet } from 'react-native';
import { itemScalerUtility } from '../../../../utilities/itemScaler.utility';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';
import { THEME_COLORS } from '../../../../shared/constants/theme.colors';

export const WelcomeSignupComponentStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: itemScalerUtility()().h(27),
    paddingRight: itemScalerUtility()().w(25),
  },
  body: {
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  body__salutation: {
    display: 'flex',
    alignItems: 'center',
    rowGap: itemScalerUtility()().h(21),
  },
  body__salutation__pre_title: {
    fontSize: fontScaleUtility(36),
  },
  body__salutation__title: {
    fontSize: fontScaleUtility(64),
    fontWeight: 'bold',
  },
  body__decoration: {
    position: 'absolute',
    bottom: 0,
  },
  body__action_button: {
    position: 'absolute',
    bottom: itemScalerUtility()().h(96),
    alignSelf: 'center',
    backgroundColor: THEME_COLORS.purpleOne,
    paddingVertical: itemScalerUtility()().h(17),
    paddingHorizontal: itemScalerUtility()().w(68),
    borderRadius: itemScalerUtility()().w(200),
  },
});
