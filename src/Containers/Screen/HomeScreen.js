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
import {HomeData} from '../../Api/constants';
import {StackNav} from '../../Navigation/navigationKeys';

export default function HomeScreen({navigation}) {
  const moveToTrans = () => {
    navigation.navigate(StackNav.TransferMoney);
  };

  const moveToDeposit = () => {
    navigation.navigate(StackNav.TopUpScreen);
  };

  const moveToWith = () => {
    navigation.navigate(StackNav.WithDrawBalance);
  };

  const moveToAll = () => {
    navigation.navigate(StackNav.HistoryTrans);
  };

  const moveToNot = () => {
    navigation.navigate(StackNav.Notification);
  };
  const ListHeaderComponent = () => {
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

            <CNotification onPress={moveToNot} />
          </View>

          <View style={localStyles.ParentImg}>
            <Image source={images.cardBalance} style={localStyles.card3Style} />
          </View>
        </View>

        <View style={localStyles.mainImg}>
          <FirstImage
            image={images.Deposit}
            text={strings.Deposit}
            onPress={moveToDeposit}
          />
          <FirstImage
            image={images.Transfer}
            text={strings.Transfers}
            onPress={moveToTrans}
          />
          <FirstImage
            image={images.Withdraw}
            text={strings.Withdraw}
            onPress={moveToWith}
          />
          <FirstImage image={images.More} text={strings.More} />
        </View>

        <View style={localStyles.parentTodayTxt}>
          <CText type={'B14'} color={colors.tabColor}>
            {strings.Today}
          </CText>

          <TouchableOpacity onPress={moveToAll}>
            <CText type={'M14'}>{strings.AllTrans}</CText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const FirstImage = ({image, text, onPress}) => {
    return (
      <TouchableOpacity style={localStyles.parentDep} onPress={onPress}>
        <Image source={image} style={localStyles.childImg} />
        <CText style={localStyles.Txt}>{text}</CText>
      </TouchableOpacity>
    );
  };
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
