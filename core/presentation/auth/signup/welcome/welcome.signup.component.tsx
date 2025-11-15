import { Text, View } from 'react-native';
import { WelcomeSignupComponentStyles } from './welcome.signup.component.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSharedComponent } from '../../../shared/button/button.shared.component';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';
import DecorationSvg from '../../../../assets/auth/signup/welcome.decoration.svg';
import { useInternationalizationUtility } from '../../../../utilities/useInternationalization.utility';
import { LanguageSelectorSharedComponent } from '../../../shared/language-selector/languageSelector.shared.component';

export const WelcomeSignupComponent = () => {
  /**
   * Hooks
   */
  const { translate } = useInternationalizationUtility();
  return (
    <SafeAreaView>
      <View style={WelcomeSignupComponentStyles.wrapper}>
        <View style={WelcomeSignupComponentStyles.header}>
          <LanguageSelectorSharedComponent />
        </View>
        <View style={WelcomeSignupComponentStyles.body}>
          <View style={WelcomeSignupComponentStyles.body__salutation}>
            <Text
              style={WelcomeSignupComponentStyles.body__salutation__pre_title}
            >
              {translate('AUTH.SIGNUP.WELCOME.SALUTATION_PRE_TITLE')}
            </Text>
            <Text style={WelcomeSignupComponentStyles.body__salutation__title}>
              {translate('AUTH.SIGNUP.WELCOME.SALUTATION_TITLE')}
            </Text>
          </View>
          <View style={WelcomeSignupComponentStyles.body__decoration}>
            <DecorationSvg />
          </View>
          <View style={WelcomeSignupComponentStyles.body__action_button}>
            <ButtonSharedComponent
              buttonStyle={{}}
              textStyle={
                {
                  fontSize: fontScaleUtility(24),
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: 'white',
                } as any
              }
              label={translate('AUTH.SIGNUP.WELCOME.ACTION_BUTTON')}
              underlayColor=""
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
