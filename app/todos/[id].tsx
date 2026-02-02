import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThemedView from '@/components/common/ThemedView';
import { useTheme } from '@/hooks/useTheme';
import { fontSizes, fontWeights, spacing } from '@/theme';

/**
 * 導航參數（React Navigation 入門 - Day1-3）
 * Expo Router 以 URL / search params 傳遞：useLocalSearchParams() 取得從列表頁傳來的 id、title 等
 */
type TodoDetailParams = {
  id: string;
  title?: string;
  completed?: string;
  createdAt?: string;
};

const TodoDetailScreen = () => {
  const { colors } = useTheme();
  const params = useLocalSearchParams<TodoDetailParams>();
  const { id, title, completed, createdAt } = params;

  const completedLabel = completed === 'true' ? '已完成' : '未完成';
  const dateLabel = createdAt
    ? new Date(createdAt).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—';

  const rows = [
    { label: 'ID', value: id ?? '—' },
    { label: '標題', value: title ?? '—' },
    { label: '狀態', value: completedLabel },
    { label: '建立時間', value: dateLabel },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]} edges={['bottom']}>
      <ThemedView style={styles.container}>
        {rows.map((row) => (
          <View style={styles.row} key={row.label}>
            <Text style={[styles.label, { color: colors.placeholder }]}>{row.label}</Text>
            <Text style={[styles.value, { color: colors.text }]}>{row.value}</Text>
          </View>
        ))}
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: spacing[5],
  },
  row: {
    marginBottom: spacing[4],
  },
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    marginBottom: spacing[1],
  },
  value: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
  },
});

export default TodoDetailScreen;
