export type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

/** 固定高度，與 FlatList getItemLayout 一致 */
export const TODO_ITEM_HEIGHT = 80;
