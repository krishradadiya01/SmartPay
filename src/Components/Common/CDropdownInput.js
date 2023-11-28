import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

// Local imports
import {styles} from '../../Themes';
import {colors} from '../../Themes/colors';
import {moderateScale} from '../../Common/constant';

export default function CDropdownInput(props) {
  const {data, placeholder, value, onChange} = props;

  console.log(data, value);
  return (
    <View>
      <Dropdown
        style={localStyles.dropdownStyle}
        data={data}
        value={value}
        maxHeight={moderateScale(180)}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={localStyles.dropdownPlaceholder}
        onChange={onChange}
        selectedTextStyle={localStyles.miniContainer}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  dropdownStyle: {
    ...styles.justifyCenter,
    color: colors.numbersColor,
  },
  dropdownPlaceholder: {
    color: colors.black,
  },
  labelContainer: {
    ...styles.mh5,
  },
  miniContainer: {
    color: colors.Green,
  },
});
