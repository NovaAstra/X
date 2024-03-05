import type { NumberLike } from '@x/taper';

export function isZeroLike(data?: unknown): data is NumberLike<0> {
  return data == 0;
}
