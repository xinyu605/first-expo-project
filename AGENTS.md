# Agent Instructions: AsiaYo Expo App

## Tech Stack

- TypeScript, React Native, Expo, styled-components.
- Form: react-hook-form + zod.

## Core Coding Philosophy

- **Thinking**: Step-by-step reasoning is mandatory. Write pseudocode first.
- **Style**: Functional components with `const`. Use `type` for Props.
- **Pattern**: Prioritize **Early Return Pattern**. Always use strict equality (`===`).
- **Styling**: Always use `styled-components` with **Transient Props** (`$prop`).
- **Consistency**: Use theme tokens from `theme/`. No hardcoded hex/px.

## How to Work

- Consult `.cursor/rules/` for specific workflows (Expo, Tasks).
- Refer to `TASKS.md` for project progress overview.

## Error Handling

- Use `try/catch` in async functions.
- For business logic, prefer a "Result Pattern" (returning { data, error }) to avoid throwing exceptions everywhere.
