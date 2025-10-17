/**
 * Spacing system based on 4px grid
 * Provides consistent spacing values for margins, padding, and gaps
 */

// Base spacing unit (4px)
const baseUnit = 4;

// Spacing scale from 0 to 12 (0px to 48px)
export const spacing = {
  0: 0,
  1: baseUnit * 1,    // 4px
  2: baseUnit * 2,    // 8px
  3: baseUnit * 3,    // 12px
  4: baseUnit * 4,    // 16px
  5: baseUnit * 5,    // 20px
  6: baseUnit * 6,    // 24px
  7: baseUnit * 7,    // 28px
  8: baseUnit * 8,    // 32px
  9: baseUnit * 9,    // 36px
  10: baseUnit * 10,  // 40px
  11: baseUnit * 11,  // 44px
  12: baseUnit * 12,  // 48px
} as const;

// Type definitions
export type SpacingKey = keyof typeof spacing;

export default spacing;
