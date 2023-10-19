import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feathers from 'react-native-vector-icons/FontAwesome';

// Local imports
import CHeader from '../Common/CHeader';
import {styles} from '../../Themes/index';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import {colors} from '../../Themes/colors';

export default function TopUpScreen() {
  return (
    <SafeAreaView style={localStyles.main}>
      <CHeader text={'Top Up'} />
      <TouchableOpacity style={localStyles.parentDebit}>
        <Image source={images.card3} style={localStyles.ImageSty} />
        <View style={localStyles.innerContainer}>
          <CText
            color={colors.tabColor}
            type={'B18'}
            style={localStyles.debitTxt}>
            {strings.Debit}
          </CText>
          <CText type={'B18'}>{strings.RealDollars}</CText>
        </View>
        <Feathers
          name={'angle-down'}
          style={localStyles.angleButton}
          size={24}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
  },
  ImageSty: {
    width: moderateScale(42),
    height: moderateScale(24),
  },
  parentDebit: {
    ...styles.mv30,
    backgroundColor: colors.GreyScale,
    ...styles.flexRow,
    borderWidth: moderateScale(1),
    borderColor: colors.silver,
    borderRadius: moderateScale(16),
    ...styles.alignCenter,
    ...styles.p15,
  },
  debitTxt: {
    ...styles.pl15,
  },
  innerContainer: {
    ...styles.flex,
    ...styles.rowSpaceBetween,
  },
  angleButton: {
    ...styles.pl10,
  },
});
