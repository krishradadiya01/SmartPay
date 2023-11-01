import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

// Local imports
import {styles} from '../../Themes';
import strings from '../../I18n/mergeString';
import {Lock} from '../../Assets/Svgs';
import CText from '../../Components/Common/CText';
import {moderateScale} from '../../Common/constant';
import CTextInput from '../../Components/Common/CTextInput';
import {colors} from '../../Themes/colors';
import typography from '../../Themes/typography';
import CButton from '../../Components/Common/CButton';
import KeyBoardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';
import {AuthNav} from '../../Navigation/navigationKeys';

export default function PassRecovery({navigation}) {
  const moveToVerify = () => navigation.navigate(AuthNav.VerifyIdentity);

  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <Lock style={localStyles.lock} />
        <CText type={'B24'} style={localStyles.PassRecTxt}>
          {strings.PassRecovery}
        </CText>
        <CText type={'R16'} style={localStyles.enterRegEmail}>
          {strings.enterRegEmail}
        </CText>
        <CTextInput
          textInputStyle={localStyles.TxtInp}
          mainTxtInp={localStyles.ParentTxtInp}
          text={'Enter your email address'}
        />
      </KeyBoardAvoidWrapper>
      <CButton
        text={'Send me email'}
        onPress={moveToVerify}
        ParentLoginBtn={localStyles.ParentEmail}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.pl20,
    ...styles.justifyBetween,
    ...styles.mainContainerSurface,
  },
  lock: {
    ...styles.mt35,
  },
  PassRecTxt: {
    ...styles.mt40,
  },
  enterRegEmail: {
    width: moderateScale(300),
    ...styles.mt20,
  },
  ParentTxtInp: {
    ...styles.mt20,
    width: moderateScale(333),
    borderWidth: moderateScale(1),
    borderColor: colors.skyBlue,
  },
  TxtInp: {
    ...typography.fontWeights.SemiBold,
  },
  ParentEmail: {
    width: moderateScale(333),
    borderRadius: moderateScale(16),
    ...styles.mb30,
  },
});
