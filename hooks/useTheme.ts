import { useColorScheme } from 'react-native';

import { darkPalette, lightPalette } from '@/theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return {
    colors: isDark ? darkPalette : lightPalette,
    isDark,
    colorScheme,
  };
};
