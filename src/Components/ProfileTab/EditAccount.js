import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

// Local imports
import {styles} from '../../Themes';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import CHeader from '../../Components/Common/CHeader';
import {colors} from '../../Themes/colors';
import CTextInput from '../Common/CTextInput';
import typography from '../../Themes/typography';
import {getHeight, moderateScale} from '../../Common/constant';
import CButton from '../Common/CButton';
import KeyBoardAvoidWrapper from '../Common/KeyBoardAvoidWrapper';
import {StackNav} from '../../Navigation/navigationKeys';
import {Dropdown} from 'react-native-element-dropdown';
import {MeSectionData} from '../../Api/constants';

export default function EditAccount({navigation}) {
  const [currency, setCurrency] = useState('');

  const moveToLang = () => {
    navigation.navigate(StackNav.TabNavigation);
  };

  const onChangeCurrency = ({value}) => {
    setCurrency(value);
  };

  const TxtInputData = ({name, inpTxt, keyboardType}) => {
    return (
      <View>
        <CText color={colors.tabColor} type={'B16'} style={localStyles.NameTxt}>
          {name}
        </CText>
        <CTextInput
          keyboardType={keyboardType}
          text={inpTxt}
          placeColor={colors.black}
          textInputStyle={localStyles.txtInputSty}
          mainTxtInp={localStyles.parentComponent}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper>
        <View style={styles.mh20}>
          <CHeader color={colors.black} title={'Edit Account'} />

          <View style={localStyles.mainParent}>
            <TxtInputData name={strings.YourName} inpTxt={strings.Anna} />

            <CText color={colors.tabColor} type={'S16'}>
              {strings.Occupation}
            </CText>
            <Dropdown
              style={localStyles.dropdownStyle}
              data={MeSectionData}
              value={currency}
              maxHeight={moderateScale(180)}
              labelField="label"
              valueField="value"
              label={strings.usd}
              onChange={onChangeCurrency}
              selectedTextStyle={localStyles.miniContainer}
              itemTextStyle={localStyles.miniContainer}
              itemContainerStyle={{
                backgroundColor: colors.GreyScale,
                width: 'auto',
              }}
            />

            <TxtInputData
              name={strings.Employer}
              inpTxt={strings.OverlayDesign}
            />
            <TxtInputData
              keyboardType={'numeric'}
              name={strings.PhoneNumber}
              inpTxt={strings.ProfileNumber}
            />
            <TxtInputData name={strings.Email} inpTxt={strings.AnnaEmail} />
          </View>

          <CButton text={'Save'} onPress={moveToLang} />
        </View>
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex,
  },
  parentComponent: {
    backgroundColor: colors.GreyScale,
    ...styles.mt10,
  },
  NameTxt: {
    ...styles.mt10,
  },
  txtInputSty: {
    ...typography.fontSizes.f16,
    ...typography.fontWeights.SemiBold,
  },
  mainParent: {
    gap: moderateScale(10),
  },
  iconSty: {
    ...styles.mh15,
  },
  outerComponent: {
    height: moderateScale(56),
    backgroundColor: colors.GreyScale,
    borderRadius: moderateScale(16),
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.ph15,
    ...styles.justifyBetween,
  },
  dropdownStyle: {
    backgroundColor: colors.GreyScale,
    height: getHeight(52),
    borderRadius: moderateScale(15),
    ...styles.ph20,
    width: '100%',
    height: moderateScale(50),
    ...styles.mv10,
  },
  miniContainer: {
    color: colors.black,
  },
});
