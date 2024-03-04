import { describe, it, expect } from 'vitest';

import { args, falsey } from '../helper/test';

import { isArrayLike } from '.';

describe('(na) isArrayLike', () => {
  it('should return `true` for normal arrays', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike(new Array(5))).toBe(true);
    expect(isArrayLike([1, 2, 3])).toBe(true);
    expect(isArrayLike([null])).toBe(true);
    expect(isArrayLike(document.body.children)).toBe(true);
  });

  it('should return `true` for arguments', () => {
    expect(isArrayLike(args)).toBe(true);
  });

  it('should return `false` for strings', () => {
    expect(isArrayLike('')).toBe(true);
    expect(isArrayLike('abc')).toBe(true);
  });

  it('should return `true` if it is an arbitrary object with numeric length and extreme indices are defined', () => {
    const obj1 = { length: 0 };
    const obj2 = { 0: 'something', length: 0 };
    const obj3 = { 0: void 0, length: 0 };
    const obj4 = { 0: 'zero', 1: 'one', length: 2 };
    const obj5 = { 0: 'zero', length: 2 };
    const obj6 = { 1: 'one', length: 2 };

    expect(isArrayLike(obj1)).toBe(true);
    expect(isArrayLike(obj2)).toBe(true);
    expect(isArrayLike(obj3)).toBe(true);
    expect(isArrayLike(obj4)).toBe(true);
    expect(isArrayLike(obj5)).toBe(true);
    expect(isArrayLike(obj6)).toBe(true);
  });

  it('should return `false` form primitive types', () => {
    const expected = falsey.map((_, index) => (index === 2 ? true : false));

    const actual = falsey.map((value, index) => (index === 2 ? true : isArrayLike(value)));

    expect(actual).toEqual(expected);
  });
});
