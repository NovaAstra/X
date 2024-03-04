import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isWeakSet } from '.';

describe('(na) isWeakSet', () => {
  it('should return `true` for weakset', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  it('should return `false` for non-weakset', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isWeakSet(value));

    expect(actual).toEqual(expected);
    expect(isWeakSet(args)).toBe(false);
    expect(isWeakSet(slice)).toBe(false);
    expect(isWeakSet(new Map())).toBe(false);
    expect(isWeakSet(new Set())).toBe(false);
    expect(isWeakSet([])).toBe(false);
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet(123)).toBe(false);
    expect(isWeakSet('123123')).toBe(false);
    expect(isWeakSet(/x/)).toBe(false);
  });
});
