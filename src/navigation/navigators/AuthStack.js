import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthModule} from '../../modules';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={AuthModule.AuthenticationScreens.SignIn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
