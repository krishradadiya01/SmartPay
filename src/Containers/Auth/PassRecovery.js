import {StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

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
import {AuthNav} from '../../Navigation/navigationKeys';
import KeyBoardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';
import CHeader from '../../Components/Common/CHeader';

const BlurStyle = {
  borderColor: colors.white,
};

const FocusStyle = {
  borderColor: colors.numbersColor,
};

export default function PassRecovery({navigation}) {
  const [focus, setFocus] = useState(BlurStyle);

  const onFocus = () => {
    onFocusInput(setFocus);
  };

  const onBlur = () => {
    onBlurInput(setFocus);
  };

  const onFocusInput = onHighlight => {
    onHighlight(FocusStyle);
  };

  const onBlurInput = onHighlight => {
    onHighlight(BlurStyle);
  };

  const moveToVerify = () => navigation.navigate(AuthNav.VerifyIdentity);

  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper containerStyle={localStyles.keyBoardSty}>
        <View style={[styles.flex, styles.justifyBetween]}>
          <CHeader />
          <Lock style={localStyles.lock} />
          <CText
            color={colors.black}
            type={'B24'}
            style={localStyles.PassRecTxt}>
            {strings.PassRecovery}
          </CText>
          <CText
            color={colors.black}
            type={'R16'}
            style={localStyles.enterRegEmail}>
            {strings.enterRegEmail}
          </CText>
          <CTextInput
            onFocus={onFocus}
            onBlur={onBlur}
            textInputStyle={localStyles.TxtInp}
            mainTxtInp={[localStyles.ParentTxtInp, focus]}
            text={'Enter your email address'}
          />
        </View>
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
  },
  TxtInp: {
    ...typography.fontWeights.SemiBold,
  },
  ParentEmail: {
    width: moderateScale(333),
    ...styles.mb30,
  },
  keyBoardSty: {
    ...styles.justifyBetween,
    ...styles.ph20,
    ...styles.flexGrow1,
  },
});
