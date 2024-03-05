import type { Constructor, Function } from '@x/taper';

export function is<T extends Function>(ctor: T, data: unknown): data is ReturnType<T>;

export function is<T extends Constructor>(ctor: T, data: unknown): data is InstanceType<T>;

export function is<T extends Function>(ctor: T): (data: unknown) => data is ReturnType<T>;

export function is<T extends Constructor>(ctor: T): (data: unknown) => data is InstanceType<T>;

export function is<T extends Constructor>(ctor: T, data?: unknown) {
  if (arguments.length === 1) return (_data: unknown) => is(ctor, _data);

  return (
    (data != null &&
      (data.constructor === ctor || (ctor.name === 'Object' && typeof data === 'object'))) ||
    data instanceof ctor
  );
}
