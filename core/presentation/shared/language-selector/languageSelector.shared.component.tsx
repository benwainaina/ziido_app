import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableHighlight, View } from 'react-native';
import {
  selectListOfSupportedLocales,
  selectUserLocale,
} from '../../state-manager/shared/selectors';
import { useState } from 'react';
import { languageSelectorSharedComponentStyles } from './languageSelector.shared.component';
import ChevronSvg from '../../../assets/shared/chevron.svg';
import { TDynamicKeys } from '../../../shared/interfaces';
import { setUserLocale } from '../../state-manager/shared/slice';

export const LanguageSelectorSharedComponent = () => {
  /**
   * Hooks
   */
  const dispatch = useDispatch();

  /**
   * Selectors
   */
  const supportedLocales = useSelector(selectListOfSupportedLocales);
  const userLocale = useSelector(selectUserLocale);

  /**
   * States
   */
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [controlLayoutInfo, setControlLayoutInfo] = useState<TDynamicKeys>();

  /**
   * Handlers
   */
  const onLocaleSelected = (locale: string) => {
    dispatch(setUserLocale(locale));
    setShowPicker(false);
  };

  return (
    <View>
      <TouchableHighlight
        underlayColor={''}
        onPress={() => setShowPicker(true)}
        onLayout={ev => {
          console.log('ev.nativeEvent.layout', ev.nativeEvent.layout);
          setControlLayoutInfo(ev.nativeEvent.layout);
        }}
      >
        <View style={languageSelectorSharedComponentStyles.wrapper}>
          <Text style={languageSelectorSharedComponentStyles.activeLanguage}>
            {userLocale}
          </Text>
          <ChevronSvg />
        </View>
      </TouchableHighlight>

      {showPicker && (
        <>
          {controlLayoutInfo && (
            <View
              style={{
                ...languageSelectorSharedComponentStyles.picker,
                top: controlLayoutInfo.height * 1.25,
                width: controlLayoutInfo.width,
              }}
            >
              {supportedLocales.map((locale, index) => (
                <TouchableHighlight
                  key={index}
                  underlayColor={''}
                  onPress={() => onLocaleSelected(locale.code)}
                >
                  <View>
                    <Text
                      style={languageSelectorSharedComponentStyles.pickerText}
                    >
                      {locale.label}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </View>
          )}
        </>
      )}
    </View>
  );
};
