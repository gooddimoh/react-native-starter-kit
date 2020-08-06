import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useRecoilValue} from 'recoil';

import AuthStack from './AuthStack';
import AppDrawer from './Drawer';
import {AuthModule} from '../../modules';
import {darkTheme, defaultTheme} from '../../theme/colors';

export default function AppNavigator() {
  const scheme = useColorScheme();
  const useToken = useRecoilValue(AuthModule.AuthRecoil.userToken);
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : defaultTheme}>
      {useToken == null ? <AuthStack /> : <AppDrawer />}
    </NavigationContainer>
  );
}
