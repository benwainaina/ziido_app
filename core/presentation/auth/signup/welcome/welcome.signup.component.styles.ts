import { StyleSheet } from 'react-native';
import { itemScalerUtility } from '../../../../utilities/itemScaler.utility';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';

export const WelcomeSignupComponentStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  header: {},
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
    backgroundColor: '#8233E3',
    paddingVertical: itemScalerUtility()().h(17),
    paddingHorizontal: itemScalerUtility()().w(68),
    borderRadius: itemScalerUtility()().w(200),
  },
});
