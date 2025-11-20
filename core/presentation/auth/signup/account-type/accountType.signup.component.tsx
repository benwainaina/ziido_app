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
    label: 'Trainer',
    value: 'trainer',
    description:
      "You have a passion for training and transforming people's lives through exercise.",
  },
  {
    label: 'Client',
    value: 'client',
    description:
      'You are new to the Gym and are looking for a trainer to guide you.',
  },
  {
    label: 'Be Your Own Trainer',
    value: 'beYourOwnTrainer',
    description:
      'If you know your way around the gym, then this is the way to go',
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
                Continue as
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
                  Long press an option to select it. This cannot be changed once
                  you create an account!
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
                          {label}
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
                        {description}
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
              label={translate('AUTH.SIGNUP.WELCOME.ACTION_BUTTON')}
              underlayColor=""
              onPress={() => navigate('continueAs', {})}
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
