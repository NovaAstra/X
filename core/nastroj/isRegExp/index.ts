import { is } from '../is';

export function isRegExp(data?: unknown): data is RegExp {
  return is(RegExp, data);
}
