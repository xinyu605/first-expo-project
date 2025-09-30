# Week 2: EAS 建置、提交與 OTA

## 會學到

### EAS Build
- [ ] **雲端打包 iOS/Android**
  - 了解 EAS Build 服務
  - 掌握建置流程與配置
  - 理解建置環境與限制

- [ ] **憑證管理**
  - 自動憑證管理設定
  - 手動憑證上傳與管理
  - 憑證更新與維護

### EAS Submit
- [ ] **TestFlight 提交**
  - 設定 iOS 應用程式提交
  - 了解 TestFlight 審核流程
  - 掌握版本管理策略

- [ ] **Play Console 提交**
  - 設定 Android 應用程式提交
  - 了解 Google Play 審核流程
  - 掌握內部測試與正式發布

### EAS Update
- [ ] **OTA 更新機制**
  - 了解 `expo-updates` 模組
  - 掌握 branch / channel 概念
  - 理解 rollout / rollback 策略

- [ ] **更新策略**
  - 設定更新頻率與條件
  - 實作漸進式發布
  - 掌握緊急回滾流程

### 多環境配置
- [ ] **eas.json 設定**
  - 了解建置配置結構
  - 設定 dev/preview/prod 環境
  - 掌握環境變數管理

## 實作任務

### 1. 設定 EAS 配置
- [ ] **建立 eas.json**
  ```json
  {
    "cli": {"version": ">= 10.0.0"},
    "build": {
      "development": {
        "developmentClient": true,
        "distribution": "internal",
        "channel": "development"
      },
      "preview": {
        "distribution": "internal",
        "channel": "preview"
      },
      "production": {
        "autoIncrement": "version",
        "channel": "production"
      }
    },
    "submit": {"production": {"ios": {}, "android": {}}},
    "update": {
      "url": "https://u.expo.dev/your-project-id"
    }
  }
  ```

- [ ] **設定 app.config.js**
  ```js
  import {ExpoConfig} from 'expo/config'

  export default ({config}: {config: ExpoConfig}) => ({
    expo: {
      name: 'YourApp',
      slug: 'your-app',
      scheme: 'yourapp',
      version: '1.0.0',
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'automatic',
      ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.company.app'
      },
      android: {
        package: 'com.company.app'
      },
      updates: {
        url: 'https://u.expo.dev/your-project-id'
      },
      runtimeVersion: {
        policy: 'appVersion'
      },
      plugins: [
        'expo-build-properties',
        ['expo-build-properties', {ios: {useFrameworks: 'static'}}]
      ]
    }
  })
  ```

### 2. 建置與提交
- [ ] **iOS Internal Build**
  - 使用 `eas build --platform ios --profile development`
  - 上傳到 TestFlight
  - 設定內部測試群組

- [ ] **Android Internal Build**
  - 使用 `eas build --platform android --profile development`
  - 上傳到 Play Console Internal Testing
  - 設定測試群組

### 3. OTA 更新實作
- [ ] **發佈 OTA 更新**
  - 使用 `eas update --channel development`
  - 設定更新訊息與版本
  - 測試更新流程

- [ ] **回滾測試**
  - 實作問題更新
  - 使用 `eas update --channel development --message "Rollback"`
  - 驗證回滾效果

## 驗收清單

### 建置能力
- [ ] 能成功在測試機接受到 OTA 更新、並嘗試 rollback
- [ ] 能設定多環境建置配置
- [ ] 能處理憑證管理問題
- [ ] 能解決常見的建置錯誤

### 提交流程
- [ ] 能成功提交到 TestFlight
- [ ] 能成功提交到 Play Console
- [ ] 能處理審核流程問題
- [ ] 能管理版本與發布策略

### OTA 管理
- [ ] 能設定適當的更新策略
- [ ] 能實作漸進式發布
- [ ] 能處理緊急回滾
- [ ] 能監控更新狀態與效果

## 常見問題與解決方案

### 建置問題
- **憑證錯誤**：檢查憑證有效性與配置
- **建置失敗**：檢查依賴與配置檔案
- **環境變數問題**：確認環境變數設定正確

### 提交問題
- **TestFlight 審核失敗**：檢查應用程式資訊與內容
- **Play Console 問題**：確認應用程式簽名與配置
- **版本衝突**：檢查版本號與建置號設定

### OTA 問題
- **更新不生效**：檢查 runtimeVersion 設定
- **回滾失敗**：確認回滾策略與配置
- **更新延遲**：了解更新傳播機制

## 下一步
完成 Week 2 後，將進入 [Week 3-4: 導入現有專案](./WEEK3-4-MIGRATION.md)，學習如何將現有 React Native 專案導入 Expo 生態。

## 參考資源
- [EAS Build 文件](https://docs.expo.dev/build/introduction/)
- [EAS Submit 文件](https://docs.expo.dev/submit/introduction/)
- [EAS Update 文件](https://docs.expo.dev/eas-update/introduction/)
- [expo-updates 文件](https://docs.expo.dev/versions/latest/sdk/updates/)
