import { StyleSheet } from 'react-native';
import { fontScaleUtility } from '../../../utilities/fontScale.utility';
import { itemScalerUtility } from '../../../utilities/itemScaler.utility';
import { THEME_COLORS } from '../../../shared/constants/theme.colors';

export const languageSelectorSharedComponentStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: itemScalerUtility()().w(19),
    position: 'relative',
  },
  activeLanguage: {
    fontWeight: 'bold',
    fontSize: fontScaleUtility(24),
    textTransform: 'uppercase',
  },
  picker: {
    position: 'absolute',
    paddingVertical: itemScalerUtility()().h(12),
    display: 'flex',
    rowGap: itemScalerUtility()().h(12),
    backgroundColor: THEME_COLORS.whiteOne,
    elevation: 2,
    shadowColor: THEME_COLORS.purpleOne,
    borderRadius: itemScalerUtility()().w(4),
    paddingHorizontal: itemScalerUtility()().w(12),
    zIndex: 1000,
  },
  pickerText: {
    fontWeight: 'bold',
    fontSize: fontScaleUtility(18),
  },
});
