import { is } from '../is';

export function isBigint(data?: unknown): data is bigint {
  return is(BigInt, data);
}

