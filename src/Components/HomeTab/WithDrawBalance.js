import {
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

// Local imports
import {SafeAreaView} from 'react-native-safe-area-context';
import CHeader from '../Common/CHeader';
import {moderateScale} from '../../Common/constant';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import CTextInput from '../Common/CTextInput';
import typography from '../../Themes/typography';
import {percentageData} from '../../Api/constants';
import CButton from '../Common/CButton';
import KeyBoardAvoidWrapper from '../Common/KeyBoardAvoidWrapper';
import SelectBank from '../modals/SelectBank';
import {CommonBOA} from '../Common/CommonBOA';
import images from '../../Assets/Images/index';

export default function WithDrawBalance() {
  const [val, setVal] = useState('$');
  const [data, setData] = useState('');
  const BankRef = useRef(null);

  const onChangeColor = item => {
    setData(item);
  };

  const openSheet = () => {
    BankRef.current.show();
  };

  const renderPercent = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          localStyles.mainData,
          {
            backgroundColor: data === item ? colors.Primary : colors.GreyScale,
          },
        ]}
        onPress={() => onChangeColor(item)}>
        <CText
          type={'S14'}
          style={{
            color: data === item ? colors.white : colors.black,
          }}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  const onChangeText = txt => {
    setVal(txt);
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <KeyBoardAvoidWrapper>
        <View style={localStyles.parent}>
          <CHeader title={'WithDraw'} />
          <CommonBOA
            source={images.BankAmerica}
            Icon={<Feather name={'chevron-down'} size={20} />}
          />
        </View>

        <CTextInput
          keyboardType={'numeric'}
          value={val}
          onChangeText={onChangeText}
          text={'Amount'}
          textInputStyle={localStyles.childTxtInp}
        />

        <CText align={'center'} type={'R14'} style={localStyles.maxTxt}>
          {strings.MaxAmt}
        </CText>

        <FlatList data={percentageData} renderItem={renderPercent} horizontal />
      </KeyBoardAvoidWrapper>
      <CButton containerStyle={localStyles.parentCButton} onPress={openSheet} />

      <SelectBank sheetRef={BankRef} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  parent: {
    ...styles.mh25,
  },
  forIcon: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  AmericaPng: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  parentBOA: {
    ...styles.mh20,
    ...styles.flexRow,
    ...styles.alignCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(16),
    borderColor: colors.google,
    ...styles.mv30,
    ...styles.ph20,
  },
  BOATxt: {
    ...styles.p15,
    ...styles.flex,
    ...styles.justifyBetween,
    gap: moderateScale(10),
  },
  childTxtInp: {
    ...typography.fontSizes.f40,
    ...typography.fontWeights.Bold,
    textAlign: 'center',
    ...styles.pr15,
  },
  maxTxt: {
    ...styles.pv20,
  },
  mainData: {
    ...styles.mv25,
    ...styles.center,
    ...styles.mh9,
    width: moderateScale(75),
    height: moderateScale(40),
    borderRadius: moderateScale(12),
  },
  parentCButton: {
    width: '90%',
    ...styles.mv25,
  },
});
