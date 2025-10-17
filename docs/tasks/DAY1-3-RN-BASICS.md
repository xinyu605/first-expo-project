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
- [ ] **Platform.select()**
  - 了解平台特定樣式設定
  - 掌握條件式渲染技巧

- [ ] **PlatformColor**
  - 了解系統色彩的使用
  - 掌握深色/淺色模式支援

- [ ] **安全區處理**
  - 了解 SafeAreaView 的使用
  - 掌握不同裝置的適配

### List 與效能
- [ ] **FlatList 正確參數**
  - `keyExtractor`：了解唯一鍵的重要性
  - `getItemLayout`：掌握固定高度列表的最佳化
  - `windowSize`：理解虛擬化視窗大小設定
  - `removeClippedSubviews`：了解記憶體最佳化

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
- [ ] **列表頁面**
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

## 驗收清單

### 技術理解
- [ ] 能說明 FlatList 為何需要 `keyExtractor` 與 `getItemLayout`
- [x] 能解釋 Flexbox 佈局的基本原理
- [ ] 能說明 Platform.select() 的使用時機
- [ ] 能解釋 AsyncStorage 的資料儲存機制

### 實作能力
- [x] 能在 iOS/Android 都跑起 3 個頁面的導航流程
- [ ] 能實作基本的 CRUD 功能
- [ ] 能處理不同平台的樣式差異
- [ ] 能實作基本的錯誤處理

### 效能最佳化
- [ ] 能使用適當的 FlatList 參數
- [x] 能避免不必要的 re-render
- [ ] 能實作基本的記憶體管理

## 常見問題與解決方案

### 效能問題
- **列表滾動卡頓**：檢查 FlatList 參數設定
- **記憶體洩漏**：確保正確清理事件監聽器
- **初始載入慢**：實作適當的載入狀態

### 平台相容性
- **樣式差異**：使用 Platform.select() 處理
- **功能差異**：實作平台特定邏輯
- **測試覆蓋**：確保兩個平台都能正常運作

## 下一步
完成 Day 1-3 後，將進入 [Day 4-5: 除錯、測試與效能](./DAY4-5-DEBUG-TEST.md)，學習除錯技巧與效能最佳化。

## 參考資源
- [React Native 核心元件文件](https://reactnative.dev/docs/components-and-apis)
- [React Navigation 官方文件](https://reactnavigation.org/)
- [Expo Router 文件](https://docs.expo.dev/router/introduction/)
- [AsyncStorage 文件](https://react-native-async-storage.github.io/async-storage/)
