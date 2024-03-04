import { describe, it, expect } from 'vitest';

import { args, falsey, stubFalse, slice, arrayBuffer, uint8Array } from '../helper/test';

import { isArrayBuffer } from '.';

describe('(na) isArrayBuffer', () => {
  it('should return `true` for array buffers', () => {
    expect(isArrayBuffer(arrayBuffer)).toBe(true);
  });

  it('should return `false` for non array buffers', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value) => isArrayBuffer(value));

    expect(actual).toEqual(expected);

    expect(isArrayBuffer(uint8Array)).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer(args)).toBe(false);
    expect(isArrayBuffer(/x/)).toBe(false);
    expect(isArrayBuffer(new Date())).toBe(false);
    expect(isArrayBuffer(new Error())).toBe(false);
    expect(isArrayBuffer(slice)).toBe(false);
  });
});
