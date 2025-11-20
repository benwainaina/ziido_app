import { Text, TouchableHighlight } from 'react-native';
import { TDynamicKeys } from '../../../shared/interfaces';

export const ButtonSharedComponent = ({
  buttonStyle,
  textStyle,
  label,
  onPress,
  isDisabled,
  underlayColor,
}: TDynamicKeys) => {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      disabled={isDisabled}
      onPress={onPress}
      style={{
        ...buttonStyle,
      }}
    >
      <Text
        style={{
          ...textStyle,
        }}
      >
        {label}
      </Text>
    </TouchableHighlight>
  );
};
