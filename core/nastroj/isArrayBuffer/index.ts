import { is } from '../is';

export function isArrayBuffer(data?: unknown): data is ArrayBuffer {
  return is(ArrayBuffer, data);
}
