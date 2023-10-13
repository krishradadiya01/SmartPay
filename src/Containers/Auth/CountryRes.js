import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

// Local imports
import {styles} from '../../Themes';
import CBackButton from '../../Components/Common/CBackButton';
import CText from '../../Components/Common/CText';
import {colors} from '../../Themes/colors';
import Countries from '../../Components/modals/Countries';
import strings from '../../I18n/mergeString';
import {moderateScale} from '../../Common/constant';
import Feathers from 'react-native-vector-icons/FontAwesome';
import {US} from '../../Assets/Svgs';
import CButton from '../../Components/Common/CButton';
import {AuthNav} from '../../Navigation/navigationKeys';

export default function CountryRes({navigation}) {
  const Choose = useRef(null);
  const [country, SetCountry] = useState('');

  const selectedCountry = itm => {
    SetCountry(itm);
  };

  const moveToModel = () => {
    Choose.current?.show();
  };

  const backToSignUp = () => {
    navigation.navigate(AuthNav.SignUpEmpty);
  };

  const moveToReasons = () => {
    navigation.navigate(AuthNav.Reasons);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={backToSignUp} />
        <CText style={localStyles.CountryResTxt} type={'B24'}>
          {strings.CountryOfRes}
        </CText>
        <CText style={localStyles.selectCountryTxt}>
          {strings.SelectCountry}
        </CText>

        <TouchableOpacity onPress={moveToModel} style={localStyles.mainBox}>
          <View style={localStyles.UsStyle}>
            {!!country ? (
              <CText type={'B18'} style={localStyles.USTxt}>
                {country?.svgIcon}
                {country?.FullName}
              </CText>
            ) : (
              <View style={localStyles.ViewOfInitial}>
                <US />
                <CText type={'B18'} style={localStyles.USTxtStyle}>
                  {strings.America}
                </CText>
              </View>
            )}
          </View>
          <Feathers
            name={'angle-down'}
            style={localStyles.angleButton}
            size={24}
          />
        </TouchableOpacity>

        <Countries sheetRef={Choose} selectedCountry={selectedCountry} />
      </View>
      <CButton
        ParentLoginBtn={localStyles.ParentCButton}
        onPress={moveToReasons}
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
  CountryResTxt: {
    ...styles.mt30,
  },
  selectCountryTxt: {
    ...styles.mt15,
  },
  parentButton: {
    backgroundColor: colors.GreyScale,
  },
  ChildButton: {
    color: colors.black,
  },
  mainBox: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    ...styles.mt40,
    ...styles.pl20,
    backgroundColor: colors.GreyScale,
    height: moderateScale(56),
    borderRadius: moderateScale(16),
  },
  USTxt: {
    ...styles.pl15,
  },
  UsStyle: {
    ...styles.flexRow,
  },
  angleButton: {
    ...styles.pr10,
  },
  ViewOfInitial: {
    ...styles.rowCenter,
  },
  USTxtStyle: {
    ...styles.pl15,
  },
  parentMain: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  ParentCButton: {
    ...styles.mb30,
  },
});