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
      <Stack.Screen
        name={AuthNav.PassRecovery}
        component={AuthRoute.PassRecovery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.VerifyIdentity}
        component={AuthRoute.VerifyIdentity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ItsYou}
        component={AuthRoute.ItsYou}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.CreatePass}
        component={AuthRoute.CreatePass}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
