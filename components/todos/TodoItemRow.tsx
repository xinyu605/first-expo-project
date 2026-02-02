import React from 'react';
import { TouchableOpacity } from 'react-native';

import ThemedButton from '@/components/common/ThemedButton';
import type { DarkPalette, LightPalette } from '@/theme';

import {
  StyledCheckbox,
  StyledCheckmark,
  StyledTodoItem,
  StyledTodoTitle,
} from './styled';
import type { TodoItem } from './types';

export type Props = {
  item: TodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onNavigateToDetail?: (item: TodoItem) => void;
  colors: LightPalette | DarkPalette;
};

const TodoItemRow = React.memo(
  ({ item, onToggle, onDelete, onNavigateToDetail, colors }: Props) => (
    <StyledTodoItem $cardColor={colors.card} $shadowColor={colors.shadow}>
      <TouchableOpacity onPress={() => onToggle(item.id)} activeOpacity={0.7}>
        <StyledCheckbox
          $borderColor={colors.border}
          $isCompleted={item.completed}
          $primaryColor={colors.primary}
        >
          {item.completed && (
            <StyledCheckmark $color={colors.primaryText}>✓</StyledCheckmark>
          )}
        </StyledCheckbox>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => (onNavigateToDetail ? onNavigateToDetail(item) : onToggle(item.id))}
        activeOpacity={0.7}
      >
        <StyledTodoTitle $color={colors.text} $completed={item.completed}>
          {item.title}
        </StyledTodoTitle>
      </TouchableOpacity>
      <ThemedButton
        title="刪除"
        onPress={() => onDelete(item.id)}
        variant="danger"
        size="small"
      />
    </StyledTodoItem>
  )
);

TodoItemRow.displayName = 'TodoItemRow';

export default TodoItemRow;
