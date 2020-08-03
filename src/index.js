import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {RecoilRoot} from 'recoil';
import {AppNavigator} from './navigation';
import {ErrorBoundary} from './components';

function App({navigation}) {
  //hide splash screen
  React.useEffect(() => SplashScreen.hide(), []);

  return (
    <RecoilRoot>
      <ErrorBoundary>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
