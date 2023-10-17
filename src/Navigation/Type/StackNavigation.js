import {StyleSheet} from 'react-native';
import React from 'react';
import useNavigation from '@react-navigation/native';

// Local imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav, TabNav} from '../navigationKeys';
import {StackRoute} from '../navigationRoute';
import {styles} from '../../Themes';
import {moderateScale} from '../../Common/constant';
import CBackButton from '../../Components/Common/CBackButton';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const moveToHome = () => {
    navigation.navigate(TabNav.HomeScreen);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackNav.splash}
        component={StackRoute.splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.OnBoarding}
        component={StackRoute.OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.AuthNavigation}
        component={StackRoute.AuthNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.TabNavigation}
        component={StackRoute.TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.TransferMoney}
        component={StackRoute.TransferMoney}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.SendMoney}
        component={StackRoute.SendMoney}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const localStyle = StyleSheet.create({
  CBackButton: {
    ...styles.mb15,
    bottom: moderateScale(10),
  },
});

export default StackNavigation;
