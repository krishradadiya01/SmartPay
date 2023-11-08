import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

// Local imports
import CText from '../../Components/Common/CText';
import images from '../../Assets/Images/index';
import strings from '../../I18n/mergeString';
import CTextInput from '../../Components/Common/CTextInput';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import {moderateScale} from '../../Common/constant';
import {US} from '../../Assets/Svgs';
import Countries from '../../Components/modals/Countries';
import Feathers from 'react-native-vector-icons/FontAwesome';
import CButton from '../../Components/Common/CButton';
import KeyBoardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';
import ReadyCard from '../../Components/modals/ReadyCard';
import CHeader from '../../Components/Common/CHeader';

export default function NewCard() {
  const [country, setCountry] = useState('');
  const [visible, setVisible] = useState(false);

  const init = useRef(null);

  const showCountry = () => {
    init.current?.show();
  };

  const selectedCountry = itm => {
    setCountry(itm);
  };

  const onPressCancel = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper>
        <CHeader color={colors.black} title={'New Card'} />
        <View style={localStyles.parentImg}>
          <Image style={localStyles.imgStyle} source={images.MainCard} />
        </View>

        <View style={localStyles.parentColor}>
          <Image source={images.CardColor} />
        </View>

        <CText color={colors.black} type={'B24'}>
          {strings.CardDetailTxt}
        </CText>
        <CTextInput
          text={'Card number'}
          mainTxtInp={localStyles.numberTxt}
          RightIcon={() => (
            <Image style={localStyles.imageStyle} source={images.MasterIcon} />
          )}
        />

        <View style={localStyles.mainCTxtInp}>
          <CTextInput
            text={'Expiry date'}
            mainTxtInp={localStyles.parentCTxtInp}
          />
          <CTextInput text={'VCC'} mainTxtInp={localStyles.parentCTxtInp} />
        </View>

        <CTextInput text={'Card holder'} />

        <TouchableOpacity
          onPress={showCountry}
          style={localStyles.mainSelector}>
          <View style={localStyles.mainBox}>
            {!!country ? (
              <View style={[styles.itemsCenter, styles.flexRow]}>
                {country?.svgIcon}
                <CText
                  color={colors.black}
                  type={'B18'}
                  style={localStyles.USTxtStyle}>
                  {country?.FullName}
                </CText>
              </View>
            ) : (
              <View style={[styles.itemsCenter, styles.flexRow]}>
                <US />
                <CText
                  color={colors.black}
                  type={'B18'}
                  style={localStyles.USTxtStyle}>
                  {strings.America}
                </CText>
              </View>
            )}

            <Feathers
              color={colors.black}
              name={'angle-down'}
              style={localStyles.angleButton}
              size={24}
            />
          </View>
        </TouchableOpacity>

        <Countries sheetRef={init} selectedCountry={selectedCountry} />
        <CButton text={'Save'} onPress={onPressCancel} />

        <ReadyCard visible={visible} onPressClose={onPressCancel} />
      </KeyBoardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
  },
  imgStyle: {
    width: moderateScale(360),
    height: moderateScale(200),
  },
  parentImg: {
    ...styles.alignCenter,
    ...styles.mv20,
  },
  parentColor: {
    position: 'absolute',
    top: moderateScale(100),
    right: 0,
  },
  numberTxt: {
    ...styles.mv10,
  },
  parentCTxtInp: {
    width: '48%',
  },
  mainCTxtInp: {
    ...styles.mv20,
    ...styles.rowCenter,
    ...styles.justifyBetween,
  },
  imageStyle: {
    ...styles.mr15,
  },
  mainBox: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    ...styles.mt10,
    ...styles.pl20,
    backgroundColor: colors.GreyScale,
    height: moderateScale(56),
    borderRadius: moderateScale(16),
  },
  USTxtStyle: {
    ...styles.pl15,
  },
  angleButton: {
    ...styles.ph15,
  },
  mainSelector: {
    ...styles.mt20,
  },
});
