import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThemedButton from '@/components/common/ThemedButton';
import { useTheme } from '@/hooks/useTheme';
import { commonStyles } from '@/styles/common';
import { fontSizes, fontWeights, spacing } from '@/theme';

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const ITEM_HEIGHT = 80;

const TodoListScreen = () => {
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
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  }), []);

  const handleEndReached = useCallback(() => {
    Alert.alert(
      '滾動到底部',
      '已觸發 onEndReached 回調！\n這通常用於載入更多數據。',
      [{ text: '確定' }]
    );
  }, []);


  const renderTodoItem = useCallback(({ item }: { item: TodoItem }) => (
    <View style={[styles.todoItem, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
      <TouchableOpacity
        style={styles.todoContent}
        onPress={() => toggleTodo(item.id)}
      >
        <View style={[
          styles.checkbox, 
          { borderColor: colors.border },
          item.completed && { backgroundColor: colors.primary, borderColor: colors.primary }
        ]}>
          {item.completed && <Text style={[styles.checkmark, { color: colors.primaryText }]}>✓</Text>}
        </View>
        <Text
          style={[
            styles.todoTitle,
            { color: colors.text },
            item.completed && styles.todoTitleCompleted,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
      <ThemedButton
        title="刪除"
        onPress={() => deleteTodo(item.id)}
        variant="danger"
        size="small"
      />
    </View>
  ), [colors, toggleTodo, deleteTodo]);

  const keyExtractor = useCallback((item: TodoItem) => item.id, []);

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
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    marginBottom: spacing[2],
    borderRadius: spacing[2],
    height: 80, // 固定高度，與 getItemLayout 中的 ITEM_HEIGHT 一致
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  todoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: spacing[3],
    marginRight: spacing[3],
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.bold,
  },
  todoTitle: {
    flex: 1,
    fontSize: fontSizes.base,
  },
  todoTitleCompleted: {
    textDecorationLine: 'line-through',
  },
});

export default TodoListScreen;
