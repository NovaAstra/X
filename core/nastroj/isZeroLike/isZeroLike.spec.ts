import { describe, it, expect } from 'vitest';

import { isZeroLike } from '.';

describe('(na) isZeroLike', () => {
  it('should return `true` for 0 or `0`', () => {
    expect(isZeroLike(0)).toBe(true);
    expect(isZeroLike('0')).toBe(true);
  });

  it('should return `false` for positive numbers', () => {
    expect(isZeroLike(1)).toBe(false);
    expect(isZeroLike(2)).toBe(false);
  });

  it('should return `false` for negative numbers', () => {
    expect(isZeroLike(-1)).toBe(false);
    expect(isZeroLike(-2)).toBe(false);
  });

  it('should return false for non-numeric values', () => {
    expect(isZeroLike(2n)).toBe(false);
    expect(isZeroLike(undefined)).toBe(false);
    expect(isZeroLike(new Map())).toBe(false);
    expect(isZeroLike(null)).toBe(false);
  });
});
