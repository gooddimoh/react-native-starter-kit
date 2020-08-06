import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeModule} from '../../modules';
import {Icon} from '../../atoms';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{
        headerShown: false,
      }}>
      {() => (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeModule.HomeScreens.Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon type="AntDesign" name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={HomeModule.HomeScreens.Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <Icon
                  type="AntDesign"
                  name="profile"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default HomeStack;
