import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

// Local imports
import ActionSheet from 'react-native-actions-sheet';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes';
import {CommonBOA} from '../Common/CommonBOA';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CButton from '../Common/CButton';
import {StackNav} from '../../Navigation/navigationKeys';

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
        <CText type={'S18'} style={localStyles.selectSty}>
          {strings.SelectBank}
        </CText>
      </View>
      <CommonBOA
        ParentContainer={localStyles.parentComponent}
        Icon={
          <AntDesign name={'checkcircle'} size={24} color={colors.Primary} />
        }
      />

      <View style={localStyles.forGap}>
        <TouchableOpacity style={localStyles.parentNewBank}>
          <MaterialCommunity name={'bank-outline'} size={20} />

          <View style={localStyles.outerAddBank}>
            <CText type={'B16'}>{strings.AddNewBank}</CText>
            <Material name={'navigate-next'} size={20} />
          </View>
        </TouchableOpacity>

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
