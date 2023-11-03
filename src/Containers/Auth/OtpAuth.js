import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import {AuthNav} from '../../Navigation/navigationKeys';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {moderateScale} from '../../Common/constant';
import {colors} from '../../Themes/colors';
import typography from '../../Themes/typography';
import CButton from '../../Components/Common/CButton';

export default function ItsYou({navigation}) {
  const [otp, setOtp] = useState('');

  const onOtpChange = otp => setOtp(otp);

  const moveToBack = () => navigation.navigate(AuthNav.SignInEmpty);

  const moveToCreatePass = () => navigation.navigate(AuthNav.CreatePass);

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={moveToBack} />
        <CText color={colors.black} style={localStyles.VerifyTxt} type={'B24'}>
          {strings.VerifyItsYou}
        </CText>
        <CText color={colors.black} style={localStyles.EnterEmailTxt}>
          {strings.EnterEmail}
        </CText>
        <View style={localStyles.ParenOtp}>
          <OTPInputView
            style={localStyles.otpInputStyle}
            pinCount={5}
            code={otp}
            onCodeChanged={onOtpChange}
            autoFocusOnLoad={false}
            codeInputFieldStyle={localStyles.underlineStyleBase}
          />
        </View>

        <TouchableOpacity style={localStyles.mainReset}>
          <CText type={'B16'} color={colors.SignUpTxt}>
            {strings.ResetCode}
          </CText>
        </TouchableOpacity>
      </View>

      <CButton
        ParentLoginBtn={localStyles.continue}
        onPress={moveToCreatePass}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  VerifyTxt: {
    ...styles.mt30,
  },
  EnterEmailTxt: {
    ...styles.mt20,
  },
  otpInputStyle: {
    height: moderateScale(50),
  },
  mainOtp: {
    ...styles.mt35,
  },
  underlineStyleBase: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    borderColor: colors.silver,
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f24,
    color: colors.black,
    borderColor: colors.SignUpTxt,
  },
  ParenOtp: {
    ...styles.mt35,
  },
  mainReset: {
    ...styles.center,
    ...styles.mt25,
  },
  continue: {
    ...styles.mb30,
  },
});
