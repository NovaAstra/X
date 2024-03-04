import { describe, it, expect } from 'vitest';

import { isZero } from '.';

describe('(na) isZero', () => {
  it('should return `true` for 0', () => {
    expect(isZero(0)).toBe(true);
  });

  it('should return `false` for positive numbers', () => {
    expect(isZero(1)).toBe(false);
    expect(isZero(2)).toBe(false);
  });

  it('should return `false` for negative numbers', () => {
    expect(isZero(-1)).toBe(false);
    expect(isZero(-2)).toBe(false);
  });

  it('should return false for non-numeric values', () => {
    expect(isZero(2n)).toBe(false);
    expect(isZero(undefined)).toBe(false);
    expect(isZero(new Map())).toBe(false);
    expect(isZero(null)).toBe(false);
  });
});
