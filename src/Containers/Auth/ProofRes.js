import {StyleSheet, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {Card, DigDoc, Identity, Passport} from '../../Assets/Svgs';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import Countries from '../../Components/modals/Countries';
import Material from 'react-native-vector-icons/MaterialIcons';
import {AuthNav} from '../../Navigation/navigationKeys';
import {US} from '../../Assets/Svgs';

export default function ProofRes({navigation}) {
  const Change = useRef(null);
  const [country, SetCountry] = useState('');

  const selectedCountry = itm => {
    SetCountry(itm);
  };

  const showCountry = () => {
    Change.current?.show();
  };

  const moveToCard = () => {
    navigation.navigate(AuthNav.CardOnBoarding);
  };

  const backToFace = () => {
    navigation.navigate(AuthNav.FaceIdentity);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={backToFace} />
        <CText type={'B24'} style={localStyles.ProofResTxt}>
          {strings.ProofOfRes}
        </CText>
        <CText>{strings.ProveLive}</CText>

        <View style={localStyles.mainNation}>
          <CText type={'B18'} color={colors.silver}>
            {strings.Nationality}
          </CText>

          <View style={localStyles.mainBox}>
            {!!country ? (
              <CText type={'B18'} style={localStyles.USTxtStyle}>
                {country?.svgIcon}
                {country?.FullName}
              </CText>
            ) : (
              <View style={localStyles.ViewOfFlag}>
                <US />
                <CText type={'B18'} style={localStyles.USTxtStyle}>
                  {strings.America}
                </CText>
              </View>
            )}

            <TouchableOpacity
              style={localStyles.mainChange}
              onPress={showCountry}>
              <CText color={colors.SignUpTxt} type={'B16'}>
                {strings.Change}
              </CText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={localStyles.mainMethod}>
        <CText type={'B18'} color={colors.silver} style={localStyles.MethodTxt}>
          {strings.MethodVer}
        </CText>
        <View style={localStyles.mainBoxes}>
          <TouchableOpacity style={localStyles.parentPass} onPress={moveToCard}>
            <View style={localStyles.parentPassAndTxt}>
              <Passport />
              <CText type={'B16'} style={localStyles.PassTxt}>
                {strings.PassPort}
              </CText>
            </View>
            <View>
              <Material name={'navigate-next'} size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={localStyles.parentPass} onPress={moveToCard}>
            <View style={localStyles.parentPassAndTxt}>
              <Card />
              <CText type={'B16'} style={localStyles.PassTxt}>
                {strings.IdeCard}
              </CText>
            </View>
            <View>
              <Material name={'navigate-next'} size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={localStyles.parentPass} onPress={moveToCard}>
            <View style={localStyles.parentPassAndTxt}>
              <DigDoc />
              <CText type={'B16'} style={localStyles.PassTxt}>
                {strings.DigDoc}
              </CText>
            </View>
            <View>
              <Material name={'navigate-next'} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Countries sheetRef={Change} selectedCountry={selectedCountry} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  ProofResTxt: {
    ...styles.mv20,
  },
  mainBox: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    ...styles.mt10,
    ...styles.pl20,
    backgroundColor: colors.GreyScale,
    height: moderateScale(56),
    borderRadius: moderateScale(16),
  },
  USTxtStyle: {
    ...styles.pl15,
  },
  mainChange: {
    ...styles.pr15,
  },
  ViewOfFlag: {
    ...styles.flexRow,
  },
  mainNation: {
    ...styles.mv50,
  },
  mainBoxes: {
    ...styles.mv10,
    borderRadius: moderateScale(16),
    borderColor: colors.silver,
    borderWidth: moderateScale(1),
    backgroundColor: colors.GreyScale,
  },
  parentPass: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    ...styles.pv25,
    borderRadius: moderateScale(16),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.silver,
  },
  parentPassAndTxt: {
    ...styles.rowCenter,
    ...styles.pl10,
  },
  PassTxt: {
    ...styles.pl10,
  },
  mainMethod: {
    ...styles.mb180,
  },
});
