import {StyleSheet, SafeAreaView, Image, FlatList, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

// Local imports
import CText from '../Components/Common/CText';
import {styles} from '../Themes';
import {OnBoardingData} from '../Api/constants';
import {deviceWidth, moderateScale} from '../Common/constant';
import {colors} from '../Themes/colors';
import CButton from '../Components/Common/CButton';
import {OnBoardingToken} from '../Utils/asyncStorage';
import {StackNav} from '../Navigation/navigationKeys';

export default function OnBoarding({navigation}) {
  const [OnBoardingDetails, setOnBoardingDetails] = useState(0);
  const BoardingRef = useRef(null);

  const _setViewableItemsChanged = useCallback(({viewableItems}) => {
    setOnBoardingDetails(viewableItems[0]?.index);
  }, []);

  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const skip = () => {
    navigation.navigate(StackNav.AuthNavigation);
  };

  const onPressRightArrow = () => {
    if (OnBoardingDetails === 1) {
      navigation.navigate(StackNav.AuthNavigation);
      OnBoardingToken(true);
    } else {
      BoardingRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (OnBoardingDetails + 1),
      });
    }
  };

  const renderItems = ({item}) => {
    return (
      <View>
        <View style={localStyles.Parent}>
          <Image source={item.image} style={localStyles.OnBoarding1} />
          <CText
            type={'B24'}
            style={localStyles.Title1}
            backgroundColor={colors.white}>
            {item.Title}
          </CText>
          <CText
            type={'R14'}
            style={localStyles.DescStyle}
            backgroundColor={colors.white}>
            {item.Description}
          </CText>
        </View>
      </View>
    );
  };

  return (
    <View style={localStyles.MainParent}>
      <SafeAreaView style={localStyles.ParentSkipButton}>
        <CButton
          text={'Skip'}
          onPress={skip}
          ParentLoginBtn={localStyles.SkipButton}
          ChildLoginBtn={localStyles.ChildSkipBtn}
        />
      </SafeAreaView>
      <FlatList
        data={OnBoardingData}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        viewabilityConfig={_viewabilityConfig}
        ref={BoardingRef}
        pagingEnabled
        onViewableItemsChanged={_setViewableItemsChanged}
      />
      <View style={styles.rowCenter}>
        {OnBoardingData.map((item, index) => (
          <View
            style={[
              localStyles.IndicatorStyle,
              {
                width:
                  index !== OnBoardingDetails
                    ? moderateScale(8)
                    : moderateScale(35),
                backgroundColor:
                  index !== OnBoardingDetails ? colors.silver : colors.black,
              },
            ]}
          />
        ))}
      </View>

      <CButton
        ParentLoginBtn={localStyles.CommonLgnBtn}
        text={'Get Started'}
        onPress={onPressRightArrow}
      />
    </View>
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
  OnBoarding1: {
    width: deviceWidth,
    height: moderateScale(340),
    ...styles.mb20,
  },
  Title1: {
    width: deviceWidth,
    textAlign: 'center',
    ...styles.ph30,
    ...styles.pt20,
  },
  DescStyle: {
    textAlign: 'center',
    width: moderateScale(350),
    ...styles.ph35,
    ...styles.pv20,
  },
  IndicatorStyle: {
    height: moderateScale(8),
    borderRadius: moderateScale(10),
    ...styles.mh5,
    ...styles.mb55,
  },
  CommonLgnBtn: {
    ...styles.center,
    borderRadius: moderateScale(20),
  },
  ParentSkipButton: {
    ...styles.selfEnd,
    ...styles.mr25,
  },
  SkipButton: {
    width: moderateScale(40),
    height: moderateScale(30),
    ...styles.mr40,
    backgroundColor: colors.white,
    ...styles.mb30,
  },
  ChildSkipBtn: {
    color: colors.skyBlue,
  },
});
