import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThemedButton from '@/components/common/ThemedButton';
import type { TodoItem } from '@/components/todos';
import { TODO_ITEM_HEIGHT, TodoItemRow } from '@/components/todos';
import { useTheme } from '@/hooks/useTheme';
import { commonStyles } from '@/styles/common';
import { fontSizes, fontWeights, spacing } from '@/theme';

const TodoListScreen = () => {
  const router = useRouter();
  const { colors } = useTheme();
  
  const generateMockTodos = (count: number): TodoItem[] => {
    return Array.from({ length: count }, (_, index) => ({
      id: `${index + 1}`,
      title: `待辦事項 ${index + 1} - 學習 FlatList 進階參數`,
      completed: Math.random() > 0.5,
      createdAt: new Date(2024, 0, index + 1),
    }));
  };

  const [todos, setTodos] = useState<TodoItem[]>(generateMockTodos(50));

  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = useCallback(() => {
    if (!newTodoTitle.trim()) return;
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      title: newTodoTitle.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
    setNewTodoTitle('');
  }, [newTodoTitle]);

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const getItemLayout = useCallback((_data: ArrayLike<TodoItem> | null | undefined, index: number) => ({
    length: TODO_ITEM_HEIGHT,
    offset: TODO_ITEM_HEIGHT * index,
    index,
  }), []);

  const handleEndReached = useCallback(() => {
    // 僅在列表有足夠項目時才顯示提示，避免清空待辦時反覆彈窗
    if (todos.length <= 5) return;
    Alert.alert(
      '滾動到底部',
      '已觸發 onEndReached 回調！\n這通常用於載入更多數據。',
      [{ text: '確定' }]
    );
  }, [todos.length]);


  const navigateToDetail = useCallback(
    (item: TodoItem) => {
      const params = new URLSearchParams({
        title: item.title,
        completed: String(item.completed),
        createdAt: item.createdAt.toISOString(),
      });
      const href = `/todos/${item.id}?${params.toString()}` as Href;
      router.push(href);
    },
    [router]
  );

  const renderTodoItem = useCallback(
    ({ item }: { item: TodoItem }) => (
      <TodoItemRow
        item={item}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onNavigateToDetail={navigateToDetail}
        colors={colors}
      />
    ),
    [colors, toggleTodo, deleteTodo, navigateToDetail]
  );

  const keyExtractor = useCallback((item: TodoItem) => item.id, []);

  const renderListEmpty = useCallback(
    () => (
      <View style={styles.emptyState}>
        <Text style={[styles.emptyStateTitle, { color: colors.text }]}>尚無待辦</Text>
        <Text style={[styles.emptyStateHint, { color: colors.placeholder }]}>
          從上方輸入框新增一筆
        </Text>
      </View>
    ),
    [colors]
  );

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>待辦清單</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.textInput,
              {
                borderColor: colors.border,
                backgroundColor: colors.card,
                color: colors.text,
              }
            ]}
            value={newTodoTitle}
            onChangeText={setNewTodoTitle}
            placeholder="新增待辦事項..."
            placeholderTextColor={colors.placeholder}
          />
          <ThemedButton 
            title="新增"
            onPress={addTodo}
            variant="primary"
            size="medium"
          />
        </View>

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={renderListEmpty}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          getItemLayout={getItemLayout}
          windowSize={10}
          removeClippedSubviews={Platform.OS === 'android'}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={100}
          initialNumToRender={15}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[4],
  },
  headerTitle: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    textAlign: 'center',
    marginBottom: spacing[5],
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: spacing[5],
    gap: spacing[3],
  },
  textInput: {
    flex: 1,
    padding: spacing[3],
    borderWidth: 1,
    borderRadius: spacing[2],
    fontSize: fontSizes.base,
  },
  list: {
    flex: 1,
  },
  emptyState: {
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[4],
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    marginBottom: spacing[2],
  },
  emptyStateHint: {
    fontSize: fontSizes.sm,
  },
});

export default TodoListScreen;
