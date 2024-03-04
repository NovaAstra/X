import { is } from '../is';

export function isSet(data?: unknown): data is Set<unknown> {
  return is(Set, data);
}
