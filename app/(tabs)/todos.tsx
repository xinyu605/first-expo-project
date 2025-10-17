import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/useTheme';
import { commonStyles } from '@/styles/common';
import { fontSizes, fontWeights } from '@/theme';

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const TodoListScreen = () => {
  const { colors } = useTheme();
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: '1',
      title: '學習 React Native Core Components',
      completed: true,
      createdAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: '實作 SafeAreaView 配置',
      completed: true,
      createdAt: new Date('2024-01-02'),
    },
    {
      id: '3',
      title: '學習 FlatList 最佳化參數',
      completed: false,
      createdAt: new Date('2024-01-03'),
    },
    {
      id: '4',
      title: '實作 keyExtractor 功能',
      completed: false,
      createdAt: new Date('2024-01-04'),
    },
    {
      id: '5',
      title: '學習 getItemLayout 最佳化',
      completed: false,
      createdAt: new Date('2024-01-05'),
    },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        title: newTodoTitle.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos(prev => [newTodo, ...prev]);
      setNewTodoTitle('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const renderTodoItem = ({ item }: { item: TodoItem }) => (
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
      <TouchableOpacity
        style={[styles.deleteButton, { backgroundColor: colors.secondary }]}
        onPress={() => deleteTodo(item.id)}
      >
        <Text style={[styles.deleteButtonText, { color: colors.secondaryText }]}>刪除</Text>
      </TouchableOpacity>
    </View>
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
          <TouchableOpacity 
            style={[styles.addButton, { backgroundColor: colors.primary }]} 
            onPress={addTodo}
          >
            <Text style={[styles.addButtonText, { color: colors.primaryText }]}>新增</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 12,
  },
  textInput: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: fontSizes.base,
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
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
    borderRadius: 12,
    marginRight: 12,
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
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
  },
});

export default TodoListScreen;
