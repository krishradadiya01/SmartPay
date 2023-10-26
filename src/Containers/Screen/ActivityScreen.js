import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

// Local imports
import CHeader from '../../Components/Common/CHeader';
import {moderateScale} from '../../Common/constant';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import {miniCardDetails} from '../../Api/constants';
import CText from '../../Components/Common/CText';
import strings from '../../I18n/mergeString';

export default function MyCardScreen() {
  const [OnBoardingDetails, setOnBoardingDetails] = useState(0);

  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const _setViewableItemsChanged = useCallback(({viewableItems}) => {
    setOnBoardingDetails(viewableItems[0]?.index);
  }, []);

  const renderCard = ({item}) => {
    return (
      <View backgroundColor={item.backgroundColor} style={localStyles.cardSty}>
        <CText color={item.color} type={'M14'}>
          {item.name}
        </CText>
        <CText color={item.color} type={'M14'}>
          {item.number}
        </CText>
        <Image source={item.image} style={localStyles.imgSty} />
      </View>
    );
  };

  const RightIcon = () => {
    return (
      <TouchableOpacity style={localStyles.parentMore}>
        <Feather name={'more-horizontal'} size={20} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <View style={localStyles.main}>
        <CHeader title={'Activity'} rightIcon={<RightIcon />} />
        <FlatList
          data={miniCardDetails}
          renderItem={renderCard}
          viewabilityConfig={_viewabilityConfig}
          onViewableItemsChanged={_setViewableItemsChanged}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.rowCenter}>
          {miniCardDetails.map((item, index) => (
            <View
              style={[
                localStyles.IndicatorStyle,
                {
                  backgroundColor:
                    index !== OnBoardingDetails ? colors.silver : colors.black,
                },
              ]}
            />
          ))}
        </View>

        <View style={localStyles.mainBorder}>
          <View style={localStyles.mainTotal}>
            <CText
              color={colors.tabColor}
              style={localStyles.TotalSpendTxt}
              align={'center'}
              type={'M14'}>
              {strings.TotalSpend}
            </CText>
            <CText type={'B24'} align={'center'}>
              {strings.TotalDollars}
            </CText>
          </View>

          <View style={localStyles.outerContainer}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
  },
  parentMore: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderWidth: moderateScale(1),
    borderColor: colors.silver,
    ...styles.p10,
    borderRadius: moderateScale(12),
  },
  cardSty: {
    width: moderateScale(315),
    height: moderateScale(64),
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    ...styles.m5,
    ...styles.mt20,
    ...styles.p10,
    borderRadius: moderateScale(16),
  },
  imgSty: {
    width: moderateScale(40),
    height: moderateScale(24),
  },
  IndicatorStyle: {
    height: moderateScale(8),
    borderRadius: moderateScale(10),
    ...styles.mh5,
    ...styles.mt10,
    width: moderateScale(8),
  },
  TotalSpendTxt: {
    ...styles.mt30,
  },
  mainTotal: {
    gap: moderateScale(10),
  },
  mainBorder: {
    ...styles.mt40,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(16),
    borderColor: colors.bottomBorder,
  },
  outerContainer: {
    ...styles.flexRow,
    ...styles.justifyEvenly,
    backgroundColor: colors.red,
  },
});
