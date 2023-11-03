import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';

// Local imports
import CHeader from '../Common/CHeader';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes/index';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import {NotificationData1, NotificationData2} from '../../Api/constants';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';

export default function Notification() {
  const renderData = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={localStyles.outerComponent}>
          <Image source={item.image} style={localStyles.iconSty} />

          <View style={localStyles.outerContainer}>
            <View style={{gap: moderateScale(3)}}>
              <CText color={colors.black} type={'B16'}>
                {item.name}
              </CText>
              <CText color={colors.tabColor} type={'R12'} numberOfLines={1}>
                {item.subName}
              </CText>
            </View>

            <CText type={'R12'} color={colors.tabColor}>
              {item.Time}
            </CText>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const RightIcon = () => {
    return (
      <TouchableOpacity>
        <Image source={images.RightIcon} style={localStyles.imgSty} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <View style={styles.mh20}>
        <CHeader
          customStyle={localStyles.notTxt}
          title={'Notification'}
          rightIcon={<RightIcon />}
        />

        <ScrollView>
          <CText
            style={localStyles.TxtSty}
            type={'B16'}
            color={colors.tabColor}>
            {strings.TodayNot}
          </CText>
          <FlatList data={NotificationData1} renderItem={renderData} />

          <CText
            type={'B16'}
            color={colors.tabColor}
            style={localStyles.weekSty}>
            {strings.ThisWeek}
          </CText>
          <FlatList data={NotificationData2} renderItem={renderData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex,
  },
  imgSty: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  notTxt: {
    ...styles.ml80,
  },
  iconSty: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  outerComponent: {
    gap: moderateScale(15),
    ...styles.mv15,
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  TxtSty: {
    ...styles.mv10,
  },
  outerContainer: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
  weekSty: {
    ...styles.mv15,
  },
});
