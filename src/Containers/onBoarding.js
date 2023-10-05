import {StyleSheet, SafeAreaView, Image, FlatList, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

// Local imports
import CText from '../Components/Common/CText';
import {styles} from '../Themes';
import {OnBoardingData} from '../Api/constants';
import {deviceWidth, moderateScale} from '../Common/constant';
import {colors} from '../Themes/colors';
import CButton from '../Components/Common/CButton';

export default function onBoarding() {
  const [onBoardingDetails, setonBoardingDetails] = useState(0);
  const BoardingRef = useRef(null);

  const _setViewableItemsChanged = useCallback(({viewableItems}) => {
    setonBoardingDetails(viewableItems[0]?.index);
  }, []);

  const onPressRightArrow = () => {
    if (onBoardingDetails === 2) {
      props.navigation.navigate('AuthNavigation');
      //  OnBoardingToken(true);
    } else {
      BoardingRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (onBoardingDetails + 1),
      });
    }
  };

  const renderItems = ({item}) => {
    return (
      <View>
        <View style={localStyles.Parent}>
          <Image source={item.image} style={localStyles.onBoarding1} />
          <CText type={'B24'} style={localStyles.Title1}>
            {item.Title}
          </CText>
          <CText type={'R14'} style={localStyles.DescStyle}>
            {item.Description}
          </CText>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={localStyles.MainParent}>
      <FlatList
        data={OnBoardingData}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={BoardingRef}
        onViewableItemsChanged={_setViewableItemsChanged}
      />
      <View style={styles.rowCenter}>
        {OnBoardingData.map((item, index) => (
          <View
            style={[
              localStyles.IndicatorStyle,
              {
                width:
                  index !== onBoardingDetails
                    ? moderateScale(8)
                    : moderateScale(35),
                backgroundColor:
                  index !== onBoardingDetails ? colors.silver : colors.black,
              },
            ]}
          />
        ))}
      </View>

      <View style={localStyles.ParentCButton}>
        <CButton
          ParentLoginBtn={localStyles.CommonLgnBtn}
          text={'Get Started'}
          onPress={onPressRightArrow}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  MainParent: {
    backgroundColor: colors.white,
  },
  Parent: {
    ...styles.center,
    ...styles.alignCenter,
  },
  onBoarding1: {
    width: deviceWidth,
    height: moderateScale(350),
    ...styles.mt70,
  },
  Title1: {
    width: deviceWidth,
    textAlign: 'center',
    ...styles.ph30,
    ...styles.pt30,
    backgroundColor: colors.white,
    width: deviceWidth,
  },
  DescStyle: {
    textAlign: 'center',
    width: deviceWidth,
    ...styles.ph35,
    ...styles.pv30,
    backgroundColor: colors.white,
  },
  IndicatorStyle: {
    height: moderateScale(8),
    width: moderateScale(10),
    borderRadius: moderateScale(10),
    ...styles.mh5,
    ...styles.mb55,
  },
  CommonLgnBtn: {
    width: moderateScale(287),
    ...styles.center,
    borderRadius: moderateScale(20),
  },
  ParentCButton: {
    ...styles.center,
    ...styles.mr15,
    ...styles.mt35,
  },
});
