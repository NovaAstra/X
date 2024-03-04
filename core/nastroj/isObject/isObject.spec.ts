import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isObject } from '.';

describe('(na) isObject', () => {
  it('should return `true` for objects', () => {
    expect(isObject(args)).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(Object.create(null))).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(Object(false))).toBe(true);
    expect(isObject(Object('a'))).toBe(true);
    expect(isObject(Object(Symbol('a')))).toBe(true);
    expect(isObject(document.body)).toBe(true);
    expect(isObject(/x/)).toBe(true);
  });

  it('shoule return `false` form primitive types', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isObject(value));

    expect(actual).toEqual(expected);
  });

  it('should return `true` for instances of classes', () => {
    class MyClass {}

    expect(isObject(MyClass)).toBe(true);
  });

  it('should return `true` for function', () => {
    expect(isObject(new Function())).toBe(true);
    expect(isObject(new Boolean())).toBe(true);
    expect(isObject(new Error())).toBe(true);
    expect(isObject(Function)).toBe(true);
    expect(isObject(slice)).toBe(true);
    expect(isObject(new Error())).toBe(true);
  });
});
