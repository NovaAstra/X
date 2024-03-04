import { describe, it, expect } from 'vitest';

import { args, primitive, stubTrue, slice } from '../helper/test';

import { isPrimitive } from '.';

describe('(na) isPrimitive', () => {
  it('shoule return `true` form primitive types', () => {
    const expected = primitive.map(stubTrue);

    const actual = primitive.map((value) => isPrimitive(value));

    expect(actual).toEqual(expected);
  });

  it('should return `false` for non-primitive types', () => {
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive(() => {})).toBe(false);
    expect(isPrimitive(slice)).toBe(false);
    expect(isPrimitive(new Date())).toBe(false);
    expect(isPrimitive(/x/)).toBe(false);
    expect(isPrimitive(args)).toBe(false);

    class MyClass {}

    expect(isPrimitive(MyClass)).toBe(false);
  });
});
