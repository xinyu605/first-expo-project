# Proposal: Day1-3 React Navigation 入門

## Why

DAY1-3 必學主題「導航」中，「React Navigation 入門」三項（Stack 基本設定、Tab 使用、導航參數傳遞）尚未有對應的具體任務與驗收方式；同時實作任務中的「明細頁面」與「返回導航」仍待完成。需要將學習目標拆成可執行、可勾選的任務，並與現有 Expo Router 架構對齊。

## What Changes

- 在 DAY1-3 文件內為「React Navigation 入門」新增**任務拆解**區塊，包含 Stack、Tab、參數傳遞三塊的可勾選子項與驗收方式。
- 以 OpenSpec change 記錄此任務設計（proposal、spec、tasks），便於實作時對照與追蹤。
- 任務 3（導航參數傳遞）的實作產出為：**待辦明細頁**（列表 → 明細、參數傳遞、返回），一併滿足「明細頁面」功能需求。

## Capabilities

### New Capabilities

- **React Navigation 入門學習任務**：Stack / Tab / 參數傳遞的閱讀、理解與小實作任務，對應現有 `app/_layout.tsx` 與 `app/(tabs)/_layout.tsx`。
- **待辦明細頁**：從 todos 列表導航至單一待辦明細、以參數傳遞 id、明細頁顯示內容並支援返回。

### Modified Capabilities

- **DAY1-3 任務文件**：新增「React Navigation 入門」任務拆解與勾選清單。
- **驗收清單**：可選新增「能解釋 Stack / Tab 角色與導航參數傳遞」。

## Impact

- `docs/tasks/DAY1-3-RN-BASICS.md`：新增「📋 React Navigation 入門 — 任務拆解」區塊。
- `openspec/changes/day1-3-react-navigation-intro/`：proposal、spec、tasks 等 artifact。
- 實作階段：新增明細路由（如 `app/todos/[id].tsx` 或 `(tabs)/todos/[id].tsx`）、列表頁導航至明細、明細頁讀取 params 與返回。

## Non-goals

- 不替換現有 Expo Router 為裸 React Navigation。
- 不要求額外安裝 `@react-navigation/native-stack` 等（沿用 Expo Router 的 Stack/Tabs 即可）。
