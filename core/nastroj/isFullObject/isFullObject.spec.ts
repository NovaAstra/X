import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isFullObject } from '.';

describe('(na) isFullObject', () => {
  it('should return `true` for non-empty objects', () => {
    expect(isFullObject({ name: 'NovaAstra', age: 28 })).toBe(true);
  });

  it('should return `false` for array', () => {
    expect(isFullObject([1, 2, 3])).toBe(false);
    expect(isFullObject(new Array(6))).toBe(false);
    expect(isFullObject(args)).toBe(false);
  });

  it('should return `false` form primitive types', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isFullObject(value));

    expect(actual).toEqual(expected);
  });

  it('should return `false` for empty object', () => {
    expect(isFullObject({})).toBe(false);
  });

  it('should return `false` for function', () => {
    expect(isFullObject(new Function())).toBe(false);
    expect(isFullObject(slice)).toBe(false);
    expect(isFullObject(new Error())).toBe(false);
  });
});
