import { is } from '../is';

export function isString(data?: unknown): data is string {
  return is(String, data);
}
