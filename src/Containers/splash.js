import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import images from '../Assets/Images/index';
import {moderateScale} from '../Common/constant';
import {styles} from '../Themes';
import {StorageValue} from '../Utils/asyncStorage';
import {StackNav} from '../Navigation/navigationKeys';
import {colors} from '../Themes/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      asyncProcess();
    }, 1500);
  });

  const asyncProcess = async () => {
    try {
      let Data = await StorageValue();
      if (Data) {
        let {OnBoardingDataValue, authDataValue} = Data;
        if (!!authDataValue) {
          navigation.navigate(StackNav.OnBoarding);
        } else if (!!OnBoardingDataValue) {
          navigation.navigate(StackNav.AuthNavigation);
        } else {
          navigation.navigate(StackNav.OnBoarding);
        }
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={localStyles.ParentSplash}>
      <Image style={localStyles.SplashStyle} source={images.logo} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  ParentSplash: {
    backgroundColor: colors.white,
    ...styles.flex,
    ...styles.center,
  },
  SplashStyle: {
    width: moderateScale(148),
    height: moderateScale(130),
  },
});
export default Splash;
