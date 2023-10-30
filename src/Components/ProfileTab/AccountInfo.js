import {SafeAreaView, StyleSheet, Image, View, Switch} from 'react-native';
import React, {useState} from 'react';

// Local imports
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import CHeader from '../Common/CHeader';
import {colors} from '../../Themes/colors';
import {styles} from '../../Themes';
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import CButton from '../../Components/Common/CButton';
import {StackNav} from '../../Navigation/navigationKeys';

export default function AccountInfo({navigation}) {
  const [close, open] = useState(true);

  const moveToEdit = () => {
    navigation.navigate(StackNav.EditAccount);
  };

  const ProfileDetails = ({question, answer}) => {
    return (
      <View style={localStyles.parentContainer}>
        <CText type={'M14'} color={colors.tabColor}>
          {question}
        </CText>
        <CText type={'M14'}>{answer}</CText>
      </View>
    );
  };

  const onValueChangeToggle = () => {
    open(!close);
  };
  return (
    <SafeAreaView style={localStyles.main}>
      <View style={styles.mh20}>
        <CHeader title={'Account Info'} />
        <Image source={images.EditPhoto} style={localStyles.imgSty} />
        <CText type={'B16'} color={colors.tabColor}>
          {strings.PersonalInfo}
        </CText>

        <View style={localStyles.parentComponent}>
          <ProfileDetails
            question={strings.YourName}
            answer={strings.Anna}
            color={colors.tabColor}
          />

          <ProfileDetails
            question={strings.Occupation}
            answer={strings.Students}
            color={colors.tabColor}
          />

          <ProfileDetails
            question={strings.Employer}
            answer={strings.OverlayDesign}
            color={colors.tabColor}
          />

          <View style={localStyles.parentContainer}>
            <CText type={'M14'} color={colors.tabColor}>
              {strings.USCitizen}
            </CText>
            <Switch
              trackColor={{true: colors.Toggle}}
              value={close}
              onValueChange={onValueChangeToggle}
            />
          </View>
        </View>

        <CText type={'B16'} color={colors.tabColor}>
          {strings.ContactInfo}
        </CText>

        <View style={localStyles.parentComponent}>
          <ProfileDetails
            question={strings.PhoneNumber}
            answer={strings.ProfileNumber}
            color={colors.tabColor}
          />

          <ProfileDetails
            question={strings.Email}
            answer={strings.AnnaEmail}
            color={colors.tabColor}
          />
        </View>

        <CButton
          onPress={moveToEdit}
          text={'Edit'}
          ChildLoginBtn={localStyles.childCompo}
          containerStyle={localStyles.CButton}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex
  },
  imgSty: {
    width: moderateScale(200),
    height: moderateScale(140),
    ...styles.selfCenter,
  },
  parentContainer: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mv20,
  },
  parentComponent: {
    ...styles.mv20,
    ...styles.ph15,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(16),
    borderColor: colors.bottomBorder,
  },
  CButton: {
    backgroundColor: colors.bottomBorder,
  },
  childCompo: {
    color: colors.black,
  },
});
