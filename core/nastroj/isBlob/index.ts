import { is } from '../is';

export function isBlob(data?: unknown): data is Blob {
  return is(Blob, data);
}
