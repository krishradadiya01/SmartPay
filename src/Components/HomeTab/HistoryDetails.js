import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

// Local imports
import CHeader from '../Common/CHeader';
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import images from '../../Assets/Images/index';
export default function HistoryDetails() {
  const RightIcon = () => {
    return (
      <TouchableOpacity style={localStyles.parentMore}>
        <Feather name={'more-horizontal'} size={20} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <CHeader title={'Spotify'} rightIcon={<RightIcon />} />

  
        <View style={localStyles.mainView}>
          <View style={localStyles.mainPayment}>
            <CText type={'B24'}>{strings.Amount}</CText>
            <CText>
              <CText color={colors.red}> {strings.ThreeFive}</CText>
              {strings.ago}
            </CText>
          </View>

          <View style={localStyles.outerComponent}>
            <Image source={images.graph} style={localStyles.imgSty} />
            <Image source={images.graph2} style={localStyles.imgSty} />
          </View>
        </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
  },
  parentMore: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderWidth: moderateScale(1),
    borderColor: colors.silver,
    ...styles.p10,
    borderRadius: moderateScale(12),
  },
  spotifyTxt: {
    ...styles.ph20,
  },
  mainPayment: {
    ...styles.mv20,
    gap: moderateScale(5),
  },
  imgSty: {
    width: moderateScale(32),
    height: moderateScale(32),
  },
  parentImages: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  mainView: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.alignCenter,
  },
  outerComponent: {
    ...styles.flexRow,
    gap: moderateScale(10),
  },
});
