import React from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';

import ThemedButton from '@/components/common/ThemedButton';
import { useTheme } from '@/hooks/useTheme';
import { spacing } from '@/theme';

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
  const { colors } = useTheme();
  
  const getSwitchColors = () => ({
    trackColor: { false: colors.border, true: colors.primary },
    thumbColor: item.value ? colors.warning : colors.surface,
  });

  switch (item.type) {
    case 'switch':
      return (
        <View style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: colors.text }]}>{item.title}</Text>
          <Switch
            value={item.value as boolean}
            onValueChange={item.onPress}
            {...getSwitchColors()}
          />
        </View>
      );
    case 'input':
      return (
        <View style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: colors.text }]}>{item.title}</Text>
          <TextInput
            style={[styles.textInput, { borderColor: colors.border, color: colors.text }]}
            value={item.value as string}
            onChangeText={onUserNameChange}
            placeholder="請輸入使用者名稱"
            placeholderTextColor={colors.placeholder}
          />
        </View>
      );
    case 'button':
      return (
        <ThemedButton
          title={item.title}
          onPress={item.onPress}
          variant="primary"
          size="medium"
          style={styles.buttonItem}
        />
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
    padding: spacing[4],
  },
  settingTitle: {
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    marginLeft: spacing[4],
    padding: spacing[2],
    borderWidth: 1,
    borderRadius: spacing[1],
    fontSize: 16,
  },
  buttonItem: {
    margin: spacing[4],
  },
});

export default SettingItem;
