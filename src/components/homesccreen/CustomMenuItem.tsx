import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextNormal } from '../common/typography';

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

export default CustomMenuItem;
