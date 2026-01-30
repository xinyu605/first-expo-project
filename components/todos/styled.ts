import { Text as RNText, TouchableOpacity } from 'react-native';
import { styled } from 'styled-components/native';

import { fontSizes, fontWeights, spacing } from '@/theme';

import { TODO_ITEM_HEIGHT } from './types';

export const StyledTodoItem = styled.View<{
  $cardColor: string;
  $shadowColor: string;
}>`
  flex-direction: row;
  align-items: center;
  padding: ${spacing[4]}px;
  margin-bottom: ${spacing[2]}px;
  border-radius: ${spacing[2]}px;
  height: ${TODO_ITEM_HEIGHT}px;
  background-color: ${(p) => p.$cardColor};
  shadow-color: ${(p) => p.$shadowColor};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const StyledTodoContent = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckbox = styled.View<{
  $borderColor: string;
  $isCompleted: boolean;
  $primaryColor: string;
}>`
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-radius: ${spacing[3]}px;
  margin-right: ${spacing[3]}px;
  justify-content: center;
  align-items: center;
  border-color: ${(p) =>
    p.$isCompleted ? p.$primaryColor : p.$borderColor};
  background-color: ${(p) =>
    p.$isCompleted ? p.$primaryColor : 'transparent'};
`;

export const StyledCheckmark = styled(RNText)<{ $color: string }>`
  font-size: ${fontSizes.base}px;
  font-weight: ${fontWeights.bold};
  color: ${(p) => p.$color};
`;

export const StyledTodoTitle = styled(RNText)<{
  $color: string;
  $completed: boolean;
}>`
  flex: 1;
  font-size: ${fontSizes.base}px;
  color: ${(p) => p.$color};
  text-decoration-line: ${(p) =>
    p.$completed ? 'line-through' : 'none'};
`;
