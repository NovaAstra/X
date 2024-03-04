import { isNil } from '../isNil';

export function hasPath<O extends object>(object: O, path: PropertyKey[] = []) {
  if (isNil(object)) return false;

  if (path.length === 0) return false;

  let index = -1;

  while (++index < length) {}
}
