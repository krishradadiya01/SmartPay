import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

// Local imports
import {NotificationSvg} from '../../Assets/Svgs';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import {moderateScale} from '../../Common/constant';

export default function CNotification(props) {
  let {imgStyle, onPress, containerStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <NotificationSvg
        style={[localStyles.imageStyle, imgStyle]}
        onPress={onPress}
      />
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