import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Material from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

// Local imports
import {styles} from '../../Themes';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';
import images from '../../Assets/Images/index';
import {TodayData, YesterdayData} from '../../Api/constants';
import {StackNav} from '../../Navigation/navigationKeys';

export default function HistoryTrans({navigation}) {
  const backToHOme = () => {
    navigation.navigate(StackNav.TabNavigation);
  };

  const moveToGraph = () => {
    navigation.navigate(StackNav.HistoryDetails);
  };

  const renderData = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={localStyles.outerImgTxt} onPress={moveToGraph}>
          <Image source={item.image} style={localStyles.UiKitSty} />
          <View style={localStyles.outerCOntainer}>
            <View style={localStyles.parentUi}>
              <CText type={'B14'}>{item.mainName}</CText>
              <CText type={'M12'} color={colors.tabColor}>
                {item.subName}
              </CText>
            </View>
            <CText color={item.color} type={'B14'}>
              {item.payments}
            </CText>
          </View>
        </TouchableOpacity>
        <View style={localStyles.forBorder}></View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={localStyles.forColor}>
        <SafeAreaView>
          <View style={localStyles.forGap}>
            <TouchableOpacity
              style={localStyles.parentMaterial}
              onPress={backToHOme}>
              <Material
                name={'arrow-back-ios'}
                size={24}
                color={colors.white}
                style={localStyles.vectorSty}
              />
            </TouchableOpacity>
            <CText type={'M14'} color={colors.white}>
              {strings.CurrentBalance}
            </CText>
          </View>

          <View style={localStyles.outerSty}>
            <View style={localStyles.outerComponent}>
              <CText
                type={'B32'}
                color={colors.white}
                style={localStyles.realDollarsTxt}>
                {strings.RealDollars}
              </CText>

              <View style={localStyles.outerImages}>
                <Feather
                  style={localStyles.eyeSty}
                  name={'eye'}
                  color={colors.silver}
                  size={24}
                />
                <Image source={images.Switch} style={localStyles.switchImg} />
              </View>
            </View>
          </View>

          <CText
            type={'S12'}
            color={colors.white}
            style={localStyles.BankAccSty}>
            {strings.BankAcc}
          </CText>
        </SafeAreaView>
      </View>
      <View style={localStyles.upperMain}>
        <View style={styles.mh20}>
          <View style={localStyles.parentTransHis}>
            <CText type={'B18'} style={localStyles.TransHistoryTxt}>
              {strings.TransHistory}
            </CText>

            <TouchableOpacity>
              <Octicons name={'search'} color={colors.numbersColor} size={24} />
            </TouchableOpacity>
          </View>
          <CText color={colors.tabColor} type={'M14'}>
            {strings.Date}
          </CText>

          <FlatList
            data={TodayData}
            renderItem={renderData}
            showsVerticalScrollIndicator={false}
          />

          <CText
            style={localStyles.YesterdayTxt}
            color={colors.tabColor}
            type={'M14'}>
            {strings.Yesterday}
          </CText>

          <FlatList
            data={YesterdayData}
            renderItem={renderData}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  forColor: {
    ...styles.ph26,
    backgroundColor: colors.Primary,
  },
  upperMain: {
    backgroundColor: colors.white,
  },
  forGap: {
    gap: moderateScale(30),
  },
  backButtonSty: {
    borderColor: colors.white,
  },
  parentMaterial: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    borderColor: colors.silver,
    width: moderateScale(40),
    height: moderateScale(40),
    ...styles.alignCenter,
    ...styles.justifyCenter,
    ...styles.pl10,
    ...styles.mv10,
  },
  realDollarsTxt: {
    ...styles.mt15,
  },
  outerSty: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  eyeSty: {
    ...styles.pt20,
    ...styles.ph15,
  },
  switchImg: {
    width: moderateScale(48),
    height: moderateScale(48),
    bottom: moderateScale(20),
  },
  parentButton: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  BankAccSty: {
    ...styles.mv25,
  },
  outerComponent: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  outerImages: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  TransHistoryTxt: {
    ...styles.mv25,
  },
  parentTransHis: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  UiKitSty: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  outerImgTxt: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.mv20,
    gap: moderateScale(12),
  },
  parentUi: {
    gap: moderateScale(5),
  },
  outerCOntainer: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  forBorder: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.bottomBorder,
  },
  YesterdayTxt: {
    ...styles.mv20,
  },
});
