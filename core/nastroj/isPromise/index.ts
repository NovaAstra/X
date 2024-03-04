import { is } from '../is';

export function isPromise(data?: unknown): data is Promise<any> {
  return is(Promise, data);
}
