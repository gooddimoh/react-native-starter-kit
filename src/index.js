import * as React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreens} from './modules/home';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

function App() {
  const scheme = useColorScheme();

  //hide splash screen
  React.useEffect(() => SplashScreen.hide(), []);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreens.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
