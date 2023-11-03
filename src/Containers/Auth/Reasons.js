import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {
  Beach,
  Bolt,
  Business,
  Creditcard,
  PieChart,
  Users,
} from '../../Assets/Svgs';
import {moderateScale} from '../../Common/constant';
import {colors} from '../../Themes/colors';
import CButton from '../../Components/Common/CButton';
import {AuthNav} from '../../Navigation/navigationKeys';

export default function Reasons({navigation}) {
  const moveToCreatePin = () => {
    navigation.navigate(AuthNav.CreatePin);
  };

  const backToCountry = () => {
    navigation.navigate(AuthNav.CountryRes);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={backToCountry} />
        <CText color={colors.black} type={'B24'} style={localStyles.reasonsTxt}>
          {strings.MainReason}
        </CText>
        <CText color={colors.black} style={localStyles.knowReasonTxt}>
          {strings.KnowReasons}
        </CText>
        <View style={localStyles.mainBoxes}>
          <View style={localStyles.PieChartMain}>
            <PieChart style={localStyles.PieChartStyle} />
            <CText
              color={colors.black}
              type={'B14'}
              style={localStyles.spendDailyTxt}>
              {strings.SpendDaily}
            </CText>
          </View>
          <View style={localStyles.BoltMain}>
            <Bolt style={localStyles.PieChartStyle} />
            <CText
              color={colors.black}
              type={'B14'}
              style={localStyles.fastTransTxt}>
              {strings.FastTrans}
            </CText>
          </View>
          <View style={localStyles.BoltMain}>
            <Users style={localStyles.PieChartStyle} />
            <CText
              color={colors.black}
              type={'B14'}
              style={localStyles.fastTransTxt}>
              {strings.PaymentFriends}
            </CText>
          </View>
          <View style={localStyles.PieChartMain}>
            <Creditcard style={localStyles.PieChartStyle} />
            <CText
              color={colors.black}
              type={'B14'}
              style={localStyles.spendDailyTxt}>
              {strings.OnlinePayment}
            </CText>
          </View>
          <View style={localStyles.BoltMain}>
            <Beach style={localStyles.PieChartStyle} />
            <CText
              color={colors.black}
              type={'B14'}
              style={localStyles.fastTransTxt}>
              {strings.PaymentFriends}
            </CText>
          </View>
          <View style={localStyles.BoltMain}>
            <Business style={localStyles.PieChartStyle} />
            <CText
              color={colors.black}
              type={'B14'}
              style={localStyles.fastTransTxt}>
              {strings.PaymentFriends}
            </CText>
          </View>
        </View>
      </View>

      <CButton
        ParentLoginBtn={localStyles.CButtonMain}
        onPress={moveToCreatePin}
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
  reasonsTxt: {
    ...styles.mt30,
  },
  knowReasonTxt: {
    ...styles.mt15,
  },
  PieChartMain: {
    width: moderateScale(156),
    height: moderateScale(108),
    backgroundColor: colors.black,
    borderRadius: moderateScale(16),
    ...styles.mv20,
  },
  BoltMain: {
    width: moderateScale(156),
    height: moderateScale(108),
    borderRadius: moderateScale(16),
    ...styles.mv20,
    borderWidth: moderateScale(1),
    borderColor: colors.silver,
  },
  mainBoxes: {
    ...styles.flex,
    ...styles.flexRow,
    flexWrap: 'wrap',
    ...styles.justifyBetween,
    ...styles.mt10,
  },
  PieChartStyle: {
    ...styles.mh20,
    ...styles.mv15,
  },
  spendDailyTxt: {
    color: colors.white,
    width: moderateScale(100),
    ...styles.pl20,
    ...styles.mb15,
  },
  fastTransTxt: {
    width: moderateScale(100),
    ...styles.pl20,
    ...styles.mb15,
  },
  CButtonMain: {
    ...styles.mb30,
  },
});
