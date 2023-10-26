import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

// Local imports
import {styles} from '../../Themes';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import CHeader from '../../Components/Common/CHeader';
import {colors} from '../../Themes/colors';
import CTextInput from '../Common/CTextInput';
import typography from '../../Themes/typography';
import {moderateScale} from '../../Common/constant';
import CButton from '../Common/CButton';
import KeyBoardAvoidWrapper from '../Common/KeyBoardAvoidWrapper';
import {StackNav} from '../../Navigation/navigationKeys';

export default function EditAccount({navigation}) {
  const moveToLang = () => {
    navigation.navigate(StackNav.SelectLanguage);
  };

  const TxtInputData = ({name, inpTxt}) => {
    return (
      <View>
        <CText color={colors.tabColor} type={'B16'} style={localStyles.NameTxt}>
          {name}
        </CText>
        <CTextInput
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
          <CHeader title={'Edit Account'} />

          <View style={localStyles.mainParent}>
            <TxtInputData name={strings.YourName} inpTxt={strings.Anna} />

            <CText color={colors.tabColor} type={'S16'}>
              {strings.Occupation}
            </CText>
            <TouchableOpacity style={localStyles.outerComponent}>
              <CText type={'S16'}>{strings.Students}</CText>
              <Feather name={'chevron-down'} size={16} />
            </TouchableOpacity>

            <TxtInputData
              name={strings.Employer}
              inpTxt={strings.OverlayDesign}
            />
            <TxtInputData
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
    height: '100%',
  },
  parentComponent: {
    backgroundColor: colors.GreyScale,
    ...styles.mt15,
  },
  NameTxt: {
    ...styles.mt20,
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
});
