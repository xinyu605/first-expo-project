# React Native + Expo 專案導入

## 專案目標
React Native 專案導入（或部分導入）Expo 生態，讓 iOS/Android 的建置、上架、與 OTA 更新更簡單可控。

## 工作方式
- 以「做中學」為主：20% 閱讀、80% 實作
- 每個模組都有：必讀、實作、驗收清單（Knowledge Check）
- 里程碑以週為單位，總長 4〜6 週；遇到現有專案相依時可彈性穿插

---

## 學習進度

### Week 1: 基礎建立
- **Day 0**: 環境與基本觀念 - [詳細任務](./docs/tasks/DAY0-ENVIRONMENT.md)
- **Day 1-3**: React Native 基礎 - [詳細任務](./docs/tasks/DAY1-3-RN-BASICS.md)
- **Day 4-5**: 除錯、測試與效能 - [詳細任務](./docs/tasks/DAY4-5-DEBUG-TEST.md)
- **Day 6-7**: Expo 基礎觀 - [詳細任務](./docs/tasks/DAY6-7-EXPO-BASICS.md)

### Week 2: EAS 建置與 OTA
- EAS Build、Submit、Update - [詳細任務](./docs/tasks/WEEK2-EAS.md)

### Week 3-4: 導入現有專案
- 策略與步驟 - [詳細任務](./docs/tasks/WEEK3-4-MIGRATION.md)

### Week 4-6: 上架與釋出流程
- iOS/Android 上架 - [詳細任務](./docs/tasks/WEEK4-6-RELEASE.md)

---

## 檢核題庫（自評）

- 什麼情況該選 Managed？什麼情況一定要 Prebuild？
- 為什麼 OTA 需要謹慎設定 `runtimeVersion`？
- iOS 與 Android 憑證各自的差異在哪？
- 如果要回滾 OTA，步驟是什麼？
- 列出你專案三個可替換為 Expo 模組的原生相依

---

## 建議里程碑與輸出

- **W1**：完成 RN/Expo 基礎 Demo（含導航/列表/相簿存取），在兩端模擬器可跑
- **W2**：打包 internal build（TestFlight/Play Internal），成功 OTA 一次
- **W3**：把公司 App 中一個功能切到 Expo（Pilot），產出測試版並觀察 Crash/ANR
- **W4–6**：逐步將可替換的原生相依換成 Expo 模組，建立正式釋出 Runbook

---

## 後續延伸

- New Architecture 與 Bridgeless、性能最佳化（FlashList 等）
- 推播（APNs/FCM）與深連結
- 多白標（白牌）配置：以 Prebuild + Config Plugin 管理品牌資產與變體