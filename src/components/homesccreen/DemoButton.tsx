import * as React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextNormal } from '../common/typography';
import Animated, {
  LinearTransition,
  SequencedTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { ExpoContextMenu } from '@appandflow/expo-context-menu';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
import images from '../../constants/images';
import AntDesign from '@expo/vector-icons/AntDesign';

const menuItemContent = [
  {
    icon: (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          flex: 1,
        }}
      >
        <AntDesign name="appstore-o" size={20} color="black" />
        <Image
          source={images.widget1}
          style={{ height: 20, width: 20, marginLeft: 30 }}
        />
        <Image
          source={images.widget2}
          style={{ height: 20, objectFit: 'contain', marginLeft: 16 }}
        />
        <Image
          source={images.widget3}
          style={{
            height: 20,
            width: 20,
            objectFit: 'contain',
            marginRight: 1,
          }}
        />
      </View>
    ),
  },
  {
    label: 'Edit Home Screen',
    icon: (
      <SimpleLineIcons
        name="screen-smartphone"
        size={16}
        color="black"
        style={{ marginRight: 3 }}
      />
    ),
    redText: false,
  },
  {
    label: 'Share App',
    icon: (
      <Feather
        name="upload"
        size={16}
        color="black"
        style={{ marginRight: 2 }}
      />
    ),
    redText: false,
  },
  {
    label: 'Require Face ID',
    icon: (
      <Image source={images.faceidIcon} style={{ height: 20, width: 20 }} />
    ),
    redText: false,
  },
  {
    label: 'Remove App',
    icon: <Feather name="minus-circle" size={18} color="red" />,
    redText: true,
  },
];

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

  const CustomMenuItem = ({
    label,
    icon,
    redText,
    isLast,
    onPressItem,
  }: {
    label?: string;
    icon: React.ReactElement;
    redText?: boolean;
    isLast?: boolean;
    onPressItem?: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPressItem}
        style={{
          paddingVertical: 11,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: isLast ? 0 : 0.8,
          borderBottomColor: '#8080808C',
        }}
      >
        {label && (
          <TextNormal
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: redText ? 'red' : 'black',
            }}
          >
            {label}
          </TextNormal>
        )}
        {icon}
      </TouchableOpacity>
    );
  };

  const MenuToRender = ({
    onPressMenuItem,
  }: {
    onPressMenuItem: () => void;
  }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#B3B3B3D1',
        }}
      >
        {menuItemContent.map((menuItem, i) => {
          return (
            <CustomMenuItem
              key={`${i}`}
              label={menuItem.label}
              icon={menuItem.icon}
              redText={menuItem.redText}
              isLast={i === menuItemContent.length - 1}
              onPressItem={onPressMenuItem}
            />
          );
        })}
      </View>
    );
  };

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
