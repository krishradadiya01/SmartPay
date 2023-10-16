import {Modal, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local imports
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import CButton from '../Common/CButton';
import images from '../../Assets/Images/index';
import {StackNav} from '../../Navigation/navigationKeys';

export default function ReadyCard(props) {
  let {visible, onPressClose} = props;

  const navigation = useNavigation();

  const moveToHome = () => {
    navigation.navigate(StackNav.TabNavigation);
    onPressClose();
  };

  return (
    <View style={localStyles.flex}>
      <Modal animationType={'fade'} transparent={true} visible={visible}>
        <TouchableOpacity
          style={localStyles.modalMainContainer}
          onPress={onPressClose}>
          <TouchableOpacity activeOpacity={1} onPress={onPressClose}>
            <Image source={images.PopUp} style={localStyles.imgStyle} />
            <View style={localStyles.getTxtParent}>
              <CText type={'B18'}>{strings.GetReady}</CText>
              <CText style={localStyles.TransTxt}>{strings.ShopTransfer}</CText>
            </View>

            <CButton
              text={'Ok, I’m ready!'}
              ParentLoginBtn={localStyles.ParentLgnBtn}
              onPress={moveToHome}
            />
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
    width: moderateScale(290),
    height: moderateScale(337),
    position: 'relative',
  },
  getTxtParent: {
    position: 'absolute',
    top: moderateScale(150),
    ...styles.center,
  },
  TransTxt: {
    ...styles.mt25,
    width: moderateScale(300),
    textAlign: 'center',
  },
  ParentLgnBtn: {
    position: 'absolute',
    width: moderateScale(250),
    height: moderateScale(56),
    bottom: moderateScale(25),
  },
});
