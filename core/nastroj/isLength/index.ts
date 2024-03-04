import { isInteger } from '../isInteger';
import { isSafeInteger } from '../isSafeInteger';

export function isLength(data?: unknown): data is number {
  return isInteger(data) && isSafeInteger(data) && data > -1;
}
