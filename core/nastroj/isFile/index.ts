import { is } from '../is';

export function isFile(data?: unknown): data is File {
  return is(File, data);
}
