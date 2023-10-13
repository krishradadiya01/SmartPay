import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import React, {useState} from 'react';

// Local imports
import {styles} from '../../Themes';
import CBackButton from '../../Components/Common/CBackButton';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';
import {moderateScale} from '../../Common/constant';
import CButton from '../../Components/Common/CButton';
import {AuthNav} from '../../Navigation/navigationKeys';
import {launchImageLibrary} from 'react-native-image-picker';
import images from '../../Assets/Images/index';

export default function FaceIdentity({navigation}) {
  const [selectImage, setSelectImage] = useState('');

  const backToPin = () => {
    navigation.navigate(AuthNav.CreatePin);
  };

  const moveToProof = () => {
    navigation.navigate(AuthNav.ProofRes);
  };

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setSelectImage(response.assets[0].uri);
    });
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <View>
        <CBackButton onPress={backToPin} />
        <CText type={'B24'} style={localStyles.letsVerifyTxt}>
          {strings.LetsVerify}
        </CText>
        <CText>{strings.IdentityWarning}</CText>

        {!!selectImage ? (
          <View style={localStyles.parentGal}>
            <Image source={{uri: selectImage}} style={localStyles.gallImage} />
          </View>
        ) : (
          <View style={localStyles.parentImage}>
            <Image style={localStyles.scanImage} source={images.FaceScan} />
          </View>
        )}
      </View>

      <CButton
        text={'Choose Image'}
        ParentLoginBtn={localStyles.ParentCButton}
        onPress={() => {
          ImagePicker();
        }}
      />
      <CButton ParentLoginBtn={localStyles.CButtonTxt} onPress={moveToProof} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  letsVerifyTxt: {
    ...styles.mv25,
  },
  scanImage: {
    width: moderateScale(270),
    height: moderateScale(320),
  },
  parentImage: {
    ...styles.mt40,
    ...styles.alignCenter,
  },
  ParentCButton: {
    ...styles.mt40,
  },
  gallImage: {
    width: moderateScale(320),
    height: moderateScale(320),
  },
  parentGal: {
    ...styles.center,
    ...styles.mt30,
  },
  CButtonTxt: {
    ...styles.mb30,
  },
});
