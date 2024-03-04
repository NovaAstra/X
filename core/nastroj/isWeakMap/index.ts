import { is } from '../is';

export function isWeakMap<K extends WeakKey, V = unknown>(data?: unknown): data is WeakMap<K, V> {
  return is(WeakMap, data);
}
