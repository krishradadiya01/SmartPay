import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import images from '../Assets/Images/index';
import {moderateScale} from '../Common/constant';
import {styles} from '../Themes';
import {StackNav} from '../Navigation/navigationKeys';

const Splash = props => {
  setTimeout(() => {
    props.navigation.navigate(StackNav.OnBoardingScreen);
  }, 1500);

  return (
    <View style={localStyles.ParentSplash}>
      <Image style={localStyles.SplashStyle} source={images.logo} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  ParentSplash: {
    ...styles.flex,
    ...styles.center,
  },
  SplashStyle: {
    width: moderateScale(148),
    height: moderateScale(130),
  },
});
export default Splash;
