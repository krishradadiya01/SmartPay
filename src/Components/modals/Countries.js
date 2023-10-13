import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// Local imports
import ActionSheet from 'react-native-actions-sheet';
import {colors} from '../../Themes/colors';
import {CountriesData} from '../../Api/constants';
import {moderateScale} from '../../Common/constant';
import {styles} from '../../Themes';
import CTextInput from '../Common/CTextInput';
import CText from '../Common/CText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MetarialIcon from 'react-native-vector-icons/MaterialIcons';
import strings from '../../I18n/mergeString';

export default function Countries(props) {
  const [data, setData] = useState(false);
  const [filterData, setFilterData] = useState(CountriesData);
  const [search, setSearch] = useState('');

  let {sheetRef, selectedCountry} = props;

  useEffect(() => {
    setFilterSearch();
  }, [search]);

  const setFilterSearch = () => {
    if (search) {
      const newData = CountriesData.filter(item => {
        return (
          item.FullName.toLocaleLowerCase().indexOf(
            search.toLocaleLowerCase(),
          ) > -1
        );
      });
      setFilterData(newData);
    } else {
      setFilterData(CountriesData);
    }
  };

  const CancelButton = () => {
    sheetRef.current?.hide();
    setFilterData(CountriesData);
  };

  const onPressCountry = itm => {
    setData(itm.id);
    selectedCountry(itm);
  };

  const onChangeSearch = text => setSearch(text);

  const renderItems = ({item}) => {
    return (
      <View
        style={[
          localStyles.mainParent,
          {
            backgroundColor: data == item.id ? colors.GreyScale : colors.white,
          },
        ]}>
        <TouchableOpacity
          style={[
            localStyles.main,
            {
              backgroundColor:
                data == item.id ? colors.GreyScale : colors.white,
            },
          ]}
          onPress={() => onPressCountry(item)}>
          {item.svgIcon ? item.svgIcon : <Image source={{uri: item}} />}
          <CText style={localStyles.title}>{item.title}</CText>

          <View style={localStyles.mainImg}>
            <CText type={'B16'} style={localStyles.FullName}>
              {item.FullName}
            </CText>
          </View>
        </TouchableOpacity>

        {data === item.id ? (
          <MetarialIcon name={'done'} color={colors.SignUpTxt} size={24} />
        ) : null}
      </View>
    );
  };

  return (
    <ActionSheet
      ref={sheetRef}
      style={localStyles.main}
      containerStyle={localStyles.actionSheet}>
      <View style={localStyles.parentCTxtInp}>
        <CTextInput
          text={'Search'}
          value={search}
          onChangeText={onChangeSearch}
          mainTxtInp={localStyles.parentTxtInp}
          LeftIcon={() => (
            <Ionicons
              name={'search-outline'}
              size={moderateScale(22)}
              color={colors.grayText}
              style={styles.ml15}
            />
          )}
        />

        <TouchableOpacity
          style={localStyles.parentCancel}
          onPress={CancelButton}>
          <CText type={'B18'}>{strings.Cancel}</CText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterData}
        renderItem={renderItems}
        scrollEnabled={false}
      />
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  mainParent: {
    ...styles.mh15,
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.justifyBetween,
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
  },
  main: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.ml15,
    height: moderateScale(64),
    width: moderateScale(300),
  },
  flagStyle: {
    width: moderateScale(32),
    height: moderateScale(24),
  },
  parentTxtInp: {
    backgroundColor: colors.GreyScale,
    width: moderateScale(258),
    ...styles.ml20,
  },
  parentCTxtInp: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  parentCancel: {
    ...styles.pt15,
    ...styles.pl15,
  },
  title: {
    ...styles.ml20,
    color: colors.ShortName,
  },
  FullName: {
    ...styles.mh20,
    ...styles.justifyBetween,
  },
  actionSheet: {
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  checkImg: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  mainImg: {
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
});