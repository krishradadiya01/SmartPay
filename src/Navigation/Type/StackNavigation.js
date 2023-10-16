import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav} from '../navigationKeys';
import {StackRoute} from '../navigationRoute';

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
    </Stack.Navigator>
  );
};

export default StackNavigation;
