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
- [ ] **執行緒架構**
  - JS 執行緒：執行 JavaScript 程式碼
  - 原生 UI 執行緒：處理 UI 渲染
  - 橋接/JSI：兩個執行緒間的溝通機制

- [ ] **Hermes 引擎**
  - 了解 Hermes 是什麼
  - 知道 Hermes 的優勢
  - 理解如何啟用/停用 Hermes

### 架構詞彙
- [ ] **Fabric**
  - 了解 Fabric 渲染器
  - 知道 Fabric 與舊版渲染器的差異

- [ ] **TurboModules**
  - 了解 TurboModules 的概念
  - 知道 TurboModules 的優勢

- [ ] **Config Plugin**
  - 了解 Config Plugin 的作用
  - 知道何時需要使用 Config Plugin

- [ ] **Prebuild**
  - 了解 Prebuild 的概念
  - 知道 Prebuild 的執行時機

- [ ] **EAS (Expo Application Services)**
  - **EAS Build**：雲端建置服務
  - **EAS Submit**：自動提交到應用商店
  - **EAS Update**：OTA 更新服務

## 實作任務

### 1. 環境驗證
- [ ] 建立新的 React Native 專案
  ```bash
  npx react-native@latest init HelloWorld
  cd HelloWorld
  ```

- [ ] 在 iOS 模擬器執行
  ```bash
  cd ios && pod install && cd ..
  npx react-native run-ios
  ```

- [ ] 在 Android 模擬器執行
  ```bash
  npx react-native run-android
  ```

### 2. 基本修改
- [ ] 修改 App.js，顯示 "Hello World"
- [ ] 加入簡單的樣式
- [ ] 確認修改在兩個平台上都能正常顯示

### 3. 開發工具熟悉
- [ ] 開啟 React Native DevTools
- [ ] 使用 Flipper (如果可用)
- [ ] 熟悉 Hot Reload 功能

## 驗收清單

### 環境驗證
- [ ] 能在 iOS 模擬器執行「Hello World」RN 專案
- [ ] 能在 Android 模擬器執行「Hello World」RN 專案
- [ ] 兩個平台都能成功安裝與啟動
- [ ] 能夠修改程式碼並看到即時更新

### 概念理解
- [ ] 能說明 React Native 的基本執行模型
- [ ] 能區分 JS 執行緒與原生 UI 執行緒
- [ ] 能解釋 Hermes 引擎的作用
- [ ] 能說明 EAS 的三個主要服務

## 常見問題與解決方案

### iOS 相關
- **Xcode 版本問題**：確保使用最新穩定版
- **模擬器啟動失敗**：重啟 Xcode 或重新安裝模擬器
- **Pod 安裝失敗**：清理 Pod 快取後重新安裝

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
