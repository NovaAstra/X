import { is } from '../is';

export function isDate(data?: unknown): data is Date {
  return is(Date, data);
}
