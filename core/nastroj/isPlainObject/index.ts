import type { PlainObject } from '@x/taper';

import { getTag } from '../getTag';
import { isObjectLike } from '../isObjectLike';

export function isPlainObject(data?: unknown): data is PlainObject {
  if (!isObjectLike(data) || getTag(data) !== '[object Object]') return false;

  if (Object.getPrototypeOf(data) === null) {
    return true;
  }

  let proto = data;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(data) === proto;
}
