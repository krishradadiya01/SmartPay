import {StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import {AuthNav} from '../../Navigation/navigationKeys';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import CTextInput from '../../Components/Common/CTextInput';
import CButton from '../../Components/Common/CButton';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import KeyBoardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';

const BlurStyle = {
  borderColor: colors.white,
};

const FocusStyle = {
  borderColor: colors.numbersColor,
};

export default function CreatePass({navigation}) {
  const [changeValue, setChangeValue] = useState(changeValue);
  const [confirmValue, setConfirmValue] = useState(confirmValue);
  const [focus, setFocus] = useState(BlurStyle);
  const [focus2, setFocus2] = useState(BlurStyle);

  const onFocus = () => {
    onFocusInput(setFocus);
  };

  const onBlur = () => {
    onBlurInput(setFocus);
  };

  const onFocus2 = () => {
    onFocusInput(setFocus2);
  };

  const onBlur2 = () => {
    onBlurInput(setFocus2);
  };

  const onFocusInput = onHighlight => {
    onHighlight(FocusStyle);
  };
  const onBlurInput = onHighlight => {
    onHighlight(BlurStyle);
  };

  const moveToVerify = () => {
    navigation.navigate(AuthNav.VerifyIdentity);
  };

  const changeText = txt => {
    setChangeValue(txt);
  };

  const changeConfirm = txt => {
    setConfirmValue(txt);
  };

  const moveToSign = () => {
    navigation.navigate(AuthNav.SignInEmpty);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View style={localStyles.outerMainContainer}>
        <KeyBoardAvoidWrapper>
          <View>
            <CBackButton onPress={moveToVerify} />
            <CText
              color={colors.black}
              type={'B24'}
              style={localStyles.NewPassTxt}>
              {strings.CreateNewPass}
            </CText>
            <CText color={colors.black} style={localStyles.passWarningTxt}>
              {strings.PasswordWarning}
            </CText>

            <CTextInput
              onFocus={onFocus}
              onBlur={onBlur}
              onChangeText={changeText}
              value={changeValue}
              mainTxtInp={[localStyles.PassTxt, focus]}
              text={'Password'}
              isSecure={true}
            />

            <CTextInput
              onFocus={onFocus2}
              onBlur={onBlur2}
              onChangeText={changeConfirm}
              value={confirmValue}
              mainTxtInp={[localStyles.PassTxt, focus2]}
              text={'Confirm Password'}
              isSecure={true}
            />
          </View>
        </KeyBoardAvoidWrapper>
        <CButton
          text={'Create new password'}
          ParentLoginBtn={localStyles.CButton}
          onPress={moveToSign}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.flex,
    backgroundColor: colors.white,
  },
  NewPassTxt: {
    ...styles.mt30,
  },
  passWarningTxt: {
    ...styles.mt20,
  },
  PassTxt: {
    borderWidth: moderateScale(1),
    ...styles.mt20,
  },
  CButton: {
    ...styles.mb30,
  },
  outerMainContainer: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
});
