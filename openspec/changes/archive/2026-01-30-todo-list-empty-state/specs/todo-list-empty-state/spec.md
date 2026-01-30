# Spec: Todo List Empty State

## ADDED Requirements

### Requirement: Empty State Display

當待辦清單沒有任何項目時，列表區域 SHALL 顯示一個友善的空狀態提示，而非空白畫面。

#### Scenario: 無待辦時顯示空狀態

- **WHEN** 待辦清單 `todos` 的長度為 0
- **THEN** FlatList 顯示 `ListEmptyComponent` 的內容
- **AND** 空狀態內容包含主要提示文字（例如「尚無待辦」）
- **AND** 可選：包含簡短說明（例如引導使用者從上方輸入新增）

#### Scenario: 空狀態使用主題樣式

- **WHEN** 空狀態元件被渲染
- **THEN** 文字顏色、字級、間距皆使用 theme 的 tokens（`colors`、`fontSizes`、`spacing`）
- **AND** 不硬編碼 hex 色碼或 px 數值（符合 AGENTS.md）
