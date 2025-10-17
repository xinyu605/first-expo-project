import { colors } from './colors';

export const lightPalette = {
  text: colors.neutral[9],
  background: colors.neutral[0],
  surface: colors.neutral[1],
  card: colors.neutral[0],
  
  // Interactive colors
  primary: colors.primary[6],
  primaryText: colors.neutral[0],
  secondary: colors.danger[5],
  secondaryText: colors.neutral[0],
  
  // UI elements
  border: colors.neutral[3],
  placeholder: colors.neutral[6],
  icon: colors.neutral[7],
  
  // Status colors
  success: colors.success[5],
  warning: colors.warning[5],
  danger: colors.danger[5],
  
  // Special states
  completed: colors.neutral[6],
  shadow: colors.neutral[9],
  
  // Tab colors
  tabIconDefault: colors.neutral[6],
  tabIconSelected: colors.primary[6],
  tint: colors.primary[6],
} as const;

export const darkPalette = {
  text: colors.neutral[0],
  background: colors.neutral[9],
  surface: colors.neutral[8],
  card: colors.neutral[8],
  
  // Interactive colors
  primary: colors.primary[4],
  primaryText: colors.neutral[0],
  secondary: colors.danger[4],
  secondaryText: colors.neutral[0],
  
  // UI elements
  border: colors.neutral[6],
  placeholder: colors.neutral[5],
  icon: colors.neutral[4],
  
  // Status colors
  success: colors.success[4],
  warning: colors.warning[4],
  danger: colors.danger[4],
  
  // Special states
  completed: colors.neutral[5],
  shadow: colors.neutral[9],
  
  // Tab colors
  tabIconDefault: colors.neutral[5],
  tabIconSelected: colors.primary[4],
  tint: colors.primary[4],
} as const;

export type LightPalette = typeof lightPalette;
export type DarkPalette = typeof darkPalette;
export type SemanticColor = keyof LightPalette;
