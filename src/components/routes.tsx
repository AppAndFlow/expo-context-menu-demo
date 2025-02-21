import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import WelcomeScreen from './welcome/WelcomeScreen';
import HomeScreen from './homesccreen/HomeScreen';

export const routes = {
  WelcomeScreen: {
    name: 'WelcomeScreen',
    screen: WelcomeScreen,
  },
  HomeScreen: {
    name: 'HomeScreen',
    screen: HomeScreen,
  },
} as Record<
  string,
  {
    name: string;
    screen: React.ComponentType<any>;
    screenNavigationOptions?: NativeStackNavigationOptions;
  }
>;
