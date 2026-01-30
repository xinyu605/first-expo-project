import React from 'react';

import ThemedButton from '@/components/common/ThemedButton';
import type { DarkPalette, LightPalette } from '@/theme';

import {
  StyledCheckbox,
  StyledCheckmark,
  StyledTodoContent,
  StyledTodoItem,
  StyledTodoTitle,
} from './styled';
import type { TodoItem } from './types';

export type Props = {
  item: TodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  colors: LightPalette | DarkPalette;
};

const TodoItemRow = React.memo(({ item, onToggle, onDelete, colors }: Props) => (
  <StyledTodoItem $cardColor={colors.card} $shadowColor={colors.shadow}>
    <StyledTodoContent onPress={() => onToggle(item.id)}>
      <StyledCheckbox
        $borderColor={colors.border}
        $isCompleted={item.completed}
        $primaryColor={colors.primary}
      >
        {item.completed && (
          <StyledCheckmark $color={colors.primaryText}>✓</StyledCheckmark>
        )}
      </StyledCheckbox>
      <StyledTodoTitle $color={colors.text} $completed={item.completed}>
        {item.title}
      </StyledTodoTitle>
    </StyledTodoContent>
    <ThemedButton
      title="刪除"
      onPress={() => onDelete(item.id)}
      variant="danger"
      size="small"
    />
  </StyledTodoItem>
));

TodoItemRow.displayName = 'TodoItemRow';

export default TodoItemRow;
