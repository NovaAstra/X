import { describe, it, expect } from 'vitest';

import { hasIn } from '.';

describe('(na) hasIn', () => {
  const name = Symbol('name');
  const fred = { name: 'Fred', age: 23 };
  const anon = { age: 99, [name]: 'hasIn' };

  it('returns `true` if the specified property is present', () => {
    expect(hasIn(fred, 'name')).toBe(true);
    expect(hasIn(anon, name)).toBe(true);
  });

  it('returns `false` if the specified property is absent', () => {
    expect(hasIn(anon, 'name')).toBe(false);
    
  });

  it('check properties from the prototype chain', () => {
    const Person = function () {};
    Person.prototype.age = function () {};

    const bob = new Person();

    expect(hasIn(bob, 'age')).toBe(true);
  });

  it('should return `false` for non-objects', () => {
    expect(hasIn(/x/, 'a')).toBe(false);
  });

  it('returns false when non-existent object', () => {
    expect(hasIn(null as any, 'name')).toBe(false);
    expect(hasIn(undefined as any, 'name')).toBe(false);
  });
});
