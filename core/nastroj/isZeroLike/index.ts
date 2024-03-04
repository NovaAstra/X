import type { NumberLike } from '@chaos/taper';

export function isZeroLike(data?: unknown): data is NumberLike<0> {
  return data == 0;
}
