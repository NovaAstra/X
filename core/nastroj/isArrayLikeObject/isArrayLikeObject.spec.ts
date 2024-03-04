import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse } from '../helper/test';

import { isArrayLikeObject } from '.';

describe('(na) isArrayLikeObject', () => {
  it('should return `true` for normal arrays', () => {
    expect(isArrayLikeObject([1])).toBe(true);
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    expect(isArrayLikeObject(new Array(6))).toBe(true);
  });

  it('should return `false` for strings', () => {
    expect(isArrayLikeObject('')).toBe(false);
    expect(isArrayLikeObject('abc')).toBe(false);
  });

  it('should return `true` for arguments', () => {
    expect(isArrayLikeObject(args)).toBe(true);
  });

  it('should return `false` form primitive types', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isArrayLikeObject(value));

    expect(actual).toEqual(expected);
  });
});
