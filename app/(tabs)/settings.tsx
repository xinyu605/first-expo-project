import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SettingItem, SettingsItem } from '@/components/settings';
import { useTheme } from '@/hooks/useTheme';
import { commonStyles } from '@/styles/common';
import { fontSizes, fontWeights, spacing } from '@/theme';

const SettingsScreen = () => {
  const { colors } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [userName, setUserName] = useState('');

  const handleExportData = () => {
    Alert.alert('匯出資料', '資料匯出功能將在後續實作');
  };

  const handleImportData = () => {
    Alert.alert('匯入資料', '資料匯入功能將在後續實作');
  };

  const settingsItems: SettingsItem[] = [
    {
      id: 'darkMode',
      title: '深色模式',
      type: 'switch',
      value: darkMode,
      onPress: () => setDarkMode(!darkMode),
    },
    {
      id: 'notifications',
      title: '推播通知',
      type: 'switch',
      value: notifications,
      onPress: () => setNotifications(!notifications),
    },
    {
      id: 'userName',
      title: '使用者名稱',
      type: 'input',
      value: userName,
    },
    {
      id: 'export',
      title: '匯出資料',
      type: 'button',
      onPress: handleExportData,
    },
    {
      id: 'import',
      title: '匯入資料',
      type: 'button',
      onPress: handleImportData,
    },
  ];


  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={[styles.container, { backgroundColor: colors.surface }]}>
        <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>設定</Text>
        </View>
        
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text, backgroundColor: colors.surface }]}>一般設定</Text>
          {settingsItems.slice(0, 3).map((item) => (
            <View key={item.id}>
              <SettingItem 
                item={item} 
                onUserNameChange={setUserName}
              />
              <View style={[styles.separator, { backgroundColor: colors.border }]} />
            </View>
          ))}
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text, backgroundColor: colors.surface }]}>資料管理</Text>
          {settingsItems.slice(3).map((item) => (
            <View key={item.id}>
              <SettingItem 
                item={item} 
                onUserNameChange={setUserName}
              />
              <View style={[styles.separator, { backgroundColor: colors.border }]} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacing[5],
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
  },
  section: {
    marginTop: spacing[5],
    marginHorizontal: spacing[4],
    borderRadius: spacing[2],
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
    padding: spacing[4],
  },
  separator: {
    height: 1,
    marginLeft: spacing[4],
  },
});

export default SettingsScreen;
