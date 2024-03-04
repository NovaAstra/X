import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isWeakMap } from '.';

describe('(na) isWeakMap', () => {
  it('should return `true` for weakmap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  it('should return `false` for non-weakmap', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isWeakMap(value));

    expect(actual).toEqual(expected);
    expect(isWeakMap(args)).toBe(false);
    expect(isWeakMap(slice)).toBe(false);
    expect(isWeakMap(new Map())).toBe(false);
    expect(isWeakMap(new Set())).toBe(false);
    expect(isWeakMap(new WeakSet())).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap(new Array())).toBe(false);
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap(123)).toBe(false);
    expect(isWeakMap('123123')).toBe(false);
    expect(isWeakMap(/x/)).toBe(false);
  });
});
