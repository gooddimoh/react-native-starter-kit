import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import {SettingsScreens} from '../../modules/settings';
const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsScreens.Settings} />
    </Drawer.Navigator>
  );
}
