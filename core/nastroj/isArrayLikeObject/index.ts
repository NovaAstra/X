import { isObjectLike } from '../isObjectLike';
import { isArrayLike } from '../isArrayLike';

export function isArrayLikeObject(data?: unknown) {
  return isObjectLike(data) && isArrayLike(data);
}
