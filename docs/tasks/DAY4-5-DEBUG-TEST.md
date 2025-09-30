# Day 4-5: 除錯、測試與效能

## 必學主題

### 除錯工具
- [ ] **React Native DevTools**
  - 了解開發者選單的使用
  - 掌握 Element Inspector 功能
  - 理解 Network 監控

- [ ] **Flipper 基礎**
  - 安裝與設定 Flipper
  - 了解 Log 檢視功能
  - 掌握 Network 檢視與分析

- [ ] **Log 除錯技巧**
  - 使用 console.log 進行除錯
  - 了解不同 Log 等級的使用
  - 掌握遠端除錯功能

### 效能診斷
- [ ] **List 卡頓診斷**
  - 了解 fill rate 概念
  - 掌握 windowing 技術
  - 實作效能監控

- [ ] **記憶體管理**
  - 了解記憶體洩漏檢測
  - 掌握元件生命週期管理
  - 實作適當的清理機制

### 測試框架
- [ ] **單元測試 (Jest)**
  - 了解 Jest 基本設定
  - 掌握測試用例撰寫
  - 理解 Mock 的使用

- [ ] **E2E 測試**
  - 選擇測試工具 (Playwright/Detox)
  - 了解基本測試流程
  - 掌握測試自動化

## 實作任務

### 1. 重構列表效能
基於 Day 1-3 的待辦清單 App，進行效能最佳化：

- [ ] **避免 re-render**
  - 使用 `React.memo` 包裝元件
  - 實作 `useCallback` 和 `useMemo`
  - 優化 props 傳遞

- [ ] **FlatList 最佳化**
  - 設定適當的 `getItemLayout`
  - 調整 `windowSize` 參數
  - 實作 `removeClippedSubviews`

- [ ] **記憶體管理**
  - 清理事件監聽器
  - 實作適當的元件卸載
  - 監控記憶體使用情況

### 2. 測試實作
- [ ] **單元測試**
  - 為工具函數撰寫測試
  - 測試元件的基本功能
  - 實作 Mock 資料

- [ ] **整合測試**
  - 測試導航流程
  - 測試資料儲存功能
  - 測試錯誤處理

## 驗收清單

### 除錯能力
- [ ] 能使用 React Native DevTools 進行除錯
- [ ] 能使用 Flipper 分析網路請求
- [ ] 能識別並解決常見的效能問題
- [ ] 能使用適當的 Log 進行問題追蹤

### 效能最佳化
- [ ] 能找出一個實際的效能瓶頸並改善
- [ ] 能實作適當的 re-render 最佳化
- [ ] 能設定 FlatList 的最佳參數
- [ ] 能監控並改善記憶體使用

### 測試能力
- [ ] 能撰寫基本的單元測試
- [ ] 能使用 Mock 進行測試
- [ ] 能實作基本的 E2E 測試
- [ ] 能設定測試自動化流程

## 常見問題與解決方案

### 效能問題
- **列表滾動卡頓**：檢查 FlatList 參數與元件結構
- **記憶體洩漏**：確保正確清理所有監聽器與訂閱
- **初始載入慢**：實作適當的載入策略與快取

### 除錯困難
- **網路請求問題**：使用 Flipper 監控請求與回應
- **狀態管理問題**：使用 Redux DevTools 或類似工具
- **樣式問題**：使用 Element Inspector 檢查樣式

### 測試挑戰
- **Mock 設定複雜**：使用適當的 Mock 庫與設定
- **E2E 測試不穩定**：實作適當的等待機制與重試
- **測試覆蓋率低**：撰寫更多單元測試與整合測試

## 下一步
完成 Day 4-5 後，將進入 [Day 6-7: Expo 基礎觀](./DAY6-7-EXPO-BASICS.md)，學習 Expo 生態系統與工具。

## 參考資源
- [React Native 效能最佳化指南](https://reactnative.dev/docs/performance)
- [Flipper 官方文件](https://fbflipper.com/)
- [Jest 測試框架文件](https://jestjs.io/docs/getting-started)
- [Detox E2E 測試文件](https://github.com/wix/Detox)
