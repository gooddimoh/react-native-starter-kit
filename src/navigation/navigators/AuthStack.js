import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthenticationScreens} from '../../modules/authentication';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={AuthenticationScreens.SignIn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
