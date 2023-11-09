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

export default function CTextInput({
  text,
  textInputStyle,
  mainTxtInp,
  isSecure,
  RightIcon,
  LeftIcon,
  onChangeText,
  value,
  onPress,
  keyboardType,
  align,
  onFocus,
  onBlur,
}) {
  const [isSecurePass, setIsSecurePass] = useState(isSecure);

  const onPressSecureIcon = () => {
    setIsSecurePass(!isSecurePass);
  };

  return (
    <View style={[localStyles.main, mainTxtInp]}>
      {!!LeftIcon && <LeftIcon />}
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={[localStyles.local, textInputStyle]}
        placeholder={text}
        placeholderTextColor={colors.silver}
        secureTextEntry={isSecurePass}
        value={value}
        textAlign={align}
        onChangeText={onChangeText}
        onPress={onPress}
        keyboardType={keyboardType}
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
    ...styles.rowCenter,
    ...styles.justifyBetween,
  },
  local: {
    color: colors.black,
    ...styles.pl15,
    ...styles.flex,
    width: '100%',
    height: moderateScale(80),
  },
  EyePng: {
    ...styles.mr10,
    width: moderateScale(24),
    height: moderateScale(24),
  },
});
