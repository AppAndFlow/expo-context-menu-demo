import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  ZoomOut,
} from 'react-native-reanimated';
import { ExpoContextMenu } from '@appandflow/expo-context-menu';

import MenuToRender from './MenuToRender';

const DemoButton = ({
  label,
  image,
  onPressMenuItem,
}: {
  label?: string;
  image: ImageSourcePropType;
  onPressMenuItem: () => void;
}) => {
  const buttonScale = useSharedValue(1);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  const onPressInButton = () => {
    buttonScale.value = withSpring(1.2);
  };

  const onPressOutButton = () => {
    buttonScale.value = withSpring(1);
  };

  return (
    <Animated.View
      layout={LinearTransition.delay(300)}
      exiting={ZoomOut}
      style={{ alignItems: 'center' }}
    >
      <Animated.View style={animatedButtonStyle}>
        <ExpoContextMenu
          onMenuOpen={onPressInButton}
          onMenuClose={onPressOutButton}
          itemScaleOnMenuOpen={1.2}
          renderMenu={() => <MenuToRender onPressMenuItem={onPressMenuItem} />}
        >
          <Animated.Image source={image} style={{ height: 60, width: 60 }} />
        </ExpoContextMenu>
      </Animated.View>
      {label && (
        <Animated.Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            textAlign: 'center',
            marginTop: 4,
            color: 'white',
          }}
        >
          {label}
        </Animated.Text>
      )}
    </Animated.View>
  );
};

export default DemoButton;
