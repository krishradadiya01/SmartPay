import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import React, {useState} from 'react';
import Feathers from 'react-native-vector-icons/FontAwesome';

// Local imports
import CHeader from '../Common/CHeader';
import {styles} from '../../Themes';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import {colors} from '../../Themes/colors';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import CTextInput from '../Common/CTextInput';
import typography from '../../Themes/typography';
import CButton from '../Common/CButton';
import KeyBoardAvoidWrapper from '../Common/KeyBoardAvoidWrapper';
import TransferPopUp from '../../Components/modals/TransferPopUp';

export default function SendMoney() {
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const onPressClose = () => {
    setVisible(!visible);
  };

  const onChangeAmount = txt => {
    setAmount(txt);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper containerStyle={styles.ph20}>
        <View>
          <CHeader title={'Send Money'} />
          <View style={localStyles.mainImg}>
            <Image source={images.Girl} style={localStyles.girlImg} />
          </View>
          <CText align={'center'} type={'M14'} style={localStyles.mariaTxt}>
            {strings.ToMaria}
          </CText>

          <View style={localStyles.mainBorder}>
            <View style={localStyles.parentAmt}>
              <CText type={'M12'} color={colors.tabColor}>
                {strings.EnterAmount}
              </CText>
              <CText type={'M12'} color={colors.tabColor}>
                {strings.MaxAmt}
              </CText>
            </View>

            <View style={localStyles.parentTxtInp}>
              <View style={localStyles.parentUsd}>
                <CText
                  align={'center'}
                  type={'M16'}
                  color={colors.tabColor}
                  style={localStyles.UsdTxt}>
                  {strings.USD}
                </CText>

                <Feathers
                  name={'angle-down'}
                  color={colors.tabColor}
                  size={14}
                />
              </View>
              <CTextInput
                mainTxtInp={localStyles.CTxtInp}
                textInputStyle={localStyles.ChildTxtInp}
                keyboardType={'numeric'}
                value={amount}
                onChangeText={onChangeAmount}
              />
            </View>
          </View>
        </View>
      </KeyBoardAvoidWrapper>
      <CButton
        containerStyle={localStyles.mainCButton}
        text={'Send Money'}
        onPress={onPressClose}
        disabled={!!!amount}
      />
      <TransferPopUp
        visible={visible}
        onPressClose={onPressClose}
        amount={amount}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.flex,
    ...styles.justifyBetween,
    backgroundColor: colors.white,
  },
  mainImg: {
    borderWidth: moderateScale(1.5),
    borderRadius: moderateScale(60),
    borderColor: colors.numbersColor,
    ...styles.selfCenter,
    ...styles.p10,
  },
  girlImg: {
    width: moderateScale(88),
    height: moderateScale(88),
  },
  parentImg: {
    ...styles.center,
  },
  mariaTxt: {
    ...styles.mv30,
  },
  parentAmt: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mt10,
  },
  mainBorder: {
    borderWidth: moderateScale(1),
    borderColor: colors.silver,
    borderRadius: moderateScale(16),
    ...styles.ph20,
  },
  parentUsd: {
    borderWidth: moderateScale(1),
    borderColor: colors.silver,
    borderRadius: moderateScale(8),
    width: moderateScale(67),
    backgroundColor: colors.GreyScale,
    ...styles.rowCenter,
    ...styles.mv15,
  },
  UsdTxt: {
    ...styles.p5,
  },
  CTxtInp: {
    width: moderateScale(210),
    borderRadius: moderateScale(15),
    height: moderateScale(35),
    ...styles.mv15,
    backgroundColor: colors.GreyScale,
  },
  parentTxtInp: {
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  ChildTxtInp: {
    ...typography.fontSizes.f24,
    ...typography.fontWeights.SemiBold,
  },
  mainCButton: {
    ...styles.mv30,
    width: '90%',
  },
});
