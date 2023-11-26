import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

// Local imports
import CText from '../../Components/Common/CText';
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import {AuthNav, StackNav} from '../../Navigation/navigationKeys';
import strings from '../../I18n/mergeString';
import CTextInput from '../../Components/Common/CTextInput';
import CButton from '../../Components/Common/CButton';
import {moderateScale} from '../../Common/constant';
import images from '../../Assets/Images/index';
import {authToken} from '../../Utils/asyncStorage';
import KeyBoardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';
import {validateEmail, validatePassword} from '../../Utils/validation';

const BlurStyle = {
  borderColor: colors.white,
};

const FocusStyle = {
  borderColor: colors.numbersColor,
};

export default function SignInEmpty({navigation}) {
  const [focus, setFocus] = useState(BlurStyle);
  const [focus2, setFocus2] = useState(BlurStyle);

  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const [changeValue, setChangeValue] = useState('');
  const [pass, setPass] = useState(false);

  const signIn = async () => {
    if (email === '' || showMessage || changeValue === '') {
      Alert.alert(strings.PleaseFill);
    } else {
      await authToken(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.TabNavigation}],
      });
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

  const changeText = txt => {
    const {msg} = validatePassword(txt);
    setChangeValue(txt);
    setPass(msg);
  };

  const moveToPassRec = () => {
    navigation.navigate(AuthNav.PassRecovery);
  };

  const moveToSignUp = () => {
    navigation.navigate(AuthNav.SignUpEmpty);
  };

  const setEmailFunction = item => {
    const {msg} = validateEmail(item);
    setEmail(item);
    setShowMessage(msg);
  };

  return (
    <SafeAreaView style={localStyles.mainParent}>
      <View style={localStyles.outerMainContainer}>
        <KeyBoardAvoidWrapper>
          <View>
            <SafeAreaView>
              <CText
                color={colors.black}
                style={localStyles.hiText}
                type={'B24'}>
                {strings.Hi}
              </CText>

              <CText
                color={colors.black}
                style={localStyles.welcomeText}
                type={'R16'}>
                {strings.WelcomeBack}
              </CText>

              <CTextInput
                value={email}
                onChangeText={setEmailFunction}
                onFocus={onFocus2}
                onBlur={onBlur2}
                mainTxtInp={[localStyles.PassTxt, focus2]}
                text={'Email'}
              />

              {showMessage ? (
                <CText color={colors.red}>{showMessage}</CText>
              ) : null}

              <CTextInput
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={changeText}
                value={changeValue}
                mainTxtInp={[localStyles.PassTxt, focus]}
                text={'Password'}
                isSecure={true}
              />

              {pass ? <CText color={colors.red}>{pass}</CText> : null}

              <TouchableOpacity
                style={localStyles.mainContainer}
                onPress={moveToPassRec}>
                <CText
                  type={'B16'}
                  color={colors.forgot}
                  style={localStyles.forgotPassTxt}>
                  {strings.forgotPass}
                </CText>
              </TouchableOpacity>
            </SafeAreaView>

            <CButton
              text={'Sign In'}
              ParentLoginBtn={localStyles.ParentSignIn}
              onPress={signIn}
            />

            <View style={localStyles.mainOr}>
              <View style={localStyles.firstLine} />
              <CText
                color={colors.black}
                type={'B14'}
                style={localStyles.orTxt}>
                {strings.or}
              </CText>
              <View style={localStyles.firstLine} />
            </View>

            <View style={localStyles.mainButton}>
              <TouchableOpacity style={localStyles.mainGoogle}>
                <Image style={localStyles.GoogleStyle} source={images.Google} />
              </TouchableOpacity>

              <TouchableOpacity style={localStyles.mainGoogle}>
                <Image style={localStyles.AppleStyle} source={images.Apple} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyBoardAvoidWrapper>
        <View style={localStyles.NoHaveAcc}>
          <CText color={colors.black} type={'B16'}>
            {strings.NoHaveAcc}
          </CText>

          <TouchableOpacity onPress={moveToSignUp}>
            <CText
              color={colors.black}
              type={'B16'}
              style={localStyles.SignUpTxt}>
              {strings.SignUp}
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  mainParent: {
    backgroundColor: colors.white,
    ...styles.flex,
  },
  hiText: {
    ...styles.mt25,
  },
  welcomeText: {
    ...styles.mv15,
  },
  PassTxt: {
    backgroundColor: colors.GreyScale,
    ...styles.mt20,
    borderWidth: moderateScale(1),
  },
  forgotPassTxt: {
    ...styles.mt30,
  },
  ParentSignIn: {
    ...styles.center,
    borderRadius: moderateScale(16),
    width: moderateScale(334),
  },
  mainOr: {
    ...styles.center,
    ...styles.flexRow,
  },
  firstLine: {
    width: moderateScale(133),
    height: moderateScale(1),
    backgroundColor: colors.google,
  },
  orTxt: {
    ...styles.ph20,
    ...styles.pv40,
  },
  GoogleStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  mainGoogle: {
    width: moderateScale(155),
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(1),
    borderColor: colors.google,
    ...styles.center,
  },
  AppleStyle: {
    width: moderateScale(20),
    height: moderateScale(24),
  },
  mainButton: {
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  NoHaveAcc: {
    ...styles.center,
    ...styles.mb40,
    ...styles.flexRow,
  },
  SignUpTxt: {
    color: colors.SignUpTxt,
    ...styles.ml5,
  },
  mainContainer: {
    width: '43%',
  },
  outerMainContainer: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
});
