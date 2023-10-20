import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Local imports
import {styles} from '../../Themes';
import CText from './CText';
import {moderateScale} from '../../Common/constant';
import CBackButton from './CBackButton';

export default function CHeader(props) {
  const {title, onPressBack, isHideBack, rightIcon, customStyle} = props;
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View style={[localStyles.container, !!isHideBack && styles.ph10]}>
      {!isHideBack && (
        <TouchableOpacity
          onPress={onPressBack || goBack}
          style={localStyles.backIconSty}>
          <CBackButton onPress={goBack} />
        </TouchableOpacity>
      )}
      <View style={[styles.flex, styles.mh40]}>
        <CText align={'center'} type={'B18'} numberOfLines={1}>
          {title}
        </CText>
      </View>
      {!!rightIcon && rightIcon}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.pv15,
    height: moderateScale(60),
  },
  backIconSty: {
    ...styles.p5,
    borderRadius: moderateScale(20),
    position: 'absolute',
    zIndex: 1,
  }
});
