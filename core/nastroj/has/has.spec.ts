import { describe, it, expect } from 'vitest';

import { has } from '.';

describe('(na) has', () => {
  const name = Symbol('name');
  const fred = { name: 'Fred', age: 23 };
  const anon = { age: 99, [name]: 'hasIn' };

  it('returns `true` if the specified property is present', () => {
    expect(has(fred, 'name')).toBe(true);
    expect(has(anon, name)).toBe(true);
  });

  it('returns `false` if the specified property is absent', () => {
    expect(has(anon, 'name')).toBe(false);
  });

  it('does not check properties from the prototype chain', () => {
    const Person = function () {};
    Person.prototype.age = function () {};

    const bob = new Person();

    expect(has(bob, 'age')).toBe(false);
  });

  it('should return `false` for non-objects', () => {
    expect(has(/x/, 'a')).toBe(false);
  });

  it('returns false when non-existent object', () => {
    expect(has(null as any, 'name')).toBe(false);
    expect(has(undefined as any, 'name')).toBe(false);
  });
});
