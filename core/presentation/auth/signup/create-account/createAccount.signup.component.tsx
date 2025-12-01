import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateAccountSignupComponentStyles } from './createAccount.signup.component.styles';
import { LanguageSelectorSharedComponent } from '../../../shared/language-selector/languageSelector.shared.component';
import { useSelector } from 'react-redux';
import { selectUserPreferredExperience } from '../../../state-manager/auth/selectors';
import { TAccountTypeOptions } from '../../../state-manager/shared/interfaces';
import { useTranslation } from 'react-i18next';

/**
 * Constants
 */
const ACCOUNT_EXPERIENCE_TYPES: Record<TAccountTypeOptions, string> = {
  trainer: 'AUTH.SIGNUP.ACCOUNT_TYPE.TRAINER_LABEL',
  client: 'AUTH.SIGNUP.ACCOUNT_TYPE.CLIENT_LABEL',
  beYourOwnTrainer: 'AUTH.SIGNUP.ACCOUNT_TYPE.BYOT_LABEL',
};

export const CreateAccountSignupComponent = () => {
  /**
   * Hooks
   */
  const { t: translate } = useTranslation();

  /**
   * Selectors
   */
  const userPreferredExperience = useSelector(selectUserPreferredExperience);

  return (
    <SafeAreaView>
      <View style={CreateAccountSignupComponentStyles.wrapper}>
        <View style={CreateAccountSignupComponentStyles.header}>
          <LanguageSelectorSharedComponent />
        </View>
        <View style={CreateAccountSignupComponentStyles.body}>
          <View style={CreateAccountSignupComponentStyles.account_type}>
            <Text
              style={
                CreateAccountSignupComponentStyles.account_type__instruction
              }
            >
              You will experience the application as
            </Text>
            {userPreferredExperience && (
              <Text
                style={CreateAccountSignupComponentStyles.account_type__value}
              >
                {translate(ACCOUNT_EXPERIENCE_TYPES[userPreferredExperience])}
              </Text>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
