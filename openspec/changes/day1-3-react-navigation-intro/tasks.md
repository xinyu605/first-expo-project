# Tasks: Day1-3 React Navigation 入門

## 1. Stack Navigator 基本設定

- [x] 1.1 閱讀 [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator) 或 Expo Router Stack 章節，對照 `app/_layout.tsx` 的 `<Stack>`、`<Stack.Screen>`，能說明 Stack 用途與 options 作用。
- [x] 1.2 在根 Stack 任選一頁修改 `options`（如 `title`、`headerShown`），在模擬器/實機確認畫面變化。
- [x] 1.3（可選）能說明 Expo Router 的 Stack 與 React Navigation native-stack 的關係。

## 2. Tab Navigator 的使用

- [x] 2.1 閱讀 [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator) 或 Expo Router Tabs，對照 `app/(tabs)/_layout.tsx` 的 `<Tabs>`、`<Tabs.Screen>`、`screenOptions`，能說明 Tabs 用途與共用選項。
- [x] 2.2 改動任一個 tab 的 `title` 或 `tabBarIcon`，確認 tab 列與標題顯示正確。
- [x] 2.3 能說明 `tabBarActiveTintColor`、`tabBarButton: HapticTab` 在專案中的用途。

## 3. 導航參數傳遞與明細頁

- [x] 3.1 閱讀「Passing parameters」文件（Expo Router / React Navigation），能說明參數從 A 頁傳到 B 頁的方式（URL params / route params）。
- [x] 3.2 新增待辦明細路由（如 `app/todos/[id].tsx` 或 `(tabs)/todos/[id].tsx`），能從列表導向該頁。
- [x] 3.3 從 todos 列表導航至明細時傳遞 `id`（或 todo），明細頁用 `useLocalSearchParams()` / `useGlobalSearchParams()` 讀取並顯示對應內容。
- [x] 3.4 明細頁實作返回（`router.back()` 或 headerLeft），能從明細回到列表。

## 4. 文件與驗收

- [x] 4.1 完成上述任務後，在 DAY1-3 勾選「React Navigation 入門」三項子點與「明細頁面」「返回導航」。
- [x] 4.2（可選）在 DAY1-3 驗收清單「技術理解」新增：能解釋 Stack / Tab 在 app 中的角色，以及導航參數如何傳遞。
