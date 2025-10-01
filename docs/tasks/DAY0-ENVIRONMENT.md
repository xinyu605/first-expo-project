# Day 0: 環境與基本觀念（起步日）

## 目標
建立完整的 React Native + Expo 開發環境，並理解基本概念。

## 需要具備／安裝

### 1. 模擬器環境
- [ ] **Xcode + iOS 模擬器** (macOS 專用)
  - 下載：App Store 或 https://developer.apple.com/xcode/
  - 安裝 iOS 模擬器
  - 驗證：`xcode-select --print-path`

- [ ] **Android Studio + Android 模擬器**
  - 下載：https://developer.android.com/studio
  - 安裝 Android SDK
  - 建立 Android 虛擬裝置 (AVD)
  - 設定環境變數：
    ```bash
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

## 概念速記

### React Native 執行模型
- [x] **執行緒架構**
  - JS 執行緒：執行 JavaScript 程式碼
  - 原生 UI 執行緒：處理 UI 渲染
  - 橋接/JSI：兩個執行緒間的溝通機制

- [x] **Hermes 引擎**
  - 了解 Hermes 是什麼：輕量 JavaScript 引擎，專為行動裝置優化
  - 知道 Hermes 的優勢：啟動更快、記憶體使用更少、支援 ES6+
  - 理解如何啟用/停用 Hermes：預設啟用，可在 metro.config.js 中調整

### 架構詞彙
- [x] **Fabric**
  - 了解 Fabric 渲染器：新渲染器，取代舊版
  - 知道 Fabric 的優勢：效能更好、動畫更流暢、啟動更快

- [x] **TurboModules**
  - 了解 TurboModules 的概念：新的原生模組系統
  - 知道 TurboModules 的優勢：模組載入更快、型別安全更好

- [x] **Config Plugin**
  - 了解 Config Plugin 的作用：Expo 配置系統
  - 知道 Config Plugin 的用途：自動化原生配置、簡化複雜設定

- [x] **Prebuild**
  - 了解 Prebuild 的概念：預先建置原生程式碼
  - 知道 Prebuild 的執行時機：專案初始化或配置變更時

- [x] **EAS (Expo Application Services)**
  - **EAS Build**：雲端建置服務
  - **EAS Submit**：自動提交到應用商店
  - **EAS Update**：OTA 更新服務

## 實作任務

### 1. 環境驗證（Expo 流程）
- [x] 建立新的 Expo 專案
  ```bash
  yarn dlx create-expo-app@latest MyFirstExpoApp
  cd MyFirstExpoApp
  ```

- [x] 安裝 Expo CLI
  ```bash
  yarn add -D @expo/cli
  ```

- [x] 啟動開發伺服器（Metro + Expo）
  ```bash
  yarn start
  # 啟動失敗，需先點開 simulator 內安裝好的 Expo Go app 再重新執行 yarn start
  ```

- [x] 在 iOS 模擬器執行（以 Expo 啟動）
  ```bash
  # 在啟動頁按 i，或執行：
  yarn expo run:ios
  # 或使用 Expo Go 應用程式
  ```

- [x] 在 Android 模擬器執行（以 Expo 啟動）
  ```bash
  # 在啟動頁按 a，或執行：
  yarn expo run:android
  ```

### 2. 基本修改
- [x] 修改主畫面，顯示 "Hello World"
  - 編輯 `app/(tabs)/index.tsx` 檔案
  - 將 "Welcome!" 改為 "Hello World!"
- [x] 加入簡單的樣式
- [x] 確認修改在兩個平台上都能正常顯示

### 3. 開發工具熟悉
- [x] 開啟 Expo DevTools（在瀏覽器中）
- [x] 熟悉 Hot Reload 功能
- [x] 使用 Expo Go 應用程式測試（可選）

## 驗收清單

### 環境驗證
- [x] 能在 iOS 模擬器執行「Hello World」Expo 專案
- [x] 能在 Android 模擬器執行「Hello World」Expo 專案
- [x] 兩個平台都能成功安裝與啟動
- [x] 能夠修改程式碼並看到即時更新（Hot Reload）

### 概念理解
- [x] 能說明 React Native 的基本執行模型
- [x] 能區分 JS 執行緒與原生 UI 執行緒
- [x] 能解釋 Hermes 引擎的作用
- [x] 能說明 EAS 的三個主要服務

## 常見問題與解決方案

### iOS 相關
- **Xcode 版本問題**：確保使用最新穩定版
- **模擬器啟動失敗**：重啟 Xcode 或重新安裝模擬器
- **Pod 安裝失敗**：清理 Pod 快取後重新安裝
- **Expo Go 無法開啟**：確保模擬器已安裝 Expo Go 應用程式

### Android 相關
- **SDK 路徑問題**：檢查 ANDROID_HOME 環境變數
- **模擬器啟動慢**：啟用硬體加速 (HAXM)
- **Gradle 建置失敗**：清理 Gradle 快取

### 一般問題
- **Node 版本不相容**：使用 nvm 管理 Node 版本
- **網路問題**：檢查防火牆設定
- **權限問題**：確保有適當的檔案權限

## 下一步
完成 Day 0 後，將進入 [Day 1-3: React Native 基礎](./DAY1-3-RN-BASICS.md)，學習核心元件與基本開發技巧。

## 參考資源
- [React Native 官方文件](https://reactnative.dev/)
- [Expo 官方文件](https://docs.expo.dev/)
- [React 官方文件](https://react.dev/)
- [Node.js 官方文件](https://nodejs.org/docs/)
