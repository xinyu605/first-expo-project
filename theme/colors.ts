/**
 * Color palette definitions
 * Each color has 10 shades from lightest (0) to darkest (9)
 */

const primary = {
  0: '#f0fdff',
  1: '#c7f7ff',
  2: '#99e6f7',
  3: '#6ccfeb',
  4: '#43b7de',
  5: '#1e9fd2',
  6: '#0f7aab',
  7: '#055885',
  8: '#003a5e',
  9: '#002138',
} as const;

const warning = {
  0: '#fffce6',
  1: '#fff0a3',
  2: '#ffe47a',
  3: '#ffd752',
  4: '#ffc629',
  5: '#ffb300',
  6: '#d99100',
  7: '#b37100',
  8: '#8c5400',
  9: '#663a00',
} as const;

const success = {
  0: '#efffef',
  1: '#ace6b7',
  2: '#80d993',
  3: '#58cc75',
  4: '#34bf5b',
  5: '#04ad00',
  6: '#088c37',
  7: '#016628',
  8: '#00401b',
  9: '#001a0b',
} as const;

const danger = {
  0: '#fff3eb',
  1: '#ffd8c2',
  2: '#ffbb99',
  3: '#ff9b70',
  4: '#ff7847',
  5: '#f4511e',
  6: '#cf350e',
  7: '#a81f03',
  8: '#821100',
  9: '#5c0900',
} as const;

const neutral = {
  0: '#ffffff',
  1: '#fafafa',
  2: '#f5f5f5',
  3: '#e8e8e8',
  4: '#d9d9d9',
  5: '#bfbfbf',
  6: '#8c8c8c',
  7: '#595959',
  8: '#262626',
  9: '#000000',
} as const;

const indigo = {
  0: '#eceff1',
  1: '#cfd8dc',
  2: '#b0bec5',
  3: '#90a4ae',
  4: '#78909c',
  5: '#607d8b',
  6: '#546e7a',
  7: '#455a64',
  8: '#37474f',
  9: '#263238',
} as const;

export const colors = {
  primary,
  success,
  warning,
  danger,
  neutral,
  indigo,
} as const;

export type ColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ColorPalette = typeof colors;
export type ColorName = keyof ColorPalette;
