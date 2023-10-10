import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

// Local imports
import {BackButton} from '../../Assets/Svgs';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import {moderateScale} from '../../Common/constant';

export default function CBackButton(props) {
  let {onPress, imgStyle} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <BackButton style={[localStyles.imageStyle, imgStyle]} />
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  imageStyle: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    borderColor: colors.silver,
    ...styles.mt10,
    ...styles.flex,
  },
});
