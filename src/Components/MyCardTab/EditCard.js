import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

// Local imports
import images from '../../Assets/Images/index';
import {moderateScale} from '../../Common/constant';
import {styles} from '../../Themes';
import CHeader from '../../Components/Common/CHeader';
import {ManageData, switchData} from '../../Api/constants';
import CText from '../Common/CText';
import {colors} from '../../Themes/colors';
import CButton from '../Common/CButton';

const ListHeader = () => {
  const [data, setData] = useState(1);

  const renderSwitches = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          localStyles.outerComponent,
          {
            backgroundColor: data === item ? colors.white : colors.GreyScale,
            margin: data === item ? moderateScale(5) : moderateScale(5),
          },
        ]}
        onPress={() => setData(item)}>
        <CText
          type={'M14'}
          style={{color: data === item ? colors.black : colors.tabColor}}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <CHeader title={'New Card'} />

      <View style={localStyles.parent}>
        <Image source={images.card3} style={localStyles.imgSty} />
      </View>

      <View style={localStyles.parentColor}>
        <Image source={images.CardColor} style={localStyles.imgColorSty} />
      </View>

      <View style={localStyles.parentSwitch}>
        <FlatList
          data={switchData}
          scrollEnabled={false}
          renderItem={renderSwitches}
          horizontal
        />
      </View>
    </View>
  );
};

export default function EditCard() {
  const [selected, setSelected] = useState(ManageData);

  const renderManageData = ({item}) => {
    const ontoggle = () => {
      const newItem = selected.map(value => {
        if (value.id === item.id) {
          return {...value, selected: !value.selected};
        } else {
          return value;
        }
      });

      setSelected(newItem);
    };

    return (
      <View>
        <View style={localStyles.parentThreeData}>
          <View style={localStyles.mainContainer}>
            <Image source={item.image} style={localStyles.threeData} />
            <CText type={'S14'}>{item.name}</CText>
          </View>

          <Switch
            trackColor={{true: colors.Toggle}}
            value={item.selected}
            onValueChange={ontoggle}
          />
        </View>

        <View style={localStyles.forBorder}></View>
      </View>
    );
  };

  const ListFooter = () => {
    return <CButton text={'Save'} containerStyle={localStyles.CButtonTxt} />;
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <View style={localStyles.main}>
        <View>
          <FlatList
            data={selected}
            renderItem={renderManageData}
            ListHeaderComponent={<ListHeader />}
            ListFooterComponent={<ListFooter />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
  },
  imgSty: {
    width: moderateScale(327),
    height: moderateScale(190),
  },
  imgColorSty: {
    width: moderateScale(40),
    height: moderateScale(144),
  },
  parent: {
    ...styles.alignCenter,
    ...styles.mv20,
  },
  parentColor: {
    position: 'absolute',
    right: 0,
    top: moderateScale(110),
  },
  parentSwitch: {
    borderRadius: moderateScale(16),
    backgroundColor: colors.GreyScale,
  },
  outerComponent: {
    ...styles.ph24,
    ...styles.center,
    height: moderateScale(48),
    borderRadius: moderateScale(12),
  },
  phySty: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  threeData: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  parentThreeData: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.alignCenter,
    gap: moderateScale(20),
    ...styles.mv15,
    ...styles.p10,
  },
  forBorder: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.bottomBorder,
  },
  forGap: {
    gap: moderateScale(30),
  },
  mainContainer: {
    ...styles.flexRow,
    ...styles.alignCenter,
    gap: moderateScale(15),
  },
});
