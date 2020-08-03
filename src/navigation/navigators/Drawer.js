import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import {SettingsModule} from '../../modules';
const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen
        name="Settings"
        component={SettingsModule.SettingsScreens.Settings}
      />
    </Drawer.Navigator>
  );
}
