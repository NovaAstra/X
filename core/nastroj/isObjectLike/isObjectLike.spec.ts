import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isObjectLike } from '.';

describe('(na) isObjectLike', () => {
  it('should return `true` for objects', () => {
    expect(isObjectLike(args)).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
    expect(isObjectLike(Object.create(null))).toBe(true);
    expect(isObjectLike(new Boolean())).toBe(true);
    expect(isObjectLike(new Error())).toBe(true);
    expect(isObjectLike({ a: 1 })).toBe(true);
    expect(isObjectLike(Object(false))).toBe(true);
    expect(isObjectLike(Object('a'))).toBe(true);
    expect(isObjectLike(Object(Symbol('a')))).toBe(true);
    expect(isObjectLike(document.body)).toBe(true);
    expect(isObjectLike(/x/)).toBe(true);
  });

  it('shoule return `false` form primitive types', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isObjectLike(value));

    expect(actual).toEqual(expected);
  });

  it('should return `false` for instances of classes', () => {
    class MyClass {}

    expect(isObjectLike(MyClass)).toBe(false);
  });

  it('should return `false` for function', () => {
    expect(isObjectLike(new Function())).toBe(false);
    expect(isObjectLike(Boolean)).toBe(false);
    expect(isObjectLike(Function)).toBe(false);
    expect(isObjectLike(slice)).toBe(false);
  });
});
