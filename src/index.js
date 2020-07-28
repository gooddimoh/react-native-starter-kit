import * as React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SplashScreen from 'react-native-splash-screen';
import {
  AuthContext,
  AUTH_INITIAL_STATE,
  AuthReducer,
  authContextValue,
} from './contexts';
import {Navigators} from './navigation';

function App({navigation}) {
  const scheme = useColorScheme();

  const [state, dispatch] = React.useReducer(AuthReducer, AUTH_INITIAL_STATE);

  const authContext = React.useMemo(() => authContextValue(dispatch), []);

  //hide splash screen
  React.useEffect(() => SplashScreen.hide(), []);

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          {state.userToken == null ? (
            <Navigators.AuthStack />
          ) : (
            <Navigators.AppDrawer />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}

export default App;
