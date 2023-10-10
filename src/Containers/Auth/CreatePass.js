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

export default function CreatePass({navigation}) {
  const [changeValue, setChangeValue] = useState(changeValue);
  const [confirmValue, setConfirmValue] = useState(confirmValue);

  const moveToVerify = () => {
    navigation.navigate(AuthNav.VerifyIdentity);
  };

  const changeText = txt => {
    setChangeValue(txt);
  };

  const changeConfirm = txt => {
    setConfirmValue(txt);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={moveToVerify} />
        <CText type={'B24'} style={localStyles.NewPassTxt}>
          {strings.CreateNewPass}
        </CText>
        <CText style={localStyles.passWarningTxt}>
          {strings.PasswordWarning}
        </CText>

        <CTextInput
          onChangeText={changeText}
          value={changeValue}
          mainTxtInp={localStyles.PassTxt}
          text={'Password'}
          isSecure={true}
        />

        <CTextInput
          onChangeText={changeConfirm}
          value={confirmValue}
          mainTxtInp={localStyles.PassTxt}
          text={'Confirm Password'}
          isSecure={true}
        />
      </View>

      <CButton
        text={'Create new password'}
        ParentLoginBtn={localStyles.CButton}
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
  NewPassTxt: {
    ...styles.mt30,
  },
  passWarningTxt: {
    ...styles.mt20,
  },
  PassTxt: {
    ...styles.mt20,
  },
  CButton: {
    ...styles.mb30,
  },
});
