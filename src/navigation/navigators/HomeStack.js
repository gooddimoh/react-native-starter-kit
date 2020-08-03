import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {HomeModule} from '../../modules';

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
        <Tab.Navigator
          initialRouteName="Analytics"
          tabBar={(props) => {
            const backgroundColor = ['#ffffff', '#311380'];
            return (
              <BottomTabBar
                {...props}
                style={{backgroundColor: backgroundColor[props.state.index]}}
              />
            );
          }}>
          <Tab.Screen
            name="Analytics"
            component={HomeModule.HomeScreens.Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={HomeModule.HomeScreens.Demo}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
              tabBarBadge: 3,
            }}
          />
        </Tab.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default HomeStack;
