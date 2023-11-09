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
      <View style={localStyles.outerMainContainer}>
        <View>
          <CBackButton onPress={backToReason} />
          <CText
            color={colors.black}
            type={'B24'}
            style={localStyles.yourPinTxt}>
            {strings.SetYourPin}
          </CText>
          <CText color={colors.black} style={localStyles.warningTxt}>
            {strings.PinWarning}
          </CText>
          <OTPInputView
            style={localStyles.otpInputStyle}
            pinCount={5}
            code={otp}
            onCodeChanged={onOtpChange}
            autoFocusOnLoad={false}
            secureTextEntry={true}
            codeInputFieldStyle={[localStyles.underlineStyleBase]}
          />
        </View>
        <CButton
          text={'Create PIN'}
          ParentLoginBtn={localStyles.mainCButton}
          onPress={moveToFace}
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
  yourPinTxt: {
    ...styles.mv30,
  },
  otpInputStyle: {
    height: moderateScale(50),
    ...styles.mt20,
  },
  underlineStyleBase: {
    width: moderateScale(56),
    height: moderateScale(66),
    color: colors.black,
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f32,
    borderWidth: moderateScale(0),
    borderBottomWidth: moderateScale(2),
    borderColor: colors.Primary,
  },
  mainCButton: {
    ...styles.mb30,
  },
  outerMainContainer: {
    ...styles.flex,
    ...styles.justifyBetween,
    ...styles.ph20,
  },
});
