import React from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

import ErrorHandler from './common/ErrorHandler';
import images from '../constants/images';
import { fontsMap } from '../constants/fonts';
import { rootStore } from '../stores';
import AppContent from './AppContent';

import { ExpoContextMenuProvider } from '@appandflow/expo-context-menu';

export const StoreContext = React.createContext<typeof rootStore>(rootStore);

/**
 * This is the app entry Point.
 */
const App = () => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    const { icons, ...rest } = images;
    await Promise.all([
      Asset.loadAsync(Object.values(icons)),
      Asset.loadAsync(Object.values(rest as any) as any),
      Font.loadAsync({
        ...fontsMap,
      }),
    ]);
    setReady(true);
    await SplashScreen.hideAsync();
  };

  return ready ? (
    <StoreContext.Provider value={rootStore}>
      <SafeAreaProvider>
        <ExpoContextMenuProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <AppContent />
            </NavigationContainer>
          </GestureHandlerRootView>
        </ExpoContextMenuProvider>
      </SafeAreaProvider>
    </StoreContext.Provider>
  ) : (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
  );
};

export default () => (
  <ErrorHandler>
    <App />
  </ErrorHandler>
);
