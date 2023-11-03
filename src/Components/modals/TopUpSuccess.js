import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {useNavigation} from '@react-navigation/native';

// Local imports
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import {styles} from '../../Themes';
import strings from '../../I18n/mergeString';
import CText from '../Common/CText';
import CButton from '../../Components/Common/CButton';
import {StackNav} from '../../Navigation/navigationKeys';
import {colors} from '../../Themes/colors';

export default function TopUpSuccess(props) {
  const navigation = useNavigation();

  const backToHome = () => {
    navigation.navigate(StackNav.TabNavigation);
  };

  let {sheetRef} = props;

  return (
    <ActionSheet ref={sheetRef} containerStyle={localStyles.actionSheet}>
      <View style={localStyles.mainContainer}>
        <Image source={images.TopUpComplete} style={localStyles.imgSty} />
      </View>

      <CText
        color={colors.black}
        align={'center'}
        type={'B24'}
        style={localStyles.TUSTxt}>
        {strings.TUS}
      </CText>
      <View style={localStyles.mainTop}>
        <CText
          color={colors.black}
          type={'R14'}
          align={'center'}
          style={localStyles.noticeTxt}>
          {strings.TopUpNotice}
        </CText>

        <CButton
          text={'Back to Home'}
          containerStyle={localStyles.parentButton}
          onPress={backToHome}
        />
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  imgSty: {
    width: moderateScale(258),
    height: moderateScale(194),
  },
  mainContainer: {
    ...styles.center,
    ...styles.mv40,
  },
  noticeTxt: {
    ...styles.ph20,
  },
  actionSheet: {
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  TUSTxt: {
    ...styles.pv25,
  },
  parentButton: {
    width: '90%',
    ...styles.mv30,
  },
  mainTop: {
    gap: moderateScale(80),
  },
});
