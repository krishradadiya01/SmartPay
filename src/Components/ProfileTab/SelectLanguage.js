import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Local imports
import CHeader from '../Common/CHeader';
import {styles} from '../../Themes/index';
import CTextInput from '../Common/CTextInput';
import typography from '../../Themes/typography';
import {colors} from '../../Themes/colors';
import KeyboardAvoidWrapper from '../../Components/Common/KeyBoardAvoidWrapper';
import {LanguageData} from '../../Api/constants';
import CText from '../Common/CText';
import {moderateScale} from '../../Common/constant';

export default function SelectLanguage() {
  const [data, setData] = useState(1);
  const [filterData, setFilterData] = useState(LanguageData);
  const [search, setSearch] = useState('');

  const onChangeSearch = text => setSearch(text);

  useEffect(() => {
    countriesSearch();
  }, [search]);

  const countriesSearch = () => {
    if (search) {
      const newData = LanguageData.filter(item => {
        return (
          item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
        );
      });
      setFilterData(newData);
    } else setFilterData(LanguageData);
  };

  const valueChange = item => {
    setData(item.id);
  };

  const renderLanguageData = ({item}) => {
    return (
      <TouchableOpacity
        style={localStyles.outerContainer}
        onPress={() => valueChange(item)}>
        {item?.svgIcon}
        <View style={localStyles.radioSty}>
          <CText color={colors.black} type={'S16'}>
            {item.name}
          </CText>

          {data === item.id ? (
            <AntDesign color={colors.black} name={'checkcircle'} size={20} />
          ) : (
            <Ionicons
              name={'radio-button-off'}
              size={20}
              color={colors.google}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={localStyles.main}>
      <KeyboardAvoidWrapper>
        <View style={styles.mh20}>
          <CHeader color={colors.black} title={'Select Language'} />
          <CTextInput
            mainTxtInp={localStyles.outerComponent}
            textInputStyle={localStyles.CTxtInp}
            value={search}
            onChangeText={onChangeSearch}
            text={'Search'}
            LeftIcon={() => (
              <EvilIcons color={colors.black} name={'search'} size={35} />
            )}
          />

          <View style={localStyles.parentComponent}>
            <FlatList data={filterData} renderItem={renderLanguageData} />
          </View>
        </View>
      </KeyboardAvoidWrapper>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    ...styles.flex,
  },
  CTxtInp: {
    ...styles.pl10,
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Regular,
  },
  outerComponent: {
    ...styles.ph15,
    backgroundColor: colors.GreyScale,
    ...styles.mv20,
  },
  outerContainer: {
    ...styles.flexRow,
    ...styles.m11,
    ...styles.p10,
    gap: moderateScale(20),
  },
  parentComponent: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    borderColor: colors.bottomBorder,
  },
  radioSty: {
    ...styles.flex,
    ...styles.flexRow,
    ...styles.justifyBetween,
  },
});
