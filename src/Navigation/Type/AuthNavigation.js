import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav} from '../navigationKeys';
import {StackRoute} from '../navigationRoute';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackNav.SignUpEmpty}
        component={StackRoute.SignUpEmpty}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
