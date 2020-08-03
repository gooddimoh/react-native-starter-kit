import * as React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useRecoilValue} from 'recoil';

import AuthStack from './AuthStack';
import AppDrawer from './Drawer';
import {AuthModule} from '../../modules';

export default function AppNavigator() {
  const scheme = useColorScheme();
  const useToken = useRecoilValue(AuthModule.AuthRecoil.userToken);
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {useToken == null ? <AuthStack /> : <AppDrawer />}
    </NavigationContainer>
  );
}
