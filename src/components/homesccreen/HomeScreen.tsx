import * as React from 'react';
import { Image, View } from 'react-native';
import DemoButton from './DemoButton';
import images from '../../constants/images';
import metrics from '../../constants/metrics';
import { BlurView } from 'expo-blur';

const mockedIcons = [
  { label: 'Arizona', image: images.cardinalsIcon },
  { label: 'Carolina', image: images.panthersIcon },
  { label: 'Los Angeles', image: images.ramsIcon },
  { label: 'Detroit', image: images.lionsIcon },
  { label: 'Texas', image: images.titansIcon },
];

const HomeScreen = () => {
  return (
    <View
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {mockedIcons.map((mockedIcon, i) => {
          return (
            <DemoButton
              key={i}
              label={mockedIcon.label}
              image={mockedIcon.image}
            />
          );
        })}
      </View>
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
          <DemoButton image={images.safariIcon} />
          <DemoButton image={images.messageIcon} />
        </BlurView>
      </View>
    </View>
  );
};

export default HomeScreen;
