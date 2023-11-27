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
import {validatePassword} from '../../Utils/validation';

const BlurStyle = {
  borderColor: colors.white,
};

const FocusStyle = {
  borderColor: colors.numbersColor,
};

export default function CreatePass({navigation}) {
  const [focus, setFocus] = useState(BlurStyle);
  const [focus2, setFocus2] = useState(BlurStyle);

  const [changeValue, setChangeValue] = useState('');
  const [message, setMessage] = useState('');

  const [password2, setPassword2] = useState('');
  const [message2, setMessage2] = useState(false);

  const nextButton = () => {
    if (changeValue !== password2) {
      setMessage2(strings.PasswordNotMatch);
    } else if (changeValue === '' && password2 === '') {
      setMessage2(strings.PleasePass);
    } else {
      navigation.navigate(AuthNav.SignInEmpty);
    }
  };

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
    const {msg} = validatePassword(txt);
    setChangeValue(txt);
    setMessage(msg);
  };

  const changeConfirm = txt => {
    setPassword2(txt);
    setMessage2('');
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

            {message ? <CText color={colors.red}>{message}</CText> : null}

            <CTextInput
              onFocus={onFocus2}
              onBlur={onBlur2}
              onChangeText={changeConfirm}
              value={password2}
              mainTxtInp={[localStyles.PassTxt, focus2]}
              text={'Confirm Password'}
              isSecure={true}
            />

            {message2 ? <CText color={colors.red}>{message2}</CText> : null}
          </View>
        </KeyBoardAvoidWrapper>
        <CButton
          text={'Create new password'}
          ParentLoginBtn={localStyles.CButton}
          onPress={nextButton}
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
