import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import React from 'react';

// Local imports
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes';
import CText from '../../Components/Common/CText';
import CButton from '../../Components/Common/CButton';
import {AuthNav} from '../../Navigation/navigationKeys';
import {colors} from '../../Themes/colors';

export default function CardOnBoarding({navigation}) {
  const moveToStyle = () => {
    navigation.navigate(AuthNav.CardStyle);
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <Image style={localStyles.imgStyle} source={images.Cards} />
        <CText color={colors.black} type={'B32'} style={localStyles.cardTxt}>
          {strings.CreateCard}
        </CText>
        <CText color={colors.black} style={localStyles.detailsTxt}>
          {strings.CardDetail}
        </CText>
      </View>
      <CButton
        text={'Get Free Card'}
        ParentLoginBtn={localStyles.CButtonTxt}
        onPress={moveToStyle}
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
    width: moderateScale(288),
    height: moderateScale(351),
    ...styles.mt50,
    ...styles.center,
  },
  cardTxt: {
    ...styles.mt40,
  },
  detailsTxt: {
    ...styles.mt20,
  },
  CButtonTxt: {
    ...styles.mb30,
  },
});
