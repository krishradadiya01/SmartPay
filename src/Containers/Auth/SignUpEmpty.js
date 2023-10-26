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

export default function SignUpEmpty({navigation}) {
  const [change, setChange] = useState(change);

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
      <View>
        <CBackButton onPress={backToSignIn} />
        <CText type={'B24'} style={localStyles.mainTxt}>
          {strings.CreateAcc}
          <CText style={localStyles.smartPay}>{strings.SmartPay}</CText>
        </CText>
        <CText type={'B24'}>{strings.acc}</CText>
        <CTextInput text={'Full name'} />
        <CTextInput text={'email'} />
        <CTextInput
          text={'password'}
          value={change}
          onChangeText={onChangeTxt}
          isSecure={true}
        />
        <CButton text={'Sign Up'} onPress={moveToCountry} />

        <View style={localStyles.parentOr}>
          <View style={localStyles.firstLine} />
          <CText style={localStyles.OrTxt}>{strings.or}</CText>
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

      <CText align={'center'} style={localStyles.AlreadyTxt}>
        {strings.AlreadyAcc}
        <CText
          type={'B16'}
          style={localStyles.SignInTxt}
          onPress={backToSignIn}>
          {strings.SignIn}
        </CText>
      </CText>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
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
    backgroundColor: colors.silver,
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
    backgroundColor: colors.google,
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
    ...styles.mb10,
  },
  SignInTxt: {
    color: colors.SignUpTxt,
  },
});
