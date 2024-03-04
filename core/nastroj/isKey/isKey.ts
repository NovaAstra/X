import { isArray } from '../isArray';
import { isNil } from '../isNil';

export function isKey<O extends object>(value: PropertyKey, object?: O) {
  if (isNil(value)) return false;

  if (isArray(value)) return false;
}
