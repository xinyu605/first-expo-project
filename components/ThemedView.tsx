/* eslint-disable no-restricted-imports */
import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedView = ({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) => {
  const { colors, isDark } = useTheme();
  
  const getBackgroundColor = (): string => {
    if (isDark && darkColor) return darkColor;
    if (!isDark && lightColor) return lightColor;
    return colors.background;
  };

  const backgroundColor = getBackgroundColor();

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default ThemedView;
