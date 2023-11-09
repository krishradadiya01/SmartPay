import {StyleSheet, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

// Local imports
import ActionSheet from 'react-native-actions-sheet';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes';
import {CommonBOA} from '../Common/CommonBOA';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import CButton from '../Common/CButton';
import {StackNav} from '../../Navigation/navigationKeys';
import images from '../../Assets/Images/index';
import CAddNewBank from '../Common/CAddNewBank';

export default function SelectBank(props) {
  let {sheetRef} = props;

  const navigation = useNavigation();

  const backToHome = () => {
    navigation.navigate(StackNav.TabNavigation);
  };

  return (
    <ActionSheet
      containerStyle={localStyles.actionSty}
      ref={sheetRef}
      style={localStyles.main}>
      <View>
        <CText color={colors.black} type={'S18'} style={localStyles.selectSty}>
          {strings.SelectBank}
        </CText>
      </View>
      <CommonBOA
        source={images.BankAmerica}
        ParentContainer={localStyles.parentComponent}
        Icon={
          <AntDesign name={'checkcircle'} size={24} color={colors.Primary} />
        }
      />

      <View style={localStyles.forGap}>
        <CAddNewBank />
        <CButton
          containerStyle={localStyles.parentCButton}
          onPress={backToHome}
        />
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSty: {
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  selectSty: {
    ...styles.mt40,
    ...styles.mh20,
  },
  parentComponent: {
    ...styles.mh20,
    ...styles.mv20,
    ...styles.alignCenter,
  },
  parentNewBank: {
    gap: moderateScale(13),
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.mh20,
    backgroundColor: colors.GreyScale,
    ...styles.p20,
    borderRadius: moderateScale(16),
  },
  outerAddBank: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  parentCButton: {
    width: '90%',
    ...styles.mv25,
  },
  forGap: {
    gap: moderateScale(100),
  },
});
