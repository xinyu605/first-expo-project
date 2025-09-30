# Day 6-7: Expo 基礎觀念

## 會學到

### Expo 架構概念
- [ ] **管理式 (Managed) 流程**
  - 了解 Expo Go 的使用
  - 掌握開發流程與限制
  - 理解何時適合使用

- [ ] **Bare + Prebuild 流程**
  - 了解 Bare Workflow 概念
  - 掌握 Prebuild 的使用時機
  - 理解原生模組整合

### 專案結構與配置
- [ ] **create-expo-app**
  - 了解專案初始化流程
  - 掌握專案結構組織
  - 理解配置檔案管理

- [ ] **app.json / app.config.***
  - 了解應用程式配置
  - 掌握不同環境的配置
  - 理解動態配置的使用

### 路由系統
- [ ] **Expo Router**
  - 了解檔案式路由概念
  - 掌握基本路由設定
  - 理解與 React Navigation 的關係

- [ ] **React Navigation 整合**
  - 了解兩者的差異與選擇
  - 掌握遷移策略
  - 理解最佳實務

### 常用 Expo 模組
- [ ] **expo-image**
  - 了解圖片處理與最佳化
  - 掌握快取與載入策略
  - 理解與原生 Image 的差異

- [ ] **expo-file-system**
  - 了解檔案系統操作
  - 掌握檔案讀寫與管理
  - 理解權限與安全考量

- [ ] **expo-notifications**
  - 了解推播通知設定
  - 掌握本地與遠端通知
  - 理解權限管理

- [ ] **expo-localization**
  - 了解國際化支援
  - 掌握多語言設定
  - 理解地區化功能

### 開發工具
- [ ] **Expo Dev Client**
  - 了解自訂開發客戶端
  - 掌握原生模組測試
  - 理解與 Expo Go 的差異

- [ ] **expo run:ios / expo run:android**
  - 了解原生建置流程
  - 掌握開發環境設定
  - 理解除錯與測試

## 實作任務

### 1. 建立 Expo 專案
- [ ] **專案初始化**
  ```bash
  npx create-expo-app@latest MyExpoApp
  cd MyExpoApp
  ```

- [ ] **配置設定**
  - 設定 app.config.js
  - 配置應用程式資訊
  - 設定圖示與啟動畫面

### 2. 整合 Expo 模組
- [ ] **影像處理**
  - 安裝並使用 expo-image
  - 實作圖片載入與快取
  - 測試不同圖片格式

- [ ] **檔案系統**
  - 安裝並使用 expo-file-system
  - 實作檔案讀寫功能
  - 測試檔案權限

- [ ] **推播通知**
  - 安裝並使用 expo-notifications
  - 設定推播權限
  - 實作本地通知

### 3. 路由實作
- [ ] **Expo Router 設定**
  - 設定檔案式路由
  - 實作基本頁面導航
  - 測試路由參數傳遞

- [ ] **與 React Navigation 比較**
  - 實作相同功能的兩種方式
  - 比較效能與開發體驗
  - 選擇適合的方案

## 驗收清單

### 概念理解
- [ ] 能清楚說明：什麼時候需要 Prebuild？什麼是 Config Plugin？
- [ ] 能解釋 Managed 與 Bare Workflow 的差異
- [ ] 能說明 Expo Router 與 React Navigation 的關係
- [ ] 能理解 Expo 模組的優勢與限制

### 實作能力
- [ ] 能使用 create-expo-app 建立專案
- [ ] 能設定 app.config.js 配置
- [ ] 能整合至少 2 個 Expo 模組
- [ ] 能實作基本的檔案式路由

### 開發流程
- [ ] 能使用 Expo Dev Client 進行開發
- [ ] 能使用 expo run 指令建置原生版本
- [ ] 能處理常見的配置問題
- [ ] 能進行基本的除錯與測試

## 常見問題與解決方案

### 配置問題
- **app.config.js 錯誤**：檢查語法與配置選項
- **模組安裝失敗**：確認 Expo SDK 版本相容性
- **建置失敗**：檢查原生依賴與配置

### 開發問題
- **Expo Go 限制**：考慮使用 Expo Dev Client
- **原生模組整合**：了解 Prebuild 流程
- **效能問題**：比較不同方案的效能表現

### 部署問題
- **配置不一致**：確保所有環境使用相同配置
- **模組相容性**：檢查 Expo SDK 版本支援
- **建置錯誤**：清理快取並重新建置

## 下一步
完成 Day 6-7 後，將進入 [Week 2: EAS 建置與 OTA](./WEEK2-EAS.md)，學習雲端建置與 OTA 更新機制。

## 參考資源
- [Expo 官方文件](https://docs.expo.dev/)
- [Expo Router 文件](https://docs.expo.dev/router/introduction/)
- [Expo 模組文件](https://docs.expo.dev/versions/latest/)
- [create-expo-app 文件](https://docs.expo.dev/get-started/create-a-new-app/)
