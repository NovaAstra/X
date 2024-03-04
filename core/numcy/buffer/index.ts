import { DTypeEnum } from '../ndarray';

export function generic(size: number = 0): number[] {
  return Array.from({ length: size }, () => 0);
}

export function typedarray(dtype: DTypeEnum = DTypeEnum.GENERIC, size: number = 0) {}

export function buffer(dtype: DTypeEnum = DTypeEnum.GENERIC, size: number = 0) {
  if (dtype === DTypeEnum.GENERIC) {
    return generic(size);
  }

  if (dtype === DTypeEnum.BINARY) {
  }

  return typedarray(dtype, size);
}
