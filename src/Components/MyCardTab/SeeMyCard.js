import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

// Local imports
import {moderateScale} from '../../Common/constant';
import {styles} from '../../Themes';
import CHeader from '../Common/CHeader';
import CText from '../Common/CText';
import strings from '../../I18n/mergeString';
import {colors} from '../../Themes/colors';
import {StackNav} from '../../Navigation/navigationKeys';

export default function SeeMyCard({navigation, route}) {
  const cardList = route?.params?.item?.card;

  const moveToEdit = () => {
    navigation.navigate(StackNav.EditCard);
  };

  const renderCard = ({item}) => {
    return (
      <TouchableOpacity onPress={moveToEdit}>
        <Image source={item.image} style={localStyles.imgSty} />
      </TouchableOpacity>
    );
  };

  const ListFooterComponent = () => {
    return (
      <TouchableOpacity style={localStyles.mainContainer}>
        <Octicons name={'plus'} size={20} />
        <CText align={'center'} type={'B16'}>
          {strings.AddNewCard}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <CHeader title={'My Card'} />
      <FlatList
        data={cardList}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ListFooterComponent />}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
  },
  imgSty: {
    width: moderateScale(327),
    height: moderateScale(190),
    ...styles.selfCenter,
    ...styles.mt20,
  },
  mainContainer: {
    ...styles.mv30,
    height: moderateScale(56),
    backgroundColor: colors.GreyScale,
    borderRadius: moderateScale(16),
    ...styles.flexRow,
    ...styles.center,
    gap: moderateScale(5),
  },
});
