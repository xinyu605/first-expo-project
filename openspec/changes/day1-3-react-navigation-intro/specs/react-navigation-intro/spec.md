# Spec: React Navigation 入門（Day1-3）

## ADDED Requirements

本 spec 對應 DAY1-3 必學主題「導航」中的「React Navigation 入門」，以 Expo Router（基於 React Navigation）為實作環境。

### Requirement: Stack Navigator 理解與基本設定

學習者 SHALL 能說明 Stack Navigator 的用途，並能在現有根 layout 中修改 Stack.Screen 的 options。

#### Scenario: 對應現有根 Stack

- **GIVEN** 專案使用 Expo Router，根 layout 為 `app/_layout.tsx`
- **WHEN** 學習者閱讀 React Navigation Stack 文件（或 Expo Router Stack 章節）
- **THEN** 能對照並說明：Stack 負責「一疊畫面」、每個 Stack.Screen 對應一個畫面、options 可控制 header/標題
- **AND** 能口頭或筆記說明上述對應關係

#### Scenario: 修改 Stack options

- **WHEN** 學習者在根 Stack 中任選一頁（如 `(tabs)` 或 `modal`）修改 `options`（如 `title`、`headerShown`）
- **THEN** 在模擬器或實機上能看到預期畫面變化

### Requirement: Tab Navigator 理解與使用

學習者 SHALL 能說明 Tab Navigator 的用途，並能修改 tab 的 title、icon 或共用樣式。

#### Scenario: 對應現有 Tabs layout

- **GIVEN** tabs 層 layout 為 `app/(tabs)/_layout.tsx`
- **WHEN** 學習者閱讀 Bottom Tabs 文件（或 Expo Router Tabs）
- **THEN** 能說明：Tabs 負責底部 tab、每個 Tabs.Screen 對應一個 tab、screenOptions 為共用選項
- **AND** 能說明 `tabBarActiveTintColor`、`tabBarButton: HapticTab` 在專案中的用途

#### Scenario: 修改 Tab 設定

- **WHEN** 學習者改動任一個 tab 的 `title` 或 `tabBarIcon`
- **THEN** 在 app 中能見到 tab 列與標題的對應變化

### Requirement: 導航參數傳遞與明細頁

學習者 SHALL 能實作「列表 → 明細」導航、傳遞參數（如 todo id）、在明細頁讀取並顯示，並實作返回。

#### Scenario: 從列表導航至明細並傳參

- **GIVEN** 存在待辦列表頁（如 `app/(tabs)/todos.tsx`）
- **WHEN** 使用者點擊某一筆待辦
- **THEN** 導航至待辦明細頁（路由如 `todos/[id]` 或等同結構）
- **AND** 導航時傳遞該筆待辦的 id（或必要時傳遞 todo 物件）
- **AND** 明細頁透過 `useLocalSearchParams()` 或 `useGlobalSearchParams()` 讀取參數並顯示對應內容

#### Scenario: 從明細頁返回列表

- **GIVEN** 使用者位於待辦明細頁
- **WHEN** 使用者點擊返回（如 `router.back()` 或 headerLeft）
- **THEN** 回到待辦列表頁

## References

- 任務拆解與勾選清單：`docs/tasks/DAY1-3-RN-BASICS.md` 內「📋 React Navigation 入門 — 任務拆解」
- 實作任務對應：`openspec/changes/day1-3-react-navigation-intro/tasks.md`
