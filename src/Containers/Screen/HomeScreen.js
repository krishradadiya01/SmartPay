import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

// Local imports
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import strings from '../../I18n/mergeString';
import CText from '../../Components/Common/CText';
import CNotification from '../../Components/Common/CNotification';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import Material from 'react-native-vector-icons/MaterialIcons';
import {HomeData} from '../../Api/constants';

const ListHeaderComponent = () => {
  const FirstImage = ({image, text}) => {
    return (
      <TouchableOpacity style={localStyles.parentDep}>
        <Image source={image} style={localStyles.childImg} />
        <CText style={localStyles.Txt}>{text}</CText>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={localStyles.main}>
        <View style={localStyles.mainParent}>
          <View>
            <CText color={colors.white} style={localStyles.WBTxt}>
              {strings.WB}
            </CText>
            <CText
              color={colors.white}
              type={'B18'}
              style={localStyles.AnnaTxt}>
              {strings.Anna}
            </CText>
          </View>

          <CNotification />
        </View>

        <View style={localStyles.ParentImg}>
          <Image source={images.cardBalance} style={localStyles.card3Style} />
        </View>
      </View>

      <View style={localStyles.mainImg}>
        <FirstImage image={images.Deposit} text={strings.Deposit} />
        <FirstImage image={images.Transfer} text={strings.Transfers} />
        <FirstImage image={images.Withdraw} text={strings.Withdraw} />
        <FirstImage image={images.More} text={strings.More} />
      </View>

      <View style={localStyles.parentTodayTxt}>
        <CText type={'B14'} color={colors.tabColor}>
          {strings.Today}
        </CText>

        <TouchableOpacity style={localStyles.parent}>
          <CText type={'M14'}>{strings.AllTrans}</CText>
          <Material
            name={'navigate-next'}
            color={colors.numbersColor}
            size={moderateScale(18)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const renderHomeData = ({item}) => {
    return (
      <TouchableOpacity style={localStyles.parentTrans}>
        <View style={localStyles.oneBox}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={localStyles.GymImg}
          />
          <View style={localStyles.mainCText}>
            <CText type={'B16'} style={localStyles.name}>
              {item.name}
            </CText>
            <CText color={colors.tabColor}>{item.subName}</CText>
          </View>
        </View>

        <View>
          <CText type={'B16'} color={item.color}>
            {item.dollars}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.mainContainerSurface]}>
      <FlatList
        data={HomeData}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderHomeData}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.Primary,
  },
  mainParent: {
    ...styles.mh20,
    ...styles.rowSpaceBetween,
  },
  WBTxt: {
    ...styles.mt20,
  },
  AnnaTxt: {
    ...styles.mt10,
  },
  parent: {
    ...styles.flexRow,
  },
  card3Style: {
    width: moderateScale(327),
    height: moderateScale(190),
  },
  ParentImg: {
    ...styles.center,
    top: moderateScale(63),
  },
  mainImg: {
    ...styles.rowSpaceAround,
    backgroundColor: colors.GreyScale,
    ...styles.mt85,
    ...styles.mh25,
    ...styles.p15,
    borderRadius: moderateScale(16),
  },
  childImg: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  parentDep: {
    ...styles.alignCenter,
  },
  Txt: {
    ...styles.pt10,
  },
  parentTodayTxt: {
    ...styles.mh25,
    ...styles.mv15,
    ...styles.rowSpaceBetween,
  },
  GymImg: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  parentTrans: {
    ...styles.mh25,
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    ...styles.ph20,
    ...styles.pv15,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.silver,
  },
  oneBox: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  mainCText: {
    ...styles.pl20,
  },
  name: {
    ...styles.pv5,
  },
});
