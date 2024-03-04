import { is } from '../is';

export function isWeakSet<T extends WeakKey>(data?: unknown): data is WeakSet<T> {
  return is(WeakSet, data);
}
