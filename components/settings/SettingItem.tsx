/* eslint-disable no-restricted-imports */
import React from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export type SettingsItem = {
  id: string;
  title: string;
  type: 'switch' | 'input' | 'button';
  value?: boolean | string;
  onPress?: () => void;
};

type Props = {
  item: SettingsItem;
  onUserNameChange?: (value: string) => void;
};

const SettingItem = React.memo(({ item, onUserNameChange }: Props) => {
  switch (item.type) {
    case 'switch':
      return (
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Switch
            value={item.value as boolean}
            onValueChange={item.onPress}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={item.value ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      );
    case 'input':
      return (
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <TextInput
            style={styles.textInput}
            value={item.value as string}
            onChangeText={onUserNameChange}
            placeholder="請輸入使用者名稱"
            placeholderTextColor="#999"
          />
        </View>
      );
    case 'button':
      return (
        <TouchableOpacity style={styles.buttonItem} onPress={item.onPress}>
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      );
    default:
      return null;
  }
});

SettingItem.displayName = 'SettingItem';

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    flex: 1,
    marginLeft: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
  },
  buttonItem: {
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default SettingItem;
