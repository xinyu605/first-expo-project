# Week 4-6: 上架與釋出流程

## iOS 上架流程

### 憑證與 Provisioning
- [ ] **憑證管理**
  - 了解 iOS 憑證類型與用途
  - 掌握 EAS 自動憑證管理
  - 處理憑證更新與維護

- [ ] **Provisioning Profile**
  - 了解 Provisioning Profile 的作用
  - 掌握自動簽署設定
  - 處理 Profile 更新問題

- [ ] **自動簽署**
  - 優先用 EAS 自動簽署
  - 了解手動簽署的時機
  - 處理簽署問題

### TestFlight 內測
- [ ] **內部測試**
  - 設定 TestFlight 內部測試
  - 管理測試群組與使用者
  - 收集測試反饋

- [ ] **App Review 準備**
  - 了解 App Review 清單
  - 準備審核所需資料
  - 處理常見拒件原因

### App Store 發布
- [ ] **應用程式資訊**
  - 設定應用程式描述與關鍵字
  - 準備截圖與預覽影片
  - 設定價格與可用性

- [ ] **審核流程**
  - 提交審核申請
  - 處理審核回饋
  - 管理版本更新

## Android 上架流程

### 簽章金鑰
- [ ] **Google Play App Signing**
  - 了解 Google Play App Signing 機制
  - 設定應用程式簽名
  - 處理簽名金鑰管理

- [ ] **金鑰安全**
  - 保護簽名金鑰安全
  - 備份金鑰與恢復流程
  - 處理金鑰遺失情況

### 測試軌道
- [ ] **Internal Testing**
  - 設定內部測試軌道
  - 管理內部測試群組
  - 收集內部測試反饋

- [ ] **Closed Testing**
  - 設定封閉測試軌道
  - 管理封閉測試群組
  - 擴大測試範圍

- [ ] **Open Testing**
  - 設定開放測試軌道
  - 管理開放測試群組
  - 準備正式發布

### 分段發布
- [ ] **Staged Rollout**
  - 了解分段發布機制
  - 設定發布百分比
  - 監控發布效果

- [ ] **回滾策略**
  - 制定回滾計畫
  - 實作緊急回滾機制
  - 處理回滾後續問題

## OTA 與商店版併用

### 版本管理
- [ ] **版本號對應**
  - 了解 native build number 與 `runtimeVersion` 的對應
  - 設定版本號策略
  - 管理版本相容性

- [ ] **更新策略**
  - 制定 OTA 更新策略
  - 設定更新頻率與條件
  - 實作漸進式發布

### 發佈 Runbook
- [ ] **發佈流程**
  - 建立標準化發佈流程
  - 定義角色與責任
  - 設定審核與批准機制

- [ ] **Channel 管理**
  - 管理不同 channel 的用途
  - 設定 channel 切換策略
  - 處理 channel 衝突

- [ ] **監控與回報**
  - 建立發佈監控機制
  - 設定異常警報
  - 建立回報流程

## 實作任務

### 1. iOS 上架準備
- [ ] **憑證設定**
  - 設定 EAS 自動憑證管理
  - 測試憑證有效性
  - 處理憑證問題

- [ ] **TestFlight 設定**
  - 建立內部測試群組
  - 上傳測試版本
  - 收集測試反饋

### 2. Android 上架準備
- [ ] **簽名設定**
  - 設定 Google Play App Signing
  - 測試簽名有效性
  - 處理簽名問題

- [ ] **測試軌道設定**
  - 建立內部測試軌道
  - 上傳測試版本
  - 收集測試反饋

### 3. OTA 更新實作
- [ ] **更新策略**
  - 設定 OTA 更新策略
  - 實作漸進式發布
  - 測試更新流程

- [ ] **監控機制**
  - 建立更新監控
  - 設定異常警報
  - 實作回滾機制

## 驗收清單

### iOS 上架
- [ ] 能成功設定 iOS 憑證與 Provisioning
- [ ] 能使用 TestFlight 進行內部測試
- [ ] 能處理 App Review 流程
- [ ] 能成功發布到 App Store

### Android 上架
- [ ] 能成功設定 Android 簽名金鑰
- [ ] 能使用 Play Console 進行測試
- [ ] 能實作分段發布
- [ ] 能成功發布到 Google Play

### OTA 管理
- [ ] 能管理版本號與 runtimeVersion
- [ ] 能實作 OTA 更新策略
- [ ] 能建立發佈 Runbook
- [ ] 能處理緊急回滾

## 常見問題與解決方案

### iOS 問題
- **憑證過期**：使用 EAS 自動更新或手動更新
- **Provisioning Profile 問題**：檢查 Bundle ID 與裝置設定
- **App Review 被拒**：分析拒件原因並修正

### Android 問題
- **簽名金鑰問題**：檢查金鑰設定與 Google Play App Signing
- **測試軌道問題**：檢查測試群組設定與版本配置
- **分段發布問題**：監控發布效果並調整策略

### OTA 問題
- **更新不生效**：檢查 runtimeVersion 與 channel 設定
- **版本衝突**：確保版本號與 runtimeVersion 對應
- **回滾失敗**：檢查回滾策略與配置

## 下一步
完成 Week 4-6 後，將進入後續延伸學習，包括 New Architecture、推播通知、多白標配置等進階主題。

## 參考資源
- [App Store Connect 文件](https://developer.apple.com/app-store-connect/)
- [Google Play Console 文件](https://support.google.com/googleplay/android-developer/)
- [EAS Submit 文件](https://docs.expo.dev/submit/introduction/)
- [expo-updates 文件](https://docs.expo.dev/versions/latest/sdk/updates/)
