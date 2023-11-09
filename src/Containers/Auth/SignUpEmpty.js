import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {colors} from '../../Themes/colors';
import CTextInput from '../../Components/Common/CTextInput';
import CButton from '../../Components/Common/CButton';
import {moderateScale} from '../../Common/constant';
import images from '../../Assets/Images/index';
import {AuthNav} from '../../Navigation/navigationKeys';
import KeyBoardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';

const BlurStyle = {
  borderColor: colors.white,
};

const FocusStyle = {
  borderColor: colors.numbersColor,
};

export default function SignUpEmpty({navigation}) {
  const [change, setChange] = useState(change);
  const [focus, setFocus] = useState(BlurStyle);
  const [focus2, setFocus2] = useState(BlurStyle);
  const [focus3, setFocus3] = useState(BlurStyle);

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

  const onFocus3 = () => {
    onFocusInput(setFocus3);
  };

  const onBlur3 = () => {
    onBlurInput(setFocus3);
  };

  const onFocusInput = onHighlight => {
    onHighlight(FocusStyle);
  };
  const onBlurInput = onHighlight => {
    onHighlight(BlurStyle);
  };

  const onChangeTxt = txt => {
    setChange(txt);
  };

  const moveToCountry = () => {
    navigation.navigate(AuthNav.CountryRes);
  };

  const backToSignIn = () => {
    navigation.navigate(AuthNav.SignInEmpty);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View style={localStyles.outerMainContainer}>
        <KeyBoardAvoidWrapper>
          <View>
            <CBackButton onPress={backToSignIn} />
            <CText
              color={colors.black}
              type={'B24'}
              style={localStyles.mainTxt}>
              {strings.CreateAcc}
              <CText color={colors.black} style={localStyles.smartPay}>
                {strings.SmartPay}
              </CText>
            </CText>
            <CText color={colors.black} type={'B24'}>
              {strings.acc}
            </CText>

            <View style={localStyles.threeEle}>
              <CTextInput
                mainTxtInp={[localStyles.border, focus]}
                onFocus={onFocus}
                onBlur={onBlur}
                text={'Full name'}
              />
              <CTextInput
                mainTxtInp={[localStyles.border, focus2]}
                onFocus={onFocus2}
                onBlur={onBlur2}
                text={'email'}
              />
              <CTextInput
                mainTxtInp={[localStyles.border, focus3]}
                onFocus={onFocus3}
                onBlur={onBlur3}
                text={'password'}
                value={change}
                onChangeText={onChangeTxt}
                isSecure={true}
              />
            </View>

            <CButton text={'Sign Up'} onPress={moveToCountry} />

            <View style={localStyles.parentOr}>
              <View style={localStyles.firstLine} />
              <CText color={colors.black} style={localStyles.OrTxt}>
                {strings.or}
              </CText>
              <View style={localStyles.firstLine} />
            </View>

            <View style={localStyles.mainSocial}>
              <TouchableOpacity style={localStyles.parentGoogle}>
                <Image source={images.Google} style={localStyles.google} />
              </TouchableOpacity>

              <TouchableOpacity style={localStyles.parentGoogle}>
                <Image source={images.Apple} style={localStyles.Apple} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyBoardAvoidWrapper>
        <CText
          color={colors.black}
          type={'B14'}
          align={'center'}
          style={localStyles.AlreadyTxt}>
          {strings.AlreadyAcc}
          <CText
            type={'B16'}
            color={colors.black}
            style={localStyles.SignInTxt}
            onPress={backToSignIn}>
            {strings.SignIn}
          </CText>
        </CText>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex,
  },
  smartPay: {
    color: colors.SignUpTxt,
  },
  mainTxt: {
    ...styles.mt30,
  },
  parentOr: {
    ...styles.center,
    ...styles.flexRow,
  },
  firstLine: {
    width: moderateScale(133),
    height: moderateScale(1),
    backgroundColor: colors.google,
  },
  OrTxt: {
    ...styles.ph20,
    ...styles.pv40,
  },
  mainSocial: {
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  parentGoogle: {
    width: moderateScale(155),
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(1),
    borderColor: colors.google,
    ...styles.center,
  },
  google: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  Apple: {
    width: moderateScale(20),
    height: moderateScale(24),
  },
  AlreadyTxt: {
    ...styles.mb40,
  },
  SignInTxt: {
    color: colors.SignUpTxt,
  },
  threeEle: {
    ...styles.mv10,
    gap: moderateScale(15),
  },
  border: {
    backgroundColor: colors.GreyScale,
    borderWidth: moderateScale(1),
  },
  outerMainContainer: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
});
