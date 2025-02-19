import React from 'react';
import { View } from 'react-native';

import { TextNormal } from '../common/typography';

/**
 * You will mostlikely delete this screen.
 * See routes.tsx to add new screens.
 */
const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}
    >
      <TextNormal>Welcome</TextNormal>
    </View>
  );
};

export default WelcomeScreen;
