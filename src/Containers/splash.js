import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

// Local imports
import images from '../Assets/Images/index';
import {moderateScale} from '../Common/constant';
import {styles} from '../Themes';
import {StorageValue} from '../Utils/asyncStorage';
import {StackNav} from '../Navigation/navigationKeys';
import {colors} from '../Themes/colors';
import SplashScreen from 'react-native-splash-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
    asyncProcess();
  }, []);

  const asyncProcess = async () => {
    try {
      let Data = await StorageValue();
      if (Data) {
        let {OnBoardingDataValue, authDataValue} = Data;
        if (!!authDataValue) {
          navigation.replace(StackNav.TabNavigation);
        } else if (!!OnBoardingDataValue) {
          navigation.replace(StackNav.AuthNavigation);
        } else {
          navigation.replace(StackNav.OnBoarding);
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
