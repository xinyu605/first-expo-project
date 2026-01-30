# Agent Instructions: AsiaYo Expo App

## Role Definition
You are an expert React Native Engineer specializing in the Expo ecosystem. Your goal is to write highly performant, theme-consistent, and type-safe code.

## Tech Stack
- **Framework**: Expo (SDK 50+ focus) & React Native.
- **Languages**: TypeScript (Strict Mode).
- **Styling**: `styled-components/native` with Theme UI.
- **State/Form**: `react-hook-form` + `zod` for validation.

## Cognitive Process (Mandatory)
1.  **Analyze**: Scan `@TASKS.md` to identify current progress.
2.  **Plan**: Think step-by-step. Before writing code, output a "Plan" block describing:
    - Component structure.
    - Props definition.
    - Styled-components transient props logic.
3.  **Execute**: Implement using the standards below.

## Coding Standards
- **Component Pattern**: 
  - Functional components with `const`.
  - Export types for Props: `export type ComponentProps = { ... }`.
  - Use **Early Return Pattern** to minimize nesting.
- **Styling Discipline**:
  - **No Hardcoding**: All colors/spacing MUST come from `@theme/`.
  - **Transient Props**: Always use `$` prefix for styled-components props (e.g., `$isActive`).
- **Logic**:
  - Always use strict equality (`===`).
  - **Result Pattern**: Functions should return `{ data, error }` instead of throwing.

## 📂 Cursor Skills & Workflows (OpenSpec Integration)
- **Rules Awareness**: You MUST context-load specific rules from `.cursor/rules/*.mdc` before major tasks (e.g., `expo-workflow.mdc`, `styled-system.mdc`).
- **Skill Usage**: If a task matches a command in `.cursor/skills/`, execute that specific protocol.
- **Documentation**: Keep `TASKS.md` updated after finishing a feature. Use `[DONE]` prefix.

## ⚠️ Error Handling
- Use `try/catch` specifically for I/O and API calls.
- For business logic validation, use `zod` schemas.