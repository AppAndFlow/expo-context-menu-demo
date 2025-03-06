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
  const buttonScale = useSharedValue(0);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  const itemScale = 1.2;

  return (
    <Animated.View
      layout={LinearTransition.delay(300)}
      exiting={ZoomOut}
      style={{ alignItems: 'center' }}
    >
      <ExpoContextMenu
        itemScaleOnMenuOpen={itemScale}
        renderMenu={() => <MenuToRender onPressMenuItem={onPressMenuItem} />}
      >
        <Animated.View style={animatedButtonStyle}>
          <Animated.Image source={image} style={{ height: 60, width: 60 }} />
        </Animated.View>
      </ExpoContextMenu>

      {label && (
        <Animated.Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            textAlign: 'center',
            paddingTop: 4,
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
