import { isArray } from '../isArray';

export function flatten<T>(data: ArrayLike<T>): T[];

export function flatten<T>(data) {
  return Array.from<T>(data).reduce(
    (acc, next) => acc.concat(isArray(next) ? flatten(next) : next),
    []
  );
}
