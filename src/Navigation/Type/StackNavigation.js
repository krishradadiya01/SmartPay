import {StyleSheet} from 'react-native';
import React from 'react';

// Local imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav} from '../navigationKeys';
import {StackRoute} from '../navigationRoute';
import {styles} from '../../Themes';
import {moderateScale} from '../../Common/constant';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
      <Stack.Screen
        name={StackNav.TransferProof}
        component={StackRoute.TransferProof}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.TopUpScreen}
        component={StackRoute.TopUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.Confirmation}
        component={StackRoute.Confirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.WithDrawBalance}
        component={StackRoute.WithDrawBalance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.HistoryTrans}
        component={StackRoute.HistoryTrans}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.HistoryDetails}
        component={StackRoute.HistoryDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.SeeMyCard}
        component={StackRoute.SeeMyCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.EditCard}
        component={StackRoute.EditCard}
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
