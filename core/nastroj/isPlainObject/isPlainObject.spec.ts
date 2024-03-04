import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isPlainObject } from '.';

describe('(na) isPlainObject', () => {
  it('should return `true` for plain objects', () => {
    function Foo() {
      this.a = 1;
    }

    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object({}))).toBe(true);
    expect(isPlainObject({ constructor: Foo })).toBe(true);

    const object = Object.create(null);
    expect(isPlainObject(object)).toBe(true);

    object.constructor = Object.prototype.constructor;
    expect(isPlainObject(object)).toBe(true);
  });

  it('should return `false` for array', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new Array(6))).toBe(false);
    expect(isPlainObject(args)).toBe(false);
  });

  it('shoule return `false` form primitive types', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isPlainObject(value));

    expect(actual).toEqual(expected);
  });

  it('should return `false` for instances of classes', () => {
    class MyClass {}
    expect(isPlainObject(MyClass)).toBe(false);
    expect(isPlainObject(new Object(1))).toBe(false);
  });

  it('should return `false` for function', () => {
    expect(isPlainObject(new Function())).toBe(false);
    expect(isPlainObject(slice)).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
  });
});
