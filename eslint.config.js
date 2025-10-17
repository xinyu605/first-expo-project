// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'node_modules/*', '.expo/*'],
  },
  {
    plugins: {
      'react-native': require('eslint-plugin-react-native'),
    },
    rules: {
      // React Native 特定規則
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'warn', // 建議將平台特定元件分離成不同檔案，勿使用 Platform.select() 或條件式渲染
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',
      
      // React 規則
      'react/jsx-uses-react': 'off', // React 17+ 不需要
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要
      'react/prop-types': 'off', // 使用 TypeScript
      'react-hooks/exhaustive-deps': 'warn',
      
      // TypeScript 規則
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // 一般規則
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      
      // Import 規則
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      
      // 自定義規則：建議使用 SafeAreaView（僅針對頁面元件）
      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              group: ['react-native'],
              importNames: ['View'],
              message: 'It is recommended to use SafeAreaView instead of View as the root container in page components to ensure proper handling of safe areas.',
            },
          ],
        },
      ],
    },
  },
]);