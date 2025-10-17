import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@/hooks/useTheme';
import { fontSizes, fontWeights, spacing } from '@/theme';

import type { ButtonSize, ButtonVariant } from './types';

type Props = {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onPress?: () => void;
  style?: object;
};

const ThemedButton = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onPress,
  style,
}: Props) => {
  const { colors } = useTheme();

  const getButtonStyle = () => {
    const baseStyle = {
      borderRadius: spacing[2],
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    };

    const sizeStyles = {
      small: {
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[2],
      },
      medium: {
        paddingHorizontal: spacing[4],
        paddingVertical: spacing[3],
      },
      large: {
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: disabled ? colors.border : colors.primary,
      },
      secondary: {
        backgroundColor: disabled ? colors.border : colors.secondary,
      },
      danger: {
        backgroundColor: disabled ? colors.border : colors.danger,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getTextStyle = () => {
    const baseTextStyle = {
      fontWeight: fontWeights.semibold,
    };

    const sizeTextStyles = {
      small: {
        fontSize: fontSizes.sm,
      },
      medium: {
        fontSize: fontSizes.base,
      },
      large: {
        fontSize: fontSizes.lg,
      },
    };

    const variantTextStyles = {
      primary: {
        color: disabled ? colors.placeholder : colors.primaryText,
      },
      secondary: {
        color: disabled ? colors.placeholder : colors.secondaryText,
      },
      danger: {
        color: disabled ? colors.placeholder : colors.primaryText,
      },
    };

    return {
      ...baseTextStyle,
      ...sizeTextStyles[size],
      ...variantTextStyles[variant],
    };
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={onPress}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;
export type { ButtonSize, ButtonVariant } from './types';

