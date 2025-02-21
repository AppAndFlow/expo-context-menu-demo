import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { ExpoContextMenu } from '@appandflow/expo-context-menu';

import MenuToRender from './MenuToRender';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

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

  const onPressInButton = () => {
    buttonScale.value = withSpring(1.3);
  };

  const onPressOutButton = () => {
    buttonScale.value = withSpring(1);
  };

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  return (
    <Animated.View layout={LinearTransition} style={{ alignItems: 'center' }}>
      <ExpoContextMenu
        renderMenu={() => <MenuToRender onPressMenuItem={onPressMenuItem} />}
      >
        <AnimatedTouchable
          activeOpacity={1}
          onPressIn={onPressInButton}
          onPressOut={onPressOutButton}
        >
          <Animated.Image
            source={image}
            style={[
              animatedButtonStyle,
              {
                height: 60,
                width: 60,
                borderRadius: 10,
              },
            ]}
          />
        </AnimatedTouchable>
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
