import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import ActionSheet, {FlatList} from 'react-native-actions-sheet';
import Fonisto from 'react-native-vector-icons/Fontisto';
import Community from 'react-native-vector-icons/MaterialCommunityIcons';

// Local imports
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import {styles} from '../../Themes/index';
import CText from '../Common/CText';
import {colors} from '../../Themes/colors';
import {LocationData} from '../../Api/constants';
import CButton from '../Common/CButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Location(props) {
  let {sheetRef} = props;

  const renderData = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={localStyles.mainComponent}>
          <Image style={localStyles.imageStyle} source={item.image} />
          <CText align={'center'} type={'M12'} color={colors.black}>
            {item.reviews}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };

  const cancelModel = () => {
    sheetRef.current?.hide();
  };

  return (
    <View>
      <ActionSheet containerStyle={localStyles.actionSheet} ref={sheetRef}>
        <View style={localStyles.mainContainer}>
          <Image source={images.ATMPhoto} style={localStyles.imgSty} />

          <View style={localStyles.outerComponent}>
            <View style={{gap: moderateScale(7)}}>
              <CText
                color={colors.black}
                style={localStyles.BOATxt}
                type={'B24'}>
                {strings.BOA}
              </CText>
              <CText color={colors.black} type={'M12'}>
                {strings.BOALine}
              </CText>
            </View>

            <Fonisto name={'bookmark'} size={24} color={colors.black} />
          </View>

          <View style={localStyles.outerContainer}>
            <FlatList horizontal data={LocationData} renderItem={renderData} />
          </View>

          <CButton
            onPress={cancelModel}
            text={'Get Direction'}
            containerStyle={localStyles.buttonContainer}
            RightIcon={() => (
              <Community
                size={24}
                name={'arrow-u-right-top'}
                color={colors.white}
              />
            )}
          />
        </View>
      </ActionSheet>
    </View>
  );
}

const localStyles = StyleSheet.create({
  imgSty: {
    width: moderateScale(330),
    height: moderateScale(180),
    ...styles.selfCenter,
  },
  actionSheet: {
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  mainContainer: {
    ...styles.m20,
  },
  BOATxt: {
    ...styles.mt30,
  },
  outerComponent: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
  },
  imageStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  mainComponent: {
    gap: moderateScale(10),
    ...styles.justifyEvenly,
    ...styles.alignCenter,
    ...styles.p15,
    ...styles.mh5,
    width: moderateScale(101),
    height: moderateScale(106),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(16),
    borderColor: colors.bottomBorder,
  },
  outerContainer: {
    ...styles.mt25,
  },
  buttonContainer: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.ph20,
  },
});
