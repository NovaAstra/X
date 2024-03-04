export function isArray<T extends unknown[]>(data?: unknown): data is T {
  if (Array.isArray) {
    return Array.isArray(data);
  }

  if (data instanceof Object) {
    return data instanceof Array;
  }

  return Object.prototype.toString.call(data) === '[object Array]';
}
