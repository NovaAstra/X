import { isObjectLike } from '../isObjectLike';
import { getTag } from '../getTag';

export function isArguments(data?: unknown): data is IArguments {
  return isObjectLike(data) && getTag(data) === '[object Arguments]';
}
