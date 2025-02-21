import * as React from 'react';
import { Image, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
import images from '../../constants/images';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomMenuItem from './CustomMenuItem';

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
    isPressable: false,
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
    isPressable: false,
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
    isPressable: false,
  },
  {
    label: 'Require Face ID',
    icon: (
      <Image source={images.faceidIcon} style={{ height: 20, width: 20 }} />
    ),
    redText: false,
    isPressable: false,
  },
  {
    label: 'Remove App',
    icon: <Feather name="minus-circle" size={18} color="red" />,
    redText: true,
    isPressable: true,
  },
];

const MenuToRender = ({ onPressMenuItem }: { onPressMenuItem: () => void }) => {
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
            onPressItem={menuItem.isPressable ? onPressMenuItem : () => null}
          />
        );
      })}
    </View>
  );
};

export default MenuToRender;
