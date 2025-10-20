# Day 1-3: React Native 基礎

## 必學主題

### Core Components
- [x] **View/Text/Image/ScrollView/TextInput**
  - 了解各元件的用途與基本屬性
  - 掌握樣式設定與事件處理
  - 理解平台差異與相容性

### StyleSheet 與 Flexbox 版面
- [x] **StyleSheet API**
  - 了解 StyleSheet.create() 的使用
  - 掌握樣式繼承與組合
  - 理解效能最佳化原則

- [x] **Flexbox 佈局**
  - 掌握 flexDirection、justifyContent、alignItems
  - 了解 flex 屬性的使用
  - 理解響應式設計原則

### 平台差異處理
- [x] **Platform.select()**
  - 了解平台特定樣式設定
  - 掌握條件式渲染技巧
  - 理解不適用於元件層級的平台差異

- [x] **PlatformColor**
  - 了解系統色彩的使用
  - 掌握深色/淺色模式支援
  - 理解 iOS/Android 系統色彩差異

- [x] **安全區處理**
  - 了解 SafeAreaView 的使用
  - 掌握不同裝置的適配
  - 理解 SafeAreaProvider 的配置

### List 與效能
- [x] **FlatList 正確參數**
  - `keyExtractor`：了解唯一鍵的重要性
  - `getItemLayout`：掌握固定高度列表的最佳化
  - `windowSize`：理解虛擬化視窗大小設定
  - `removeClippedSubviews`：了解記憶體最佳化

#### 📋 FlatList 進階參數實作完成

**已實作的所有參數：**
- ✅ **`keyExtractor`**：使用 `(item) => item.id` 確保每個項目有唯一識別
- ✅ **`renderItem`**：實作 `renderTodoItem` 函數處理項目渲染，使用 `useCallback` 優化
- ✅ **`data`**：使用 `todos` 陣列作為資料來源
- ✅ **`showsVerticalScrollIndicator`**：設為 `false` 隱藏滾動條
- ✅ **`getItemLayout`**：固定高度列表的最佳化（ITEM_HEIGHT = 80px）
- ✅ **`windowSize`**：控制虛擬化視窗大小（設定為 10，預設 21）
- ✅ **`removeClippedSubviews`**：Android 平台記憶體最佳化
- ✅ **`maxToRenderPerBatch`**：控制每批次渲染的項目數量（設定為 5）
- ✅ **`updateCellsBatchingPeriod`**：控制批次更新間隔時間（設定為 100ms）
- ✅ **`initialNumToRender`**：初始渲染項目數量（設定為 15）
- ✅ **`onEndReached`**：滾動到底部時的回調（實作 Alert 提示）
- ✅ **`onEndReachedThreshold`**：觸發 `onEndReached` 的距離閾值（設定為 0.3）

**實作範例：**
```typescript
<FlatList
  data={todos}
  renderItem={renderTodoItem}
  keyExtractor={keyExtractor}
  style={styles.list}
  showsVerticalScrollIndicator={false}
  getItemLayout={getItemLayout}
  windowSize={10}
  removeClippedSubviews={Platform.OS === 'android'}
  maxToRenderPerBatch={5}
  updateCellsBatchingPeriod={100}
  initialNumToRender={15}
  onEndReached={handleEndReached}
  onEndReachedThreshold={0.3}
/>
```

**性能優化技巧：**
- 使用 `useCallback` 優化所有函數，避免不必要的重新渲染
- 將常數（如 `ITEM_HEIGHT`）移到元件外，避免每次渲染重新宣告
- 使用 `React.memo` 和適當的依賴陣列管理
- 實作固定高度的 `getItemLayout` 提升滾動性能

### 導航
- [ ] **React Navigation 入門**
  - 了解 Stack Navigator 基本設定
  - 掌握 Tab Navigator 的使用
  - 理解導航參數傳遞

- [x] **Expo Router 基礎**
  - 了解檔案式路由概念
  - 掌握基本路由設定

### 網路與本機存取
- [ ] **網路請求**
  - `fetch` API 的使用
  - `axios` 的整合與設定
  - 錯誤處理與重試機制

- [ ] **本機儲存**
  - AsyncStorage 的使用
  - 資料序列化與反序列化
  - 儲存空間管理

## 實作任務

### 待辦清單 + 分頁導覽 App
建立一個包含以下功能的小型應用程式：

#### 功能需求
- [x] **列表頁面**
  - 顯示待辦事項列表
  - 支援新增、編輯、刪除功能
  - 實作完成狀態切換

- [ ] **明細頁面**
  - 顯示單一待辦事項詳細資訊
  - 支援編輯功能
  - 實作返回導航

- [x] **設定頁面**
  - 應用程式設定選項
  - 主題切換功能
  - 資料匯出/匯入

#### 技術實作
- [x] **導航結構**
  - 使用 React Navigation 或 Expo Router
  - 實作三個頁面間的導航
  - 設定適當的導航標題

- [ ] **資料管理**
  - 使用 AsyncStorage 儲存資料
  - 實作資料載入與儲存邏輯
  - 處理資料同步問題

- [x] **UI/UX 設計**
  - 實作響應式佈局
  - 支援不同螢幕尺寸
  - 實作基本的動畫效果
  - 使用設計系統 (spacing, colors, fonts)
  - 實作主題切換功能

## 驗收清單

### 技術理解
- [x] 能說明 FlatList 為何需要 `keyExtractor` 與 `getItemLayout`
- [x] 能解釋 Flexbox 佈局的基本原理
- [x] 能說明 Platform.select() 的使用時機
- [x] 能說明 PlatformColor 的用途與系統色彩使用
- [x] 能解釋 SafeAreaView 與 SafeAreaProvider 的配置
- [ ] 能解釋 AsyncStorage 的資料儲存機制

### 實作能力
- [x] 能在 iOS/Android 都跑起 3 個頁面的導航流程
- [x] 能實作基本的 CRUD 功能
- [x] 能處理不同平台的樣式差異
- [x] 能實作 SafeAreaView 的正確配置
- [x] 能使用 ESLint 進行程式碼品質檢查
- [x] 能實作基本的錯誤處理
- [x] 能使用設計系統進行 UI 開發
- [x] 能實作主題切換功能

### 效能最佳化
- [x] 能使用適當的 FlatList 參數
- [x] 能避免不必要的 re-render
- [x] 能使用 React.memo 進行元件最佳化
- [x] 能將 inline style 移到 StyleSheet 提升效能
- [x] 能移除未使用的樣式保持程式碼整潔
- [x] 能實作基本的記憶體管理

## 常見問題與解決方案

### 效能問題
- **列表滾動卡頓**：檢查 FlatList 參數設定
- **記憶體洩漏**：確保正確清理事件監聽器
- **初始載入慢**：實作適當的載入狀態
- **Inline style 效能問題**：將重複使用的樣式移到 StyleSheet
- **不必要的 re-render**：使用 React.memo 和適當的依賴陣列

### 平台相容性
- **樣式差異**：使用 Platform.select() 處理
- **功能差異**：實作平台特定邏輯
- **測試覆蓋**：確保兩個平台都能正常運作
- **SafeAreaView 不生效**：確保在根元件配置 SafeAreaProvider
- **ESLint 誤報**：使用適當的 eslint-disable 註解處理基礎元件

### 程式碼品質
- **ESLint 設定**：安裝並配置 eslint-plugin-react-native
- **Node.js 版本**：使用 nvm 管理版本相容性
- **Import 順序**：使用 ESLint 自動排序 import 語句
- **未使用樣式**：定期檢查並移除未使用的 StyleSheet
- **Husky Git Hooks**：設置 pre-commit 和 pre-push 檢查
- **CI/CD 流程**：設置 GitHub Actions 進行自動化檢查
- **設計系統**：使用統一的 spacing、colors、fonts
- **元件架構**：實作可重用的 Themed 元件

## 已完成的工作總結

### 🎯 核心功能實作
- ✅ **待辦清單應用**：完整的 CRUD 功能
- ✅ **主題系統**：深色/淺色模式切換
- ✅ **設計系統**：統一的 spacing、colors、fonts
- ✅ **導航結構**：使用 Expo Router 的三頁面導航

### 🛠️ 技術架構
- ✅ **Themed 元件**：ThemedButton、ThemedText、ThemedView
- ✅ **平台特定元件**：IconSymbol (iOS/Android)
- ✅ **元件組織**：common/ 資料夾結構
- ✅ **類型安全**：完整的 TypeScript 支援

### 🔧 開發工具
- ✅ **ESLint 配置**：完整的代碼品質檢查
- ✅ **Husky Git Hooks**：pre-commit 和 pre-push 檢查
- ✅ **CI/CD 流程**：GitHub Actions 自動化檢查
- ✅ **循環依賴檢測**：import/no-cycle 規則

### 📱 用戶體驗
- ✅ **響應式設計**：支援不同螢幕尺寸
- ✅ **安全區域**：正確的 SafeAreaView 配置
- ✅ **平台適配**：iOS/Android 樣式差異處理
- ✅ **效能最佳化**：完整的 FlatList 進階參數實作
- ✅ **記憶體管理**：Android 平台 `removeClippedSubviews` 優化
- ✅ **滾動體驗**：固定高度 `getItemLayout` 提升滾動流暢度

## 下一步
完成 Day 1-3 後，將進入 [Day 4-5: 除錯、測試與效能](./DAY4-5-DEBUG-TEST.md)，學習除錯技巧與效能最佳化。

## 參考資源
- [React Native 核心元件文件](https://reactnative.dev/docs/components-and-apis)
- [React Navigation 官方文件](https://reactnavigation.org/)
- [Expo Router 文件](https://docs.expo.dev/router/introduction/)
- [AsyncStorage 文件](https://react-native-async-storage.github.io/async-storage/)
