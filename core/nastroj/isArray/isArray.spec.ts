import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice } from '../helper/test';

import { isArray } from '.';

describe('(na) isArray', () => {
  it('should return `true` for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray(new Array())).toBe(true);
    expect(isArray(document.body.children)).toBe(true);
  });

  it('should return `false` for non arrays', () => {
    expect(isArray(args)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
    expect(isArray(() => {})).toBe(false);
    expect(isArray(slice)).toBe(false);

    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isArray(value));

    expect(actual).toEqual(expected);
  });
});
