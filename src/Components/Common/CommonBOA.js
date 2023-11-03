import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

// Local imports
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import strings from '../../I18n/mergeString';

export const CommonBOA = props => {
  let {ParentContainer, Icon, source, onPress} = props;
  return (
    <TouchableOpacity
      style={[localStyles.parentBOA, ParentContainer]}
      onPress={onPress}>
      <Image source={source} style={localStyles.AmericaPng} />
      <View style={localStyles.forIcon}>
        <View style={localStyles.BOATxt}>
          <CText color={colors.black} type={'S16'}>
            {strings.BOA}
          </CText>
          <CText color={colors.tabColor} type={'M12'}>
            {strings.AnnaNumber}
          </CText>
        </View>
      </View>
      {Icon}
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  parentBOA: {
    backgroundColor: colors.bottomBorder,
    ...styles.flexRow,
    ...styles.itemsCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(16),
    borderColor: colors.google,
    ...styles.ph20,
    ...styles.mv10,
  },
  AmericaPng: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  forIcon: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  BOATxt: {
    ...styles.p15,
    ...styles.justifyBetween,
    gap: moderateScale(10),
  },
});
