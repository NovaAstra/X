import type { PlainObject } from '@chaos/taper';

export function isObjectLike<T extends PlainObject>(data?: unknown): data is T {
  return typeof data === 'object' && data !== null;
}
