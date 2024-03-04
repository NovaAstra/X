import { isObject } from '../isObject';

export function isNative(data?: unknown) {
  return isObject(data);
}
