import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import {styles} from '../../Themes/index';
import typography from '../../Themes/typography';
import CText from './CText';

const CButton = props => {
  let {ParentLoginBtn, ChildLoginBtn, text, onPress} = props;

  return (
    <TouchableOpacity
      style={[localStyles.ParentButton, ParentLoginBtn]}
      onPress={onPress}>
      <CText style={[localStyles.ChildButton, ChildLoginBtn]}>
        {text || 'Next'}
      </CText>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  ParentButton: {
    backgroundColor: colors.default,
    width: moderateScale(344),
    height: moderateScale(54),
    ...styles.ml15,
    ...styles.center,
    ...styles.mt35,
    backgroundColor: colors.black,
  },

  ChildButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Bold,
  },
});

export default CButton;
