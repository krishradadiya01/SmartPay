import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

// Local imports
import {styles} from '../../Themes';
import {Identity} from '../../Assets/Svgs';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import CButton from '../../Components/Common/CButton';
import {AuthNav} from '../../Navigation/navigationKeys';
import CHeader from '../../Components/Common/CHeader';

export default function VerifyIdentity({navigation}) {
  const moveToItsYou = () => {
    navigation.navigate(AuthNav.CreatePass);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CHeader />
        <Identity style={localStyles.imgStyle} />
        <CText color={colors.black} type={'B24'} style={localStyles.verIdeTxt}>
          {strings.VerifyIdentity}
        </CText>
        <CText color={colors.black} type={'R16'} style={localStyles.whereCode}>
          {strings.WhereCode}
          <CText type={'B16'} color={colors.SignUpTxt}>
            {strings.WhereCode2}
          </CText>
          <CText color={colors.black}>{strings.WhereCode3}</CText>
        </CText>
        <View style={localStyles.Email}>
          <View style={localStyles.mainView}>
            <Ionicons
              name={'checkmark-circle'}
              size={moderateScale(24)}
              color={colors.SignUpTxt}
            />
            <View style={localStyles.EmailTxt}>
              <CText color={colors.black} type={'B18'}>
                {strings.Email}
              </CText>
              <CText
                color={colors.black}
                type={'R16'}
                style={localStyles.RealEmail}>
                {strings.RealEmail}
              </CText>
            </View>
          </View>
          <Material
            name={'email-outline'}
            size={moderateScale(24)}
            color={colors.silver}
          />
        </View>
      </View>
      <CButton
        ParentLoginBtn={localStyles.ParentButton}
        onPress={moveToItsYou}
        text={'Continue'}
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
  imgStyle: {
    ...styles.mt35,
  },
  verIdeTxt: {
    ...styles.mt40,
  },
  whereCode: {
    ...styles.mt20,
  },
  mainView: {
    ...styles.rowCenter,
  },
  Email: {
    backgroundColor: colors.GreyScale,
    height: moderateScale(88),
    borderRadius: moderateScale(16),
    ...styles.mt40,
    ...styles.ph20,
    ...styles.rowSpaceBetween,
  },
  EmailTxt: {
    ...styles.pl20,
  },
  RealEmail: {
    ...styles.pt6,
  },
  ParentButton: {
    borderRadius: moderateScale(16),
    ...styles.mb30,
  },
});
