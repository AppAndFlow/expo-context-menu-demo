import * as React from 'react';
import { View } from 'react-native';

import NotificationHandler from './common/NotificationHandler';
import OTAManager from './common/OTAManager';
import AppNavigator from './AppNavigator';

/**
 * This is where we add anything related to the content of the App
 * SplashScreen, Modal views etc...
 */
const AppContent = () => {
  const [isDataLoading, setIsDataLoading] = React.useState(true);

  React.useEffect(() => {
    const maybeAuthUser = async () => {
      setIsDataLoading(false);
    };
    maybeAuthUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NotificationHandler />
      <OTAManager />
      {!isDataLoading && <AppNavigator />}
    </View>
  );
};

export default AppContent;
