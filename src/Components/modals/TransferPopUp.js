import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local imports
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import CButton from '../Common/CButton';
import images from '../../Assets/Images/index';
import {StackNav} from '../../Navigation/navigationKeys';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';

export default function TransferPopUp(props) {
  let {visible, onPressClose, amount} = props;

  const navigation = useNavigation();

  const moveToHome = () => {
    navigation.navigate(StackNav.TransferProof, {amount: amount});
    onPressClose();
  };

  const Detail = ({
    header,
    bankName,
    name,
    cardNumber,
    total,
    prize,
    isTotal = false,
  }) => {
    return (
      <View style={localStyles.parentFromBOA}>
        {!isTotal ? (
          <View>
            <View style={localStyles.detailHeaderStyle}>
              <CText color={colors.tabColor} type={'R12'}>
                {header}
              </CText>
              <CText color={colors.tabColor} type={'R12'}>
                {bankName}
              </CText>
            </View>
            <View style={localStyles.detailStyle}>
              <CText type={'B16'}>{name}</CText>
              <CText type={'B16'}>{cardNumber}</CText>
            </View>
          </View>
        ) : (
          <View style={localStyles.totalPrize}>
            <CText color={colors.tabColor} type={'M16'}>
              {total}
            </CText>
            <CText type={'B16'}>{prize}</CText>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={localStyles.flex}>
      <Modal animationType={'fade'} transparent={true} visible={visible}>
        <TouchableOpacity
          style={localStyles.modalMainContainer}
          onPress={onPressClose}>
          <TouchableOpacity activeOpacity={1} onPress={onPressClose}>
            <ImageBackground
              source={images.TransferPopUp}
              style={localStyles.imgStyle}>
              <View style={localStyles.innerContainer}>
                <View>
                  <CText
                    type={'S18'}
                    align="center"
                    style={localStyles.TransTxt}>
                    {strings.TransConf}
                  </CText>

                  <Detail
                    header={strings.From}
                    bankName={strings.BOA}
                    name={strings.Anabella}
                    cardNumber={strings.AnnaNumber}
                  />
                  <Detail
                    header={strings.To}
                    bankName={strings.Citibank}
                    name={'Maria'}
                    cardNumber={strings.MariaNumber}
                  />

                  <Detail
                    isTotal={true}
                    total={strings.Total}
                    prize={'$' + parseFloat(amount).toFixed(2)}
                  />
                </View>
                <CButton
                  text={'Ok, Send Now!'}
                  containerStyle={localStyles.ParentLgnBtn}
                  onPress={moveToHome}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  modalMainContainer: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: colors.transparent,
  },
  imgStyle: {
    width: moderateScale(327),
    height: moderateScale(464),
    ...styles.justifyCenter,
    ...styles.ph20,
  },
  innerContainer: {
    ...styles.justifyBetween,
    marginTop: moderateScale(120),
    ...styles.flex,
    ...styles.mv15,
  },
  TransTxt: {
    ...styles.mb20,
  },
  ParentLgnBtn: {
    ...styles.mt0,
  },
  parentFromBOA: {
    ...styles.mv10,
    ...styles.pb15,
    borderBottomColor: colors.bottomBorder,
    borderBottomWidth: moderateScale(1),
  },
  detailHeaderStyle: {
    ...styles.rowSpaceBetween,
    ...styles.pv5,
  },
  detailStyle: {
    ...styles.rowSpaceBetween,
  },
  totalPrize: {
    ...styles.rowSpaceBetween,
    ...styles.mv20,
  },
});
