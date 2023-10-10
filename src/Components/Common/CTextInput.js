import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../../Common/constant';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import Images from '../../Assets/Images';

function CTextInput({
  text,
  textInputStyle,
  mainTxtInp,
  isSecure,
  RightIcon,
  onChangeText,
  value,
  onPress,
  placeColor,
}) {
  const [isSecurePass, setIsSecurePass] = useState(isSecure);

  const onPressSecureIcon = () => {
    setIsSecurePass(!isSecurePass);
  };

  return (
    <View style={[localStyles.main, mainTxtInp]}>
      <TextInput
        style={[localStyles.local, textInputStyle]}
        placeholder={text}
        placeholderTextColor={placeColor}
        secureTextEntry={isSecurePass}
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
      />
      {!!RightIcon && <RightIcon />}
      {!!isSecure && (
        <TouchableOpacity onPress={onPressSecureIcon}>
          {!isSecurePass ? (
            <Image source={Images.view} style={localStyles.EyePng} />
          ) : (
            <Image source={Images.nonView} style={localStyles.EyePng} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  main: {
    width: '100%',
    height: moderateScale(56),
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
    ...styles.mt40,
    ...styles.rowCenter,
    ...styles.justifyBetween,
  },
  local: {
    ...styles.pl10,
    ...styles.flex,
    width: '100%',
  },
  EyePng: {
    ...styles.mr10,
    width: moderateScale(24),
    height: moderateScale(24),
  },
});

export default CTextInput;
