import {StyleSheet, View} from 'react-native';
import React from 'react';

// Local imports
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes/index';
import {colors} from '../../Themes/colors';
import CButton from '../Common/CButton';
import {StackNav, TabNav} from '../../Navigation/navigationKeys';
import {useNavigation} from '@react-navigation/native';

export default function LogOut() {
  const navigation = useNavigation();

  const moveToSignIn = () => {
    navigation.navigate(StackNav.AuthNavigation);
  };

  const moveToProfile = () => {
    navigation.navigate(TabNav.ProfileScreen);
  };

  return (
    <View style={localStyles.mainContainer}>
      <CText align={'center'} type={'B24'} color={colors.black}>
        {strings.LogOutConfirm}
      </CText>

      <View style={localStyles.outerComponentOfCButtons}>
        <CButton
          onPress={moveToSignIn}
          text={'Yes'}
          containerStyle={localStyles.ParentCButtonContainerYes}
        />
        <CButton
          onPress={moveToProfile}
          text={'No'}
          containerStyle={localStyles.ParentCButtonContainerNo}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.justifyCenter,
  },
  ParentCButtonContainerYes: {
    backgroundColor: colors.Green,
    width: '60%',
  },
  ParentCButtonContainerNo: {
    backgroundColor: colors.red,
    width: '60%',
  },
  outerComponentOfCButtons: {
    ...styles.flexRow,
    ...styles.justifyCenter,
  },
});
