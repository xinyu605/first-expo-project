// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

import { ICON_MAPPING, type IconSymbolName } from './constants';

type Props = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
const IconSymbol = ({
  name,
  size = 24,
  color,
  style,
}: Props) => {
  return <MaterialIcons color={color} size={size} name={ICON_MAPPING[name]} style={style} />;
};

export default IconSymbol;
