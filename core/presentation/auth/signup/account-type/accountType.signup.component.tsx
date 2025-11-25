import { Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AccountTypeSignupComponentStyles } from './accountType.signup.component.styles';
import { LanguageSelectorSharedComponent } from '../../../shared/language-selector/languageSelector.shared.component';
import WarningBlackSvg from '../../../../assets/shared/warning-black.svg';
import ChevronSvg from '../../../../assets/shared/chevron.svg';
import DecorationSvg from '../../../../assets/auth/signup/welcome.decoration.svg';
import { useState } from 'react';
import { ButtonSharedComponent } from '../../../shared/button/button.shared.component';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';
import { useInternationalizationUtility } from '../../../../utilities/useInternationalization.utility';
import { useCustomRouterUtility } from '../../../../utilities/useCustomRouter.utility';

interface IAccountType {
  label: string;
  value: string;
  description: string;
}

const AccountTypes: IAccountType[] = [
  {
    label: 'AUTH.SIGNUP.ACCOUNT_TYPE.TRAINER_LABEL',
    value: 'trainer',
    description: 'AUTH.SIGNUP.ACCOUNT_TYPE.TRAINER_DESCRIPTION',
  },
  {
    label: 'AUTH.SIGNUP.ACCOUNT_TYPE.CLIENT_LABEL',
    value: 'client',
    description: 'AUTH.SIGNUP.ACCOUNT_TYPE.CLIENT_DESCRIPTION',
  },
  {
    label: 'AUTH.SIGNUP.ACCOUNT_TYPE.BYOT_LABEL',
    value: 'beYourOwnTrainer',
    description: 'AUTH.SIGNUP.ACCOUNT_TYPE.BYOT_DESCRIPTION',
  },
];

export const AccountTypeSignupComponent = () => {
  /**
   * Hooks
   */
  const { translate } = useInternationalizationUtility();
  const { navigate } = useCustomRouterUtility();

  /**
   * States
   */
  const [activeAccountType, setActiveAccountType] = useState<
    number | undefined
  >(undefined);

  /**
   * Handlers
   */
  const onAccountTypeClicked = (index: number) => {
    if (index !== activeAccountType) {
      setActiveAccountType(index);
    } else {
      setActiveAccountType(undefined);
    }
  };

  return (
    <SafeAreaView>
      <View style={AccountTypeSignupComponentStyles.wrapper}>
        <View style={AccountTypeSignupComponentStyles.header}>
          <LanguageSelectorSharedComponent />
        </View>
        <View style={AccountTypeSignupComponentStyles.body}>
          <View style={AccountTypeSignupComponentStyles.body__section_one}>
            <View
              style={
                AccountTypeSignupComponentStyles.body__section_one__instruction
              }
            >
              <Text
                style={
                  AccountTypeSignupComponentStyles.body__section_one__instruction__title
                }
              >
                {translate('AUTH.SIGNUP.ACCOUNT_TYPE.TITLE')}
              </Text>
              <View
                style={
                  AccountTypeSignupComponentStyles.body__section_one__instruction__sub_title
                }
              >
                <View
                  style={
                    AccountTypeSignupComponentStyles.body__section_one__instruction__sub_title__icon
                  }
                >
                  <WarningBlackSvg />
                </View>
                <Text
                  style={
                    AccountTypeSignupComponentStyles.body__section_one__instruction__sub_title__text
                  }
                >
                  {translate('AUTH.SIGNUP.ACCOUNT_TYPE.SUB_TITLE')}
                </Text>
              </View>
            </View>
            <View
              style={
                AccountTypeSignupComponentStyles.body__section_one__account_types
              }
            >
              {AccountTypes.map(
                ({ value, label, description }: IAccountType, index) => (
                  <View
                    key={value}
                    style={
                      AccountTypeSignupComponentStyles.body__section_one__account_types__account
                    }
                  >
                    <TouchableHighlight
                      underlayColor={''}
                      onPress={() => onAccountTypeClicked(index)}
                    >
                      <View
                        style={
                          AccountTypeSignupComponentStyles.body__section_one__account_types__account__header
                        }
                      >
                        <Text
                          style={
                            AccountTypeSignupComponentStyles.body__section_one__account_types__account__header__title
                          }
                        >
                          {translate(label)}
                        </Text>
                        <View>
                          <ChevronSvg />
                        </View>
                      </View>
                    </TouchableHighlight>
                    {activeAccountType === index && (
                      <Text
                        style={
                          AccountTypeSignupComponentStyles.body__section_one__account_types__account__body
                        }
                      >
                        {translate(description)}
                      </Text>
                    )}
                  </View>
                ),
              )}
            </View>
          </View>
          <View style={AccountTypeSignupComponentStyles.body__action_button}>
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
              label={translate('AUTH.SIGNUP.ACCOUNT_TYPE.ACTION_BUTTON')}
              underlayColor=""
              onPress={() => navigate('createAccount', {})}
            />
          </View>
        </View>
        <View style={AccountTypeSignupComponentStyles.body__decoration}>
          <DecorationSvg />
        </View>
      </View>
    </SafeAreaView>
  );
};
