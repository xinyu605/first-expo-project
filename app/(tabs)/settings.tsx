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
import { commonStyles } from '@/styles/common';

const SettingsScreen = () => {
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
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>設定</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>一般設定</Text>
          {settingsItems.slice(0, 3).map((item) => (
            <View key={item.id}>
              <SettingItem 
                item={item} 
                onUserNameChange={setUserName}
              />
              <View style={styles.separator} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>資料管理</Text>
          {settingsItems.slice(3).map((item) => (
            <View key={item.id}>
              <SettingItem 
                item={item} 
                onUserNameChange={setUserName}
              />
              <View style={styles.separator} />
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginTop: 20,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginLeft: 16,
  },
});

export default SettingsScreen;
