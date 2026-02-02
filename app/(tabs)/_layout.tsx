import { Tabs } from 'expo-router';
import React from 'react';

import IconSymbol from '@/components/common/IconSymbol';
import HapticTab from '@/components/HapticTab';
import { useTheme } from '@/hooks/useTheme';

/**
 * Tab Navigator（React Navigation 入門 - Day1-3）
 * - Tabs：底部 tab 列，每個 Tabs.Screen 對應一個 tab
 * - screenOptions：共用選項；tabBarActiveTintColor 為選中 tab 的顏色，tabBarButton 為自訂按鈕（HapticTab 提供觸覺回饋）
 */
export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="todos"
        options={{
          title: 'Todos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="checkmark.circle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
