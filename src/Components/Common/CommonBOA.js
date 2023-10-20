import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Feathers from 'react-native-vector-icons/FontAwesome';

// Local imports
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';

export const CommonBOA = props => {
  let {ParentContainer, Icon} = props;
  return (
    <TouchableOpacity style={[localStyles.parentBOA, ParentContainer]}>
      <Image source={images.BankAmerica} style={localStyles.AmericaPng} />
      <View style={localStyles.forIcon}>
        <View style={localStyles.BOATxt}>
          <CText type={'S16'}>{strings.BOA}</CText>
          <CText color={colors.tabColor} type={'M12'}>
            {strings.BankNum}
          </CText>
        </View>
      </View>
      {Icon}
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  parentBOA: {
    ...styles.flexRow,
    ...styles.alignCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(16),
    borderColor: colors.google,
    ...styles.mv30,
    ...styles.ph20,
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
