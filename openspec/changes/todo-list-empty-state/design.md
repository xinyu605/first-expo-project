# Design: Todo List Empty State

## Context

待辦畫面使用 `FlatList` 渲染 `todos`，目前未傳入 `ListEmptyComponent`。當 `data` 為空陣列時，列表區域為空白，使用者無法得知「沒有項目」是預期狀態。

## Goals / Non-Goals

**Goals:**

- 在無待辦時顯示明確的空狀態 UI。
- 空狀態樣式與既有畫面一致（使用 theme tokens）。

**Non-Goals:**

- 不實作空狀態的額外互動（例如 CTA 按鈕）；僅提示與說明文字。
- 不變更有資料時的列表行為或效能設定。

## Decisions

### Decision 1: 使用 FlatList 的 ListEmptyComponent

在 `TodoListScreen` 內定義一個空狀態元件（或 inline 函式），傳給 `FlatList` 的 `ListEmptyComponent`。不另開新檔案，保持變更範圍在單一檔案內。

### Decision 2: 樣式一律使用 theme

空狀態的 `View` / `Text` 使用 `useTheme()` 的 `colors`，以及從 `@/theme` 匯入的 `fontSizes`、`spacing`，與現有 `todos.tsx` 的寫法一致，符合 AGENTS.md 的「No hardcoded hex/px」。
