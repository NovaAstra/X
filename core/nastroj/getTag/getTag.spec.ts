import { describe, it, expect } from 'vitest';

import { args } from '../helper/test';

import { getTag } from '.';

describe('(na) getTag', () => {
  it('should return `[object Undefined]` for undefined', () => {
    expect(getTag(undefined)).toBe(`[object Undefined]`);
  });

  it('should return `[object Null]` for null', () => {
    expect(getTag(null)).toBe(`[object Null]`);
  });

  it('should return `[object Array]` for arrays', () => {
    expect(getTag([])).toBe(`[object Array]`);
    expect(getTag(new Array())).toBe(`[object Array]`);
  });

  it('should return `[object Date]` for dates', () => {
    expect(getTag(new Date())).toBe(`[object Date]`);
  });

  it('should return `[object Boolean]` for booleans', () => {
    expect(getTag(new Boolean())).toBe(`[object Boolean]`);
    expect(getTag(true)).toBe(`[object Boolean]`);
  });

  it('should return `[object Number]` for numbers', () => {
    expect(getTag(2)).toBe(`[object Number]`);
  });

  it('should return `[object String]` for strings', () => {
    expect(getTag('')).toBe(`[object String]`);
    expect(getTag(new String(22))).toBe(`[object String]`);
  });

  it('should return `[object Function]` for functions', () => {
    expect(getTag(() => {})).toBe(`[object Function]`);
    expect(getTag(class A {})).toBe(`[object Function]`);
  });

  it('should return `[object Object]` for plain objects', () => {
    expect(getTag({})).toBe(`[object Object]`);
    expect(getTag(Object.create(null))).toBe(`[object Object]`);
    expect(getTag(new Object({}))).toBe(`[object Object]`);
  });

  it('should return all possible data types, including basic and complex data types', () => {
    class Person {
      constructor() {}

      get [Symbol.toStringTag]() {
        return 'Person';
      }
    }

    expect(getTag(new Person())).toBe(`[object Person]`);
    expect(getTag(Person)).toBe(`[object Function]`);
    expect(getTag(new Map())).toBe(`[object Map]`);
    expect(getTag(new Error())).toBe(`[object Error]`);
    expect(getTag(Map)).toBe(`[object Function]`);
    expect(getTag(/x/)).toBe(`[object RegExp]`);
    expect(getTag(args)).toBe(`[object Arguments]`);
  });
});
