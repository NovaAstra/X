import { isArray } from '../isArray';
import { isLength } from '../isLength';

export function isFullArray(data?: unknown): data is unknown[] {
  return isArray(data) && isLength(data.length);
}
