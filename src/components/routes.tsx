import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import WelcomeScreen from './welcome/WelcomeScreen';

export const routes = {
  WelcomeScreen: {
    name: 'WelcomeScreen',
    screen: WelcomeScreen,
  },
} as Record<
  string,
  {
    name: string;
    screen: React.ComponentType<any>;
    screenNavigationOptions?: NativeStackNavigationOptions;
  }
>;
