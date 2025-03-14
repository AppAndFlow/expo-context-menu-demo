import { Text, TextProps, TextStyle } from 'react-native';
import * as React from 'react';

import colors from '../../constants/colors';

interface A {
  children: React.ReactNode;
  style?: TextStyle;
}

type P = A & Partial<TextProps>;

/**
 * for adding a font, in style
 * fontFamily: fonts.openSansRegular
 */
export const TextNormal = ({ children, style, ...rest }: P) => (
  <BasicText {...rest} style={[{ fontSize: 36, color: colors.white }, style]}>
    {children}
  </BasicText>
);

/**
 * Every text created should wrap this basic component.
 * Use it to centralize stuff that you want to apply to any Text
 * Component created in Typography.
 * I.E: allowFontScaling={false}
 */
const BasicText = (props: P) => <Text allowFontScaling={false} {...props} />;
