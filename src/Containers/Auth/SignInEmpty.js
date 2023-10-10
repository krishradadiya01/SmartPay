import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
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
import CBackButton from '../../Components/Common/CBackButton';

export default function SignUpEmpty({navigation}) {
  const [changeValue, setChangeValue] = useState(changeValue);

  const backTo = () => {
    navigation.navigate(StackNav.onBoarding);
  };

  const changeText = txt => {
    setChangeValue(txt);
  };

  const moveToPassRec = () => {
    navigation.navigate(AuthNav.PassRecovery);
  };

  return (
    <View style={localStyles.mainParent}>
      <View>
        <SafeAreaView>
          <CBackButton onPress={backTo} />
          <CText style={localStyles.hiText} type={'B24'}>
            {strings.Hi}
          </CText>

          <CText style={localStyles.welcomeText} type={'R16'}>
            {strings.WelcomeBack}
          </CText>

          <CTextInput text={'Email'} />
          <CTextInput
            onChangeText={changeText}
            value={changeValue}
            mainTxtInp={localStyles.PassTxt}
            text={'Password'}
            isSecure={true}
          />

          <TouchableOpacity onPress={moveToPassRec}>
            <CText
              type={'B16'}
              color={colors.forgot}
              style={localStyles.forgotPassTxt}>
              {strings.forgotPass}
            </CText>
          </TouchableOpacity>
        </SafeAreaView>

        <CButton text={'Sign In'} ParentLoginBtn={localStyles.ParentSignIn} />

        <View style={localStyles.mainOr}>
          <View style={localStyles.firstLine} />
          <CText type={'M14'} style={localStyles.orTxt}>
            {strings.or}
          </CText>
          <View style={localStyles.firstLine} />
        </View>

        <View style={localStyles.mainButton}>
          <TouchableOpacity style={localStyles.mainGoogle}>
            <Image style={localStyles.GoogleStyle} source={images.Google} />
          </TouchableOpacity>

          <TouchableOpacity style={localStyles.mainApple}>
            <Image style={localStyles.AppleStyle} source={images.Apple} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={localStyles.NoHaveAcc}>
        <CText type={'B16'}>{strings.NoHaveAcc}</CText>
        <TouchableOpacity>
          <CText type={'B16'} style={localStyles.SignUpTxt}>
            {strings.SignUp}
          </CText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainParent: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  hiText: {
    ...styles.mt25,
  },
  welcomeText: {
    ...styles.mt10,
  },
  PassTxt: {
    ...styles.mt20,
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
    backgroundColor: colors.silver,
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
    backgroundColor: colors.google,
    borderWidth: moderateScale(1),
    borderColor: colors.googleBorder,
    ...styles.center,
  },
  AppleStyle: {
    width: moderateScale(20),
    height: moderateScale(24),
  },
  mainApple: {
    width: moderateScale(155),
    height: moderateScale(56),
    backgroundColor: colors.google,
    borderWidth: moderateScale(1),
    borderColor: colors.googleBorder,
    ...styles.center,
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
});
