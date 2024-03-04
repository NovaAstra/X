import { is } from '../is';

export function isMap(data?: unknown): data is Map<any, any> {
  return is(Map, data);
}
