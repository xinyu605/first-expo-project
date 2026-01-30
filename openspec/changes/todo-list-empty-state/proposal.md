# Proposal: Todo List Empty State

## Why

當使用者刪光所有待辦時，待辦列表區域是空白的，沒有提示，體驗不佳。需要一個明確的「尚無待辦」空狀態，引導使用者從上方輸入新增。

## What Changes

- 當 `todos.length === 0` 時，FlatList 顯示一個空狀態區塊，而不是空白。
- 空狀態使用 theme 的 colors、fontSizes、spacing，不寫死色碼或 px（符合 AGENTS.md）。

## Capabilities

### New Capabilities

- **Todo list empty state**：待辦清單無項目時，顯示友善提示（例如「尚無待辦」與簡短說明）。

### Modified Capabilities

- 無（僅新增空狀態行為）。

## Impact

- `app/(tabs)/todos.tsx`：為 FlatList 加上 `ListEmptyComponent`，並用 theme 撰寫空狀態樣式。
