import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// Local imports
import CBackButton from '../../Components/Common/CBackButton';
import {styles} from '../../Themes';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import {AuthNav} from '../../Navigation/navigationKeys';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {colors} from '../../Themes/colors';

export default function CardStyle({navigation}) {
  const moveToNew = () => {
    navigation.navigate(AuthNav.NewCard);
  };

  const backToOnBoarding = () => {
    navigation.navigate(AuthNav.CardOnBoarding);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View style={styles.ph20}>
        <View style={localStyles.mainView}>
          <CBackButton onPress={backToOnBoarding} />
          <CText
            color={colors.black}
            type={'B18'}
            style={localStyles.ChooseStyleTxt}>
            {strings.ChooseStyle}
          </CText>
          <View></View>
          <View></View>
        </View>
        <TouchableOpacity onPress={moveToNew}>
          <Image style={localStyles.card1} source={images.card1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={moveToNew}>
          <Image style={localStyles.card1} source={images.card3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={moveToNew}>
          <Image style={localStyles.card1} source={images.card2} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.justifyBetween,
    ...styles.flex,
  },
  card1: {
    width: moderateScale(333),
    height: moderateScale(190),
    ...styles.mv20,
  },
  parentChoose: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  ChooseStyleTxt: {
    ...styles.alignCenter,
  },
  mainView: {
    ...styles.rowSpaceBetween,
    ...styles.alignCenter,
  },
});
