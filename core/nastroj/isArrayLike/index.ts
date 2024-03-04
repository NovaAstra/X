import { isLength } from '../isLength';
import { isNil } from '../isNil';

export function isArrayLike(data?: unknown): data is ArrayLike<unknown> {
  return (
    !isNil(data) &&
    typeof data !== 'function' &&
    isLength((data as ArrayLike<unknown>).length)
  );
}
