import { Text, View } from 'react-native';
import { WelcomeSignupComponentStyles } from './welcome.signup.component.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSharedComponent } from '../../../shared/button/button.shared.component';
import { fontScaleUtility } from '../../../../utilities/fontScale.utility';
import DecorationSvg from '../../../../assets/auth/signup/welcome.decoration.svg';

export const WelcomeSignupComponent = () => {
  return (
    <SafeAreaView>
      <View style={WelcomeSignupComponentStyles.wrapper}>
        <View style={WelcomeSignupComponentStyles.header}>
          <Text>header</Text>
        </View>
        <View style={WelcomeSignupComponentStyles.body}>
          <View style={WelcomeSignupComponentStyles.body__salutation}>
            <Text
              style={WelcomeSignupComponentStyles.body__salutation__pre_title}
            >
              Welcome to
            </Text>
            <Text style={WelcomeSignupComponentStyles.body__salutation__title}>
              Ziido
            </Text>
          </View>
          <View style={WelcomeSignupComponentStyles.body__decoration}>
            <DecorationSvg />
          </View>
          <View style={WelcomeSignupComponentStyles.body__action_button}>
            <ButtonSharedComponent
              buttonStyle={{}}
              textStyle={{
                fontSize: fontScaleUtility(24),
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: 'white',
              }}
              label={'next'}
              underlayColor=""
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
