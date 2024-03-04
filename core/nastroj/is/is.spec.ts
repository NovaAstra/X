import { describe, it, expect } from 'vitest';

import { args, primitive, stubFalse } from '../helper/test';

import { is } from '.';

describe('(na) is', () => {
  it('works with built-in types', () => {
    expect(is(Boolean, false)).toBe(true);
    expect(is(Object, {})).toBe(true);
    expect(is(Array, [])).toBe(true);
    expect(is(String, '')).toBe(true);
    expect(is(Symbol, Symbol('a'))).toBe(true);
    expect(is(RegExp, /x/)).toBe(true);
    expect(is(Function, function () {})).toBe(true);
    expect(is(Object, function () {})).toBe(true);
    expect(is(Date, new Date())).toBe(true);
    expect(is(Number, new Number())).toBe(true);
  });

  it('works with user-defined types', () => {
    function Foo() {}
    function Bar() {}
    Bar.prototype = new Foo();

    const foo = new Foo();
    const bar = new Bar();

    expect(is(Foo, Bar)).toBe(false);
    expect(is(Foo, foo)).toBe(true);
    expect(is(Bar, bar)).toBe(true);
    expect(is(Foo, bar)).toBe(true);
    expect(is(Bar, foo)).toBe(false);
  });

  it('considers almost everything an object', () => {
    function Foo() {}
    const foo = new Foo();
    const isObject = is(Object);

    expect(isObject(Foo)).toBe(true);
    expect(isObject(foo)).toBe(true);
    expect(
      isObject(
        (function () {
          return arguments;
        })()
      )
    ).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(args)).toBe(true);
    expect(isObject(/x/)).toBe(true);
    expect(isObject(new String(''))).toBe(true);
    expect(isObject(function () {})).toBe(true);

    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });

  it('does not coerce', () => {
    expect(is(Boolean, 1)).toBe(false);
    expect(is(Number, '1')).toBe(false);
    expect(is(Number, false)).toBe(false);
  });

  it('recognize primitive types as their object equivalents', () => {
    expect(is(Boolean, false)).toBe(true);
    expect(is(Number, new Number())).toBe(true);
    expect(is(Number, 2)).toBe(true);
    expect(is(String, '')).toBe(true);
    expect(is(BigInt, 2n)).toBe(true);
  });

  it('primitive types are not considered instances of objects', () => {
    const expected = primitive.map(stubFalse);

    const actual = primitive.map((value) => is(Object, value));

    expect(actual).toEqual(expected);
  });
});
