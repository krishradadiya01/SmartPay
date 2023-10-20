import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Local imports
import ActionSheet from 'react-native-actions-sheet';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes';
import {CommonBOA} from '../Common/CommonBOA';
import {colors} from '../../Themes/colors';

export default function SelectBank(props) {
  let {sheetRef} = props;
  return (
    <View>
      <ActionSheet ref={sheetRef}>
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
      </ActionSheet>
    </View>
  );
}

const localStyles = StyleSheet.create({
  selectSty: {
    ...styles.mt40,
    ...styles.mh20,
  },
  parentComponent: {
    ...styles.mh20,
    ...styles.mv20,
    ...styles.alignCenter,
  },
});
