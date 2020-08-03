import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {RecoilRoot} from 'recoil';
import {AppNavigator} from './navigation';

function App({navigation}) {
  //hide splash screen
  React.useEffect(() => SplashScreen.hide(), []);

  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </RecoilRoot>
  );
}

export default App;
