import * as React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import DemoButton from './DemoButton';
import images from '../../constants/images';
import metrics from '../../constants/metrics';
import { BlurView } from 'expo-blur';
import Animated from 'react-native-reanimated';

interface Icon {
  label: string;
  image: ImageSourcePropType;
}

const HomeScreen = () => {
  const [icons, setIcons] = React.useState<Icon[]>([
    { label: 'Carolina', image: images.panthersIcon },
    { label: 'Arizona', image: images.cardinalsIcon },
    { label: 'Los Angeles', image: images.ramsIcon },
    { label: 'New York', image: images.jetsIcon },
    { label: 'Tennessee', image: images.titansIcon },
    { label: 'Buffalo', image: images.billsIcon },
    { label: 'Philadelphia', image: images.eaglesIcon },
  ]);

  const onPressDeleteIcon = ({ icon }: { icon: Icon }) => {
    setIcons(icons.filter((i) => i.label !== icon.label));
  };
  return (
    <Animated.View
      style={{
        flex: 1,
        position: 'relative',
        paddingTop: 80,
        paddingHorizontal: 24,
        paddingBottom: 24,
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={images.homeScreenBG}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          height: metrics.windowHeight,
          width: metrics.windowWidth,
        }}
      />

      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',

          flexWrap: 'wrap',
          rowGap: 16,
          columnGap: 28,
        }}
      >
        {icons.map((mockedIcon) => {
          return (
            <DemoButton
              key={mockedIcon.label}
              label={mockedIcon.label}
              image={mockedIcon.image}
              onPressMenuItem={() => onPressDeleteIcon({ icon: mockedIcon })}
            />
          );
        })}
      </Animated.View>
      <View
        style={{
          borderRadius: 30,
          height: 98,
          width: 369,
          alignSelf: 'center',

          overflow: 'hidden',
        }}
      >
        <BlurView
          tint="default"
          style={{
            height: 98,
            width: 369,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 36,
          }}
        >
          <DemoButton image={images.lionsIcon} onPressMenuItem={() => null} />
          <DemoButton
            image={images.commandersIcon}
            onPressMenuItem={() => null}
          />
        </BlurView>
      </View>
    </Animated.View>
  );
};

export default HomeScreen;
