import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNav} from '../navigationKeys';
import {AuthRoute} from '../navigationRoute';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthNav.SignUpEmpty}
        component={AuthRoute.SignUpEmpty}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
