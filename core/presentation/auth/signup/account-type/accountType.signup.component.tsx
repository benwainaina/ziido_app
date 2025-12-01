import { Pressable, Text, View } from 'react-native';
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
import { TAccountTypeOptions } from '../../../state-manager/shared/interfaces';
import { THEME_COLORS } from '../../../../shared/constants/theme.colors';
import { useDispatch } from 'react-redux';
import { setUserPreferredExperience } from '../../../state-manager/auth/slice';

interface IAccountType {
  label: string;
  value: TAccountTypeOptions;
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
  const dispatch = useDispatch();

  /**
   * States
   */
  const [activeAccountType, setActiveAccountType] = useState<
    number | undefined
  >(undefined);
  const [selectedExperience, setSelectedEperience] =
    useState<TAccountTypeOptions | null>();

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

  const onAccountExperienceSelected = (
    accountExperience: TAccountTypeOptions,
  ) => {
    dispatch(setUserPreferredExperience(accountExperience));
    setSelectedEperience(accountExperience);
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
                  <Pressable
                    key={value}
                    onPress={() => onAccountTypeClicked(index)}
                    onLongPress={() => onAccountExperienceSelected(value)}
                  >
                    <View
                      style={
                        AccountTypeSignupComponentStyles.body__section_one__account_types__account
                      }
                    >
                      <View>
                        <View
                          style={
                            AccountTypeSignupComponentStyles.body__section_one__account_types__account__header
                          }
                        >
                          <Text
                            style={{
                              ...AccountTypeSignupComponentStyles.body__section_one__account_types__account__header__title,
                              color:
                                selectedExperience === value
                                  ? THEME_COLORS.purpleOne
                                  : THEME_COLORS.blackOne,
                            }}
                          >
                            {translate(label)}
                          </Text>
                          <View>
                            <ChevronSvg />
                          </View>
                        </View>
                      </View>
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
                  </Pressable>
                ),
              )}
            </View>
          </View>
          <View style={AccountTypeSignupComponentStyles.body__action_button}>
            <ButtonSharedComponent
              buttonStyle={{
                opacity: !selectedExperience ? 0.5 : 1,
              }}
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
              isDisabled={!selectedExperience}
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
