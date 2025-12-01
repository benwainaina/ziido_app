import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../../../../shared/constants/theme.colors';
import { itemScalerUtility } from '../../../../utilities/itemScaler.utility';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';

export const CreateAccountSignupComponentStyles = StyleSheet.create({
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
    paddingTop: itemScalerUtility()().h(80),
  },
  account_type: {
    display: 'flex',
    alignItems: 'center',
    rowGap: itemScalerUtility()().h(27),
    zIndex: 100,
  },
  account_type__instruction: {
    fontSize: fontScaleUtility(16),
  },
  account_type__value: {
    fontSize: fontScaleUtility(32),
    fontWeight: 'bold',
  },
});
