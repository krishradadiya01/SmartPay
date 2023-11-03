import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Local imports
import CHeader from '../Common/CHeader';
import {styles} from '../../Themes/index';
import {colors} from '../../Themes/colors';
import CTextInput from '../Common/CTextInput';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import typography from '../../Themes/typography';
import KeyBoardAvoidWrapper from '../Common/KeyBoardAvoidWrapper';
import {moderateScale} from '../../Common/constant';
import CButton from '../Common/CButton';

export default function FQA() {
  const CommonComponent = ({name, subName}) => {
    return (
      <TouchableOpacity style={localStyles.outerComponent}>
        <CText color={colors.black} type={'B16'}>
          {name}
        </CText>
        <CText
          type={'R12'}
          color={colors.tabColor}
          align={'justify'}
          numberOfLines={2}>
          {subName}
        </CText>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper containerStyle={localStyles.keyBoardSty}>
        <CHeader />

        <CText
          color={colors.black}
          type={'B24'}
          style={localStyles.QuestionTxt}>
          {strings.Question}
        </CText>
        <CTextInput
          textInputStyle={localStyles.CTxtInp}
          LeftIcon={() => (
            <EvilIcons color={colors.black} name={'search'} size={35} />
          )}
          text={'Search'}
          mainTxtInp={localStyles.mainComponent}
        />

        <View style={localStyles.outerContainer}>
          <CText
            color={colors.black}
            style={localStyles.innerComponent}
            type={'B18'}>
            {strings.Frequently}
          </CText>

          <TouchableOpacity>
            <CText type={'B16'} color={colors.numbersColor}>
              {strings.ViewAll}
            </CText>
          </TouchableOpacity>
        </View>

        <View style={localStyles.gapContainer}>
          <CommonComponent
            name={strings.HowAcc}
            subName={strings.AccSolution}
          />
          <CommonComponent
            name={strings.HowCard}
            subName={strings.CardSolution}
          />
          <CommonComponent
            name={strings.HowTopUp}
            subName={strings.TopUpSolution}
          />
        </View>

        <CButton
          text={'Load more'}
          ChildLoginBtn={localStyles.childContainer}
          containerStyle={localStyles.parentComponent}
        />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex,
  },
  mainComponent: {
    ...styles.ph10,
    backgroundColor: colors.GreyScale,
  },
  QuestionTxt: {
    ...styles.mv25,
  },
  CTxtInp: {
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Regular,
  },
  innerComponent: {
    ...styles.mv25,
  },
  outerContainer: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  keyBoardSty: {
    ...styles.ph20,
    ...styles.flexGrow1,
    ...styles.mainContainerSurface,
  },
  outerComponent: {
    ...styles.pv25,
    ...styles.ph15,
    gap: moderateScale(10),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(20),
    borderColor: colors.silver,
  },
  gapContainer: {
    gap: moderateScale(25),
  },
  parentComponent: {
    ...styles.mt20,
    backgroundColor: colors.GreyScale,
  },
  childContainer: {
    color: colors.black,
  },
});
