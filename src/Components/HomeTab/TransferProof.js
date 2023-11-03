import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

// Local imports
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../Themes';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {colors} from '../../Themes/colors';
import CButton from '../Common/CButton';
import {StackNav} from '../../Navigation/navigationKeys';
import CHeader from '../Common/CHeader';

export default function TransferProof({route, navigation}) {
  const {amount} = route.params;

  const backToHome = () => {
    navigation.navigate(StackNav.TabNavigation);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CHeader />
        <View style={localStyles.parentImg}>
          <Image
            source={images.Congratulation}
            style={localStyles.congratsImg}
          />
        </View>
        <CText
          color={colors.black}
          style={localStyles.successTxt}
          type={'B24'}
          align={'center'}>
          {strings.TransSuccess}
        </CText>
        <CText
          color={colors.black}
          style={localStyles.NoticeTxt}
          type={'R14'}
          align={'center'}>
          {strings.SuccessNotice}
        </CText>
        <View style={localStyles.parentAmount}>
          <CText
            color={colors.black}
            align={'center'}
            type={'B32'}
            style={localStyles.amountTxt}>
            {'$' + parseFloat(amount).toFixed(2)}
          </CText>
        </View>
      </View>
      <CButton
        text={'Back to Home'}
        containerStyle={localStyles.cButton}
        onPress={backToHome}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.justifyBetween,
    backgroundColor: colors.white,
  },
  congratsImg: {
    width: moderateScale(258),
    height: moderateScale(218),
  },
  parentImg: {
    ...styles.alignCenter,
  },
  successTxt: {
    ...styles.mt50,
  },
  NoticeTxt: {
    ...styles.mv20,
  },
  amountTxt: {
    ...styles.ph24,
    ...styles.pv16,
  },
  parentAmount: {
    ...styles.mt40,
    backgroundColor: colors.GreyScale,
    ...styles.selfCenter,
    borderRadius: moderateScale(16),
  },
  cButton: {
    ...styles.mb25,
  },
});
