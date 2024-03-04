import { is } from '../is';

export function isError(data?: unknown): data is Error {
  return is(Error, data);
}
