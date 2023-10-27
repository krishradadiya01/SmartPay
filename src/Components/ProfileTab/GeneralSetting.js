import {SafeAreaView, StyleSheet, View, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import Material from 'react-native-vector-icons/MaterialIcons';

// Local imports
import {styles} from '../../Themes/index';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import CHeader from '../Common/CHeader';
import {colors} from '../../Themes/colors';

export default function GeneralSetting() {
  const [close, open] = useState(false);
  const [close1, open1] = useState(false);
  const [close2, open2] = useState(false);

  const onchange = () => {
    open(!close);
  };
  const onchange1 = () => {
    open1(!close1);
  };
  const onchange2 = () => {
    open2(!close2);
  };

  const CommonCom = ({source, strings}) => {
    return (
      <View style={localStyles.parentContainer}>
        <Image source={source} style={localStyles.imgSty} />

        <View style={localStyles.outerComponent}>
          <CText type={'M14'}>{strings}</CText>
          <Material name={'navigate-next'} size={16} />
        </View>
      </View>
    );
  };

  const SettingComponent = ({name, subName, onchange, value}) => {
    return (
      <View style={localStyles.mainContainer}>
        <View style={localStyles.outerContainer}>
          <View style={{gap: moderateScale(8)}}>
            <CText type={'M14'}>{name}</CText>
            <CText
              type={'R12'}
              color={colors.tabColor}
              style={localStyles.lineTxt}>
              {subName}
            </CText>
          </View>

          <Switch
            trackColor={{true: colors.Toggle}}
            value={value}
            onChange={onchange}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View style={styles.mh20}>
        <CHeader title={'General Setting'} />
        <CommonCom source={images.Notification} strings={strings.DNA} />
        <CommonCom source={images.Setting} strings={strings.MangeNot} />
        <View style={localStyles.line} />

        <SettingComponent
          value={close}
          onchange={onchange}
          name={strings.DNA}
          subName={strings.DNALine}
        />
        <SettingComponent
          value={close1}
          onchange={onchange1}
          name={strings.BillCal}
          subName={strings.BillCalLine}
        />
        <SettingComponent
          value={close2}
          onchange={onchange2}
          name={strings.CScoreCalendar}
          subName={strings.CScoreCalendarLine}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    height: '100%',
  },
  imgSty: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  parentContainer: {
    ...styles.mt40,
    ...styles.flexRow,
    ...styles.alignCenter,
    gap: moderateScale(15),
  },
  outerComponent: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  line: {
    ...styles.mv22,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.bottomBorder,
  },
  lineTxt: {
    width: moderateScale(210),
  },
  outerContainer: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  mainContainer: {
    ...styles.mv20,
  },
});
