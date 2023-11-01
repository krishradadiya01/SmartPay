import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {AuthNav} from '../../Navigation/navigationKeys';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {moderateScale} from '../../Common/constant';
import {colors} from '../../Themes/colors';
import typography from '../../Themes/typography';
import CButton from '../../Components/Common/CButton';

export default function CreatePin({navigation}) {
  const [otp, setOtp] = useState('');

  const moveToFace = () => {
    navigation.navigate(AuthNav.FaceIdentity);
  };

  const backToReason = () => {
    navigation.navigate(AuthNav.Reasons);
  };

  const onOtpChange = otp => setOtp(otp);

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={backToReason} />
        <CText type={'B24'} style={localStyles.yourPinTxt}>
          {strings.SetYourPin}
        </CText>
        <CText style={localStyles.warningTxt}>{strings.PinWarning}</CText>
        <OTPInputView
          style={localStyles.otpInputStyle}
          pinCount={5}
          code={otp}
          onCodeChanged={onOtpChange}
          autoFocusOnLoad={false}
          secureTextEntry={true}
          codeInputFieldStyle={localStyles.underlineStyleBase}
        />
      </View>
      <CButton
        text={'Create PIN'}
        ParentLoginBtn={localStyles.mainCButton}
        onPress={moveToFace}
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
  yourPinTxt: {
    ...styles.mv30,
  },
  otpInputStyle: {
    height: moderateScale(50),
    ...styles.mt40,
  },
  underlineStyleBase: {
    // ...styles.pt20,
    width: moderateScale(56),
    height: moderateScale(56),
    borderWidth: moderateScale(2),
    borderBottomColor: colors.numbersColor,
    borderColor: colors.GreyScale,
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f40,
    color: colors.black,
  },
  mainCButton: {
    ...styles.mb30,
  },
});
