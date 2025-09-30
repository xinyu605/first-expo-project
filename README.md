# first-expo-project

# 目標

React Native 專案導入（或部分導入）Expo 生態，讓 iOS/Android 的建置、上架、與 OTA 更新更簡單可控。

---

## 工作方式

* 以「做中學」為主：20% 閱讀、80% 實作。
* 每個模組都有：必讀、實作、驗收清單（Knowledge Check）。
* 里程碑以週為單位，總長 4〜6 週；遇到現有專案相依時可彈性穿插。

---

## 0. 環境與基本觀念（起步日 Day 0）

**需要具備／安裝**

* Node.js LTS、包管（npm / yarn / pnpm）
* VS Code（推：ESLint、Prettier、TypeScript 插件）
* Xcode + iOS 模擬器、Android Studio + Android 模擬器
* 基本 Git 流程（branch、PR、tag、release）

**概念速記**

* React：JSX、函式元件、state/props、hook
* RN 執行模型：JS 執行緒、原生 UI 執行緒、橋接/JSI、Hermes 引擎
* 架構詞彙：Fabric、TurboModules、Config Plugin、Prebuild、EAS（Build/Submit/Update）

**驗收清單**

* 能在模擬器執行「Hello World」RN 專案
* iOS/Android 都能成功安裝與啟動

---

## 1. React Native 基礎（Day 1–3）

**必學主題**

* Core Components（View/Text/Image/ScrollView/TextInput）
* StyleSheet 與 Flexbox 版面
* 平台差異：`Platform.select()`、`PlatformColor`、安全區
* List 與效能：FlatList 的正確參數（`keyExtractor`、`getItemLayout`、`windowSize`）
* 導航：React Navigation（或 Expo Router）入門
* 網路與本機存取：`fetch`/`axios`、AsyncStorage

**實作**

* 做一個「待辦清單 + 分頁導覽」小 App（列表/明細/設定三頁）

**驗收清單**

* 能說明 FlatList 為何需要 `keyExtractor` 與 `getItemLayout`
* 能在 iOS/Android 都跑起 3 個頁面的導航流程

---

## 2. 除錯、測試與效能（Day 4–5）

**必學主題**

* React Native DevTools／Flipper 基礎、Log、Network 檢視
* 常見 List 卡頓診斷（fill rate、windowing）
* 單元測試（Jest）與基本 E2E（Playwright/Detox 可二擇一入門）

**實作**

* 重構昨天的列表：避免 re-render（`React.memo`、`useCallback`）
* 新增一兩個 Jest 單元測試

**驗收清單**

* 能找出一個實際的效能瓶頸並改善（例如初載入時間/列表掉幀）

---

## 3. Expo 基礎觀（Day 6–7）

**會學到**

* Expo 管理式（Managed）與 Bare + Prebuild 流程
* create-expo-app、專案結構、`app.json`/`app.config.*`
* Expo Router（檔案式路由）與 React Navigation 的關係
* 常用 Expo 模組：`expo-image`、`expo-file-system`、`expo-notifications`、`expo-localization` 等
* Expo Dev Client 與 `expo run:ios` / `expo run:android`

**實作**

* 用 create-expo-app 建一個 demo（或將既有 RN 專案導入 `expo` 套件）
* 嘗試加 1–2 個 Expo 模組（例如相簿或相機，只需要能啟動即可）

**驗收清單**

* 能清楚說明：什麼時候需要 Prebuild？什麼是 Config Plugin？

---

## 4. EAS：建置、提交與 OTA（Week 2）

**會學到**

* EAS Build：雲端打包 iOS/Android、憑證管理（自動/手動）
* EAS Submit：送 TestFlight / Play Console
* EAS Update（`expo-updates`）：branch / channel / rollout / rollback 概念
* `eas.json` 與多環境配置（dev/preview/prod）

**實作**

* 設定 `eas.json`：至少 two profiles（`development`、`production`）
* 產生一個 iOS internal（TestFlight）與 Android internal（Internal testing）版本
* 發佈一次 OTA 更新到「development channel」

**驗收清單**

* 能成功在測試機接受到 OTA 更新、並嘗試 rollback

---

## 5. 導入現有專案：策略與步驟（Week 3–4）

**A. 盤點與決策**

* 列出所有原生相依（相機、推播、後台任務、藍牙、支付…）
* 確認是否有 Expo 模組或社群模組 + Config Plugin 可替代
* 標記「必須保留原生改動」的區塊（需 Bare + Prebuild）

**B. 最小可行導入（Pilot）**

* 在現有 RN 專案安裝 `expo` 與 Expo Modules
* 改用 `registerRootComponent` 啟動
* 導入 Prebuild（產生 `ios/`、`android/`），並將必要的原生改動轉為 Config Plugin（或採用現成 plugin）
* 選一個功能切到 Expo 模組（例如影像挑選 + 上傳）

**C. 發佈與驗證**

* 用 EAS Build 產出測試版；用 EAS Update 對「development」做漸進釋出
* 收集崩潰與效能指標（Sentry/Crashlytics/Play Console Vitals）

**D. 推廣到整個 App**

* 把可替換的第三方原生套件換成 Expo 模組或具 plugin 的替代方案
* 把仍需原生改動的部分，轉為穩定的 Config Plugin + Prebuild 規則

---

## 6. 上架與釋出流程（Week 4–6）

**iOS**：

* 憑證、Provisioning、自動簽署（優先用 EAS 自動）
* TestFlight 內測、App Review 清單與常見拒件原因

**Android**：

* 簽章金鑰（Google Play App Signing）、Internal / Closed / Open 測試軌
* 分段（Staged Rollout）與回滾策略

**OTA 與商店版併用**

* 版本號（native build number）與 `runtimeVersion` 的對應
* 發佈 Runbook（誰、在何時、對哪個 channel 掛載哪個 branch）

---

## 模板與範例

**`eas.json`（範例）**

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

**`app.config.ts`（骨架）**

```ts
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

**導入步驟（速查）**

1. `npx install-expo-modules@latest`（或手動安裝 `expo`）
2. 入口改為 `registerRootComponent(App)`
3. 建立/整理 `app.config.*`（把圖示、權限等搬進 `expo` 區塊）
4. `npx expo prebuild` 產生 `ios/`、`android/`
5. 補上需要的 Config Plugin（或以 Expo 模組替代）
6. `eas build --platform ios|android` 產生安裝包
7. `eas update --channel development` 發 OTA

---

## 檢核題庫（自評）

* 什麼情況該選 Managed？什麼情況一定要 Prebuild？
* 為什麼 OTA 需要謹慎設定 `runtimeVersion`？
* iOS 與 Android 憑證各自的差異在哪？
* 如果要回滾 OTA，步驟是什麼？
* 列出你專案三個可替換為 Expo 模組的原生相依

---

## 建議里程碑與輸出

* **W1**：完成 RN/Expo 基礎 Demo（含導航/列表/相簿存取），在兩端模擬器可跑
* **W2**：打包 internal build（TestFlight/Play Internal），成功 OTA 一次
* **W3**：把公司 App 中一個功能切到 Expo（Pilot），產出測試版並觀察 Crash/ANR
* **W4–6**：逐步將可替換的原生相依換成 Expo 模組，建立正式釋出 Runbook

---

## 後續延伸

* New Architecture 與 Bridgeless、性能最佳化（FlashList 等）
* 推播（APNs/FCM）與深連結
* 多白標（白牌）配置：以 Prebuild + Config Plugin 管理品牌資產與變體
